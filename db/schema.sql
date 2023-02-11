
DROP DATABASE IF EXISTS db_portproject; 
CREATE DATABASE db_portproject; 

-- \c  db_portproject


CREATE TABLE strains (
  id SERIAL PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  type VARCHAR(255) NOT NULL,
  flavor VARCHAR(255) NOT NULL,
  effects TEXT NOT NULL,
  description TEXT NOT NULL,
  created_at TIMESTAMP DEFAULT NOW()
);