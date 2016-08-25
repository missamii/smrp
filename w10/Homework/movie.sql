CREATE TABLE movies (
  ID INTEGER PRIMARY KEY AUTOINCREMENT,
  Title TEXT NOT NULL,
  Rating TEXT NOT NULL
);

CREATE TABLE movie_theaters (
  ID INTEGER PRIMARY KEY AUTOINCREMENT,
  Name TEXT NOT NULL,
  Movies_Playing TIMESTAMP
);