const { Pool } = require('pg');
require('dotenv').config();

const pool = new Pool({
  user: process.env.DB_USER,
  host: process.env.DB_HOST,
  database: process.env.DB_DATABASE,
  password: process.env.DB_PASSWORD,
  port: process.env.DB_PORT,
});

//test the connection
pool.query('SELECT NOW()', (error, res) => {
  if (error) {
    console.error('database connection error:', error.stack);
  } else {
    console.log('connected to PostgreSQL at:', res.rows[0].now);
  }
});

module.exports = pool;