import { useState } from "react";
import { ModalForm } from "./ModalForm";
import Moment from "react-moment";

const EventRow = ({
  event_id,
  name,
  date,
  category,
  description,
  isFavorited,
  setEvents,
  events,
}) => {
  const [show, setShow] = useState(false);
  const [showHeart, setShowHeart] = useState(false);

  // DELETE A REQUEST
  const deleteEvent = async (event_id) => {
    try {
      const deleteTodo = await fetch(
        `http://localhost:8080/api/event/${event_id}`,
        {
          method: "DELETE",
        }
      );
      console.log(deleteTodo);
      // take a callback on delete and filter in ListEvent
      setEvents(events.filter((event) => event.event_id !== event_id));
    } catch (error) {
      console.error(error.message);
    }
  };

  // PUT (UPDATE) EVENT
  const onSubmitFormPut = async (e, newEvent) => {
    e.preventDefault();
    console.log(newEvent);
    console.log(event_id);
    try {
      const body = newEvent;
      console.log(body);
      const updateEvent = await fetch(
        `http://localhost:8080/api/event/update/${event_id}`,
        {
          method: "PUT",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(body),
        }
      );
      console.log(updateEvent);
      window.location = "/";
    } catch (error) {
      console.error(error.message);
    }
  };

  // STYLE HEART CLICKED
  // UPDATE THE BACKEND ABOUT IF ROW IS FAVORITED OR NOT
  const onHeartClick = async () => {
    setShowHeart(!showHeart);
    console.log(isFavorited);
    try {
      const body = { isfavorited: !showHeart };
      console.log(body);
      const updateFavorite = await fetch(
        `http://localhost:8080/api/favorite/event/${event_id}`
      );
    } catch (error) {
      console.error(error.message);
    }
  };

  return (
    <tr>
      <td>
        <button
          onClick={onHeartClick}
          style={showHeart ? { color: "palevioletred" } : null}
          className="heart"
        >
          <span>&#10084;</span>
        </button>
      </td>
      <td>{name}</td>
      <td>{date ? <Moment format="MMM DD, YYYY">{date}</Moment> : "TBD"}</td>
      <td>{category}</td>
      <td>{description}</td>
      <td>
        <button className="btn btn-row btn-edit" onClick={() => setShow(true)}>
          Edit
        </button>
        {show ? (
          <ModalForm
            title={"Edit Event"}
            setShow={setShow}
            onSubmitForm={onSubmitFormPut}
            name={name}
            date={date ? date : ""}
            description={description ? description : ""}
            category={category ? category : ""}
          />
        ) : null}
      </td>
      <td>
        <button
          className="btn btn-row btn-delete"
          onClick={() => deleteEvent(event_id)}
        >
          Delete
        </button>
      </td>
    </tr>
  );
};

export { EventRow };
