import "./styles.css";
import { useState, useEffect } from "react";
import { TopPanel } from "./components/TopPanel";
import ListEvents from "./components/ListEvents";

function App() {
  //  this holds all events in the DB
  const [events, setEvents] = useState([]);

  // this is for the user to create a new event
  // const [newEvent, setNewEvent] = useState({
  //   name: "",
  //   date: "",
  //   category: "",
  //   description: "",
  // });

  // useEffect(() => console.log(newEvent), [newEvent]);

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
  }, []);

  return (
    <div className="App">
      <header>
        <h1>Techtonica Events 2023</h1>
      </header>
      <main>
        <TopPanel
          events={events}
          setEvents={setEvents}
          // newEvent={newEvent}
          // setNewEvent={setNewEvent}
        />
        <ListEvents
          events={events}
          setEvents={setEvents}
          // newEvent={newEvent}
          // setNewEvent={setNewEvent}
        />
      </main>
    </div>
  );
}

export default App;
