import { useState, useEffect } from "react";
import { ModalForm } from "./ModalForm";
const TopPanel = ({ events, setEvents }) => {
  const [show, setShow] = useState(false);

  // POST AN EVENT
  const onSubmitFormPost = async (e, newEvent) => {
    e.preventDefault();
    try {
      const body = newEvent;
      const postEvent = await fetch("http://localhost:8080/api/event/add", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });
      console.log(postEvent);
      // redirect to home page after form submit
      window.location = "/";
    } catch (error) {
      console.error(error.message);
    }
  };

  return (
    <div className="top-panel">
      <button className="btn btn-panel btn-add" onClick={() => setShow(true)}>
        Add Event
      </button>
      {show ? (
        <ModalForm
          title={"Add Event"}
          setShow={setShow}
          onSubmitForm={onSubmitFormPost}
          name=""
          date=""
          category=""
          description=""
        />
      ) : null}
      <button className="btn btn-panel btn-fav">Filter Favorite</button>
    </div>
  );
};

export { TopPanel };
