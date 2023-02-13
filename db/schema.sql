-- Drop the database if it exists
DROP DATABASE IF EXISTS db_portproject;

-- Create a new database
CREATE DATABASE db_portproject;

-- Connect to the database
\c db_portproject;

-- Drop the table if it exists
DROP TABLE IF EXISTS strains;

-- Create the strains table
CREATE TABLE strains (
  id SERIAL PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  type VARCHAR(255) NOT NULL,
  mood VARCHAR(255) NOT NULL,
  is_avibe BOOLEAN NOT NULL,
  image TEXT DEFAULT 'https://dummyimage.com/400x400/6e6c6e/e9e9f5.png&text=No+Image'
);
