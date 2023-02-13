const pgp = require("pg-promise")();
require("dotenv").config();

const { DATABASE_URL } = process.env;

// If a DATABASE_URL environment variable is set, use that for the connection string
// otherwise, use the individual environment variables
const cn = DATABASE_URL || {
  host: process.env.PG_HOST,
  port: process.env.PG_PORT,
  database: process.env.PG_DATABASE,
  user: process.env.PG_USER,
  password: process.env.PG_PASSWORD,
};

let db;

// Catch errors that may occur when connecting to the database
try {
  db = pgp(cn);
} catch (error) {
  console.error("Error connecting to the database:", error);
  process.exit(1);
}

module.exports = db;
