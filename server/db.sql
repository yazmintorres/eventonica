CREATE DATABASE eventonica;

CREATE TABLE events (
  event_id SERIAL PRIMARY KEY,
  name TEXT NOT NULL, 
  date DATE, 
  category TEXT,
  description TEXT
);

-- INSERT EVENT 
 INSERT INTO events (name, date) VALUES ('Women in Tech Techtonica Panel', '2023-04-21');
