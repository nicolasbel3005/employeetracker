// db.js

const mysql = require('mysql2/promise');
const fs = require('fs');
require("dotenv").config()
// const config = require('./config'); // database credentials

// Database connection pool
const db = mysql.createPool({
  host: process.env.HOST,
  database:process.env.DB_NAME,
  user: process.env.USER,
  password: process.env.PASSWORD 
});

// Initialize database 
const initializeDB = async () => {

  await db.query(fs.readFileSync('./sql/schema.sql'));

  await db.query(fs.readFileSync('./sql/seeds.sql'));

};

// Query functions

const getDepartments = async () => {
  const [rows] = await db.query('SELECT * FROM department');
  return rows;
} 

const getRoles = async () => { 
  const [rows] = await db.query('SELECT * FROM role');
return rows;
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
  const [result] = await db.query(sql, name);
}
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
  
    const [result] = await db.query(sql, [title, salary, departmentId]);
  
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
  

module.exports = { db,
  initializeDB,
  getDepartments,
  getRoles, addDepartment , addRole, getEmployees, addEmployee 
  // etc
}