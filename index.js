// index.js

// const { menu, addDepartment } = require('./prompts');
const inquirer = require('inquirer');
const { db, getDepartments,addDepartment, getRoles, addRole, getEmployees, addEmployee } = require('./config/db');
// const { addDepartment } = require('./prompts');
const questions = [
  {
    type: 'list',
    name: 'choice',
    message: 'What would you like to do?',
    choices: [
      'View All Departments',
      'View All Employees',
      'View All Roles',
      'Add a department',
      'Add a role', 
      'Add an employee', 
      'Update an employee', "Exit"
      // etc
    ]
  }
]
const departmentQuestions = [
  {
    type: 'input',
    name: 'department_name',
    message: 'What is the department name?',
    
  }
]
const roleQuestions = [
  {
    type: 'input',
    name: 'title',
    message: 'What is the title of the role?',
    
  },{
    type: 'input',
    name: 'salary',
    message: 'What is the salary of the role?',
    
  },{
    type: 'input',
    name: 'department_id',
    message: 'What is the department id of the role?',
    
  }
]
const mainPrompts = ()=>{
  inquirer.prompt(questions).then (async (response)=>{
console.log (response)
let choice = response.choice
if (choice=="View All Departments") {
  let departments = await getDepartments() 
  console.table (departments)
}
else if  (choice == "View All Roles") {
  let roles = await getRoles ()
  console.table (roles)
}
if (choice=="View All Employees") {
  let employees = await getEmployees() 
  console.table (employees)
}
else if (choice=="Add a role") {
  await inquirer.prompt (roleQuestions) .then (async(response)=>{
    let roles = await addRole(response.title, response.salary, response.department_id)
  })
    // console.table (departments)
  }
else if (choice=="Add a department") {
await inquirer.prompt (departmentQuestions) .then (async(response)=>{
  let departments = await addDepartment(response.department_name)
})
  // console.table (departments)
}
else if (choice=="Add an employee") {
  await inquirer.prompt (employeeQuestions) .then (async(response)=>{
    let employees = await addEmployee(response.firstName, response.lastName, response.roleId, response.managerId)
  })
    // console.table (departments)
  }
else if (choice=="Exit"){
  process.exit();
}
return choice
  }).then (()=>{
    mainPrompts();
  })
}
const main = async () => {
mainPrompts ()
  // let connection;

  // try {
    
  //   // get database connection
  //   // connection = await db();

  //   let finish = false;

  //   while(!finish) {

  //     // prompt user for action
  //     let choice = await menu();

  //     switch(choice) {
  //       case 'View All Departments':
  //         const departments = await getDepartments(connection);
  //         console.table(departments);
  //         break;

  //       case 'Add Department':
  //         const name = await addDepartment(); 
  //         // use connection to insert department  
  //         break;

  //       // other cases
  //     }

  //   }

  // } catch (err) {
  //   console.log(err);
  // } finally {
  //   if (connection) connection.end();
  // }

}

main();