// db.js

const mysql = require('mysql2/promise');
const fs = require('fs');
const config = require('./config'); // database credentials

// Database connection pool
const pool = mysql.createPool({
  host: config.host,
  database: config.database,
  user: config.user,
  password: config.password  
});

// Initialize database 
const initializeDB = async () => {

  await pool.query(fs.readFileSync('./sql/schema.sql'));

  await pool.query(fs.readFileSync('./sql/seeds.sql'));

};

// Query functions

const getDepartments = async () => {
  const [rows] = await pool.query('SELECT * FROM department');
  return rows;
} 

const getRoles = async () => {
  // Get roles logic...
}

const getEmployees = async () => {
  // Get employees logic... 
}

const addDepartment = async (name) => {

  // Input validation
  if (!name) {
    throw 'Department name required';
  }

  if (typeof name !== 'string') {
    throw 'Name must be a string';
  }

  if (name.length > 30) {
    throw 'Name too long';
  }

  // Insert department
  const sql = `INSERT INTO department (name) VALUES (?)`;
  const [result] = await pool.query(sql, name);

  // Add role 
const addRole = async (title, salary, departmentId) => {

    // Validate
    if (!title || !salary || !departmentId) {
      throw 'Title, salary, and department ID are required';
    }
  
    // Insert role
    const sql = `
      INSERT INTO role (title, salary, department_id) 
      VALUES (?, ?, ?)
    `;
  
    const [result] = await pool.query(sql, [title, salary, departmentId]);
  
    return result;
  
  }
  
  // Add employee
  const addEmployee = async (firstName, lastName, roleId, managerId) => {
  
    // Validation and inserting
  
    return result;
  
  } 
  
  // Update employee role
  const updateEmployeeRole = async (employeeId, newRoleId) => {
    
    // Validate employeeId and newRoleId
  
    // Update statement
  
    return result;
  
  }
  return result;  

}

module.exports = {
  initializeDB,
  getDepartments,
  getRoles,
  // etc
}