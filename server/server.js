//This is the minimal express server.
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const path = require("path");
require("dotenv").config();
const db = require("../server/db/db-connection.js");

const app = express();
const PORT = 8080;

// Configuring cors middleware
app.use(cors());

// Configuring body parser middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// GET ALL EVENTS
app.get("/api/events", async (req, res) => {
  try {
    // get from database
    const allEvents = await db.query("SELECT * FROM events");
    res.json(allEvents.rows);
  } catch (error) {
    console.error(error.message);
  }
});

// ADD AN EVENT

app.post("/api/event/add", async (req, res) => {
  try {
    let { name, date, category, description } = req.body;
    if (!date) date = null;
    if (!category) category = null;
    if (!description) description = null;
    const newEvent = await db.query(
      "INSERT INTO events (name, date, category, description) VALUES ($1, $2, $3, $4) RETURNING *",
      [name, date, category, description]
    );
    // DOES NOT WORK FOR SOME REASON: column "date" is of type date but expression is of type text
    // const newEvent = await db.query(
    //   "INSERT INTO events (name, date, category, description) VALUES ($1, NULLIF ($2, ''), NULLIF($3, ''), NULLIF($4,'')) RETURNING *",
    //   [name, date, category, description]
    // );
    res.json(newEvent.rows[0]);
  } catch (error) {
    console.error(error.message);
  }
});

// DELETE AN EVENT
app.delete("/api/event/:id", async (req, res) => {
  const { id } = req.params;
  const deleteEvent = await db.query("DELETE FROM events WHERE event_id = $1", [
    id,
  ]);
  res.json("Todo was deleted!");
  try {
  } catch (error) {
    console.error(error.message);
  }
});

// UPDATE AN EVENT
app.put("/api/event/update/:id", async (req, res) => {
  try {
    const { id } = req.params;
    let { name, date, category, description } = req.body;
    if (!date) date = null;
    if (!category) category = null;
    if (!description) description = null;
    const updateEvent = await db.query(
      "UPDATE events SET name=$1, date = $2, category = $3, description = $4 WHERE event_id = $5 RETURNING *",
      [name, date, category, description, id]
    );
    res.json(updateEvent.rows[0]);
  } catch (error) {
    console.error(error.message);
  }
});

//  UPDATE IS FAVORITED
app.put("/api/favorite/event/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const { isfavorited } = req.body;
    const updateEvent = await db.query(
      "UPDATE EVENTS SET isFavorited = $1 WHERE event_id = $2 RETURNING *",
      [isfavorited, id]
    );
    res.json(updateEvent.rows[0]);
  } catch (error) {
    console.error(error.message);
  }
});

app.listen(PORT, () =>
  console.log(`Hola! Server running on Port http://localhost:${PORT}`)
);

//hardcode the events response for testing reasons. This call has one more event that the real DB
// const events = [

//     {id: 1, title: 'Women in Tech Techtonica Panel', location: 'Overland Park Convention Center'},
//     {id: 2, title: 'Japanese Cultural Education', location: 'Seattle Convention Center'},
//     {id: 3, title: "Haven 90's Party Night Club", location: 'Hilton Hotel Kansas City'},
//     {id: 4, title: 'Comedy Night at the Station', location: 'SF Hilton Hotel'},
//     {id: 5, title: 'A Decadent Arts Experience', location: 'West Ridge Mall'},
//     {id: 6, title: 'Techtonica Classroom Course', location: 'Techtonica HQ'}
//   ];
// res.json(events);
