// prompts.js

const inquirer = require('inquirer');

const menu = async () => {

  const { choice } = await inquirer.prompt([
    {
      type: 'list',
      name: 'choice',
      message: 'What would you like to do?',
      choices: [
        'View All Departments',
        'View All Employees',
        // etc
      ]
    }
  ]);

  return choice;

}

const addDepartment = async () => {

  const { name } = await inquirer.prompt([
    {
      name: 'name', 
      message: 'Enter department name'
    }
  ]);

  return name;

} 

module.exports = {
  menu,
  addDepartment
  // etc 
}