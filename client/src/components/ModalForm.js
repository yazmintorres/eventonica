import { useEffect, useState } from "react";

const ModalForm = ({
  setShow,
  onSubmitForm,
  title,
  name,
  date,
  description,
  category,
}) => {
  // need to format string because it is coming from json response as "2023-03-15T07:00:00.000Z"
  let formatDateString = date.slice(0, 10);

  // NEW EVENT
  const [newEvent, setNewEvent] = useState({
    name,
    date: formatDateString,
    category,
    description,
  });

  // useEffect(() => console.log(newEvent), [newEvent]);

  // handle Input
  const handleChange = (eventProperty) => {
    return (e) => {
      setNewEvent({ ...newEvent, [eventProperty]: e.target.value });
    };
  };

  return (
    <div className="modal">
      <div className="modal-content">
        <div className="modal-header">
          <h4 className="modal-title">{title}</h4>
        </div>
        <div className="modal-body">
          {/* we need to have two different on submit functions 
          we can pass the post or edit function as a prop*/}
          <form onSubmit={(e) => onSubmitForm(e, newEvent)}>
            <div className="name-form">
              <label htmlFor="name">Event Name:*</label>
              <input
                type="text"
                name="name"
                id="name"
                value={newEvent.name}
                onChange={handleChange("name")}
                required
              />
            </div>
            <div className="date-form">
              <label htmlFor="date">Date:</label>
              <input
                type="date"
                name="date"
                id="date"
                value={newEvent.date}
                onChange={handleChange("date")}
              />
            </div>
            <div className="category-form">
              <label htmlFor="category">Category:</label>
              <input
                type="text"
                name="category"
                id="category"
                value={newEvent.category}
                onChange={handleChange("category")}
              />
            </div>
            <div className="desc-form">
              <label htmlFor="desc">Description:</label>
              <textarea
                rows="5"
                cols="20"
                name="desc"
                id="desc"
                value={newEvent.description}
                onChange={handleChange("description")}
              />
            </div>
            <button>Submit</button>
          </form>
        </div>
        <div className="modal-footer">
          <button
            onClick={() => setShow(false)}
            className=" btn btn-modal-close"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

export { ModalForm };
