import { useState, useEffect } from "react";
import { EventRow } from "./EventRow";
import Moment from "react-moment";

function ListEvents({ newEvent, events, setNewEvent, setEvents }) {
  return (
    <div className="main-table">
      <table>
        <thead>
          <tr>
            <th className="col-hearts">hearts</th>
            <th className="col-name">Event Name</th>
            <th className="col-date">Date</th>
            <th className="col-category">Category</th>
            <th className="col-desc">Description</th>
            <th className="col-edit">Edit</th>
            <th className="col-del">Delete</th>
          </tr>
        </thead>
        <tbody>
          {events.map((event) => (
            <EventRow
              key={event.event_id}
              name={event.name}
              date={event.date}
              category={event.category}
              description={event.description}
              event_id={event.event_id}
              events={events}
              setEvents={setEvents}
            />
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default ListEvents;
