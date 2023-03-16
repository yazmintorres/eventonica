import { useEffect, useState } from "react";

const ModalForm = (props) => {
  const [event, setEvent] = useState({
    name: "",
    date: "",
    category: "",
    description: "",
  });

  useEffect(() => console.log(event), [event]);

  // POST/ADD AN EVENT

  // when close on modal is clicked, do this
  const closeOnClick = (e) => {
    props.onClose();
    // callback in parent
    // props.updateDescription(e);
  };

  // handle Input
  const handleChange = (eventProperty) => {
    return (e) => {
      setEvent({ ...event, [eventProperty]: e.target.value });
    };
  };

  return (
    <div className="modal">
      <div className="modal-content">
        <div className="modal-header">
          <h4 className="modal-title">{props.title}</h4>
        </div>
        <div className="modal-body">
          <form action="#">
            <div className="name-form">
              <label htmlFor="name">Event Name:</label>
              <input
                type="text"
                name="name"
                id="name"
                value={event.name}
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
                value={event.date}
                onChange={handleChange("date")}
              />
            </div>
            <div className="desc-form">
              <label htmlFor="desc">Description:</label>
              <textarea
                rows="5"
                cols="20"
                name="desc"
                id="desc"
                value={event.desc}
                onChange={handleChange("description")}
              />
            </div>
            <div className="category-form">
              <label htmlFor="category">Category:</label>
              <input
                type="text"
                name="category"
                id="category"
                value={event.category}
                onChange={handleChange("description")}
              />
            </div>
            <button type="submit">Submit</button>
          </form>
        </div>
        <div className="modal-footer">
          <button onClick={closeOnClick} className=" btn btn-modal-close">
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

export { ModalForm };
