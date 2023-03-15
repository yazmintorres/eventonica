import { useState, useEffect } from "react";

function ListEvents() {
  //  store all events data
  const [events, setEvents] = useState([]);

  // get all events
  const getEvents = async () => {
    try {
      const response = await fetch("http://localhost:8080/api/events");
      // parses the body text as json and returns JS object
      const jsonData = await response.json();
      setEvents(jsonData);
    } catch (error) {
      console.error(error.message);
    }
  };

  useEffect(() => {
    getEvents();
  }, [setEvents]);

  return (
    <div className="main-table">
      <table>
        <thead>
          <tr>
            <th className="col-hearts">hearts</th>
            <th className="col-name">Name</th>
            <th className="col-date">Date</th>
            <th className="col-category">Category</th>
            <th className="col-desc">Description</th>
            <th className="col-edit">Edit</th>
            <th className="col-del">Delete</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>test</td>
          </tr>
          <tr>
            <td>test</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default ListEvents;
