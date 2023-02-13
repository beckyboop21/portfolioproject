-- Drop the database if it exists
DROP DATABASE IF EXISTS db_portproject;

-- Create a new database
CREATE DATABASE db_portproject;

\c db_portproject;

DROP TABLE IF EXISTS strains;

CREATE TABLE strains (
  id serial PRIMARY KEY,
  name text NOT NULL,
  type text NOT NULL,
  mood integer NOT NULL,
  is_avibe integer NOT NULL,
  image boolean NOT NULL,
  image_url text NOT NULL
);
