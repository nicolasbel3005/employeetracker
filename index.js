// index.js

const { menu, addDepartment } = require('./prompts');
const { db, getDepartments } = require('./config/db');

const main = async () => {

  let connection;

  try {
    
    // get database connection
    connection = await db();

    let finish = false;

    while(!finish) {

      // prompt user for action
      let choice = await menu();

      switch(choice) {
        case 'View All Departments':
          const departments = await getDepartments(connection);
          console.table(departments);
          break;

        case 'Add Department':
          const name = await addDepartment(); 
          // use connection to insert department  
          break;

        // other cases
      }

    }

  } catch (err) {
    console.log(err);
  } finally {
    if (connection) connection.end();
  }

}

main();