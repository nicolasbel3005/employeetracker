// db.js

const mysql = require('mysql2/promise');

// Database connection 
const db = async () => {

  // create the connection 
  const connection = await mysql.createConnection({
    host: 'localhost',
    user: 'root', 
    password: 'password',
    database: 'employee_db'
  });

  // simple logger
  console.log(`Connected to database: ${connection.config.database}`);

  return connection;
}

// Query functions  
const getDepartments = async (connection) => {
  const [rows] = await connection.query('SELECT * FROM department');
  return rows;
}

const getEmployees = async (connection) => {
  // employee query
}

module.exports = {
  db,
  getDepartments,
  getEmployees
  // etc
}