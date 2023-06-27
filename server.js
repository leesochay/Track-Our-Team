
// const express = require('express');
const mysql = require('mysql2');
const inquirer = require('inquirer');
const cTable = require('console.table');

const PORT = process.env.PORT || 3001;
// const app = express();

// app.use(express.urlencoded({ extended: true }));
// app.use(express.json());

const db = mysql.createConnection(
  {
    host: 'localhost',
    user: 'root',
    password: 'u*sHvWC6',
    database: 'cms_db'
  });

db.connect((err) => {
  if (err) throw err;
  console.log(`Connected to the cms_db database.`);
  initialPrompt();
});

const viewAllDepartments = () => {
  db.query('SELECT * FROM department', function (err, results) {
    console.log(" ");
    console.table(results);
    initialPrompt();
  });
  }

const viewAllRoles = () => {
  db.query('SELECT role.id, role.title, role.salary, department.name AS department FROM role JOIN department ON role.department_id = department.id', function (err, results) {
    console.log(" ");
    console.table(results);
    initialPrompt();
  });
  }

  const viewAllEmployees = () => {
    db.query('SELECT employee.id, employee.first_name, employee.last_name, role.title, role.salary, department.name AS department, CONCAT(manager.first_name, " ", manager.last_name) AS manager FROM employee LEFT JOIN role ON role.id = employee.role_id LEFT JOIN department ON role.department_id = department.id LEFT JOIN employee AS manager ON employee.manager_id = manager.id ORDER BY employee.id ASC;', function (err, results) {
      console.log(" ");
      console.table(results);
      initialPrompt();
    });
    }


function initialPrompt() {
inquirer
  .prompt([
    {
        type:"list",
        message: "What would you like to do?",
        choices: ['View All Departments', 'View All Roles', 'View All Employees', 'Add Department', 'Add Role', 'Add Employee', 'Update Employee Role', 'Quit'],
        name: "options",
        loop: false,
    },
])

.then((answers) => {
if (answers.options === "View All Departments") {
  viewAllDepartments();
} else if (answers.options === "View All Roles") {
  viewAllRoles();
} else if (answers.options === "View All Employees") {
  viewAllEmployees();
} else if (answers.options === "Quit") {
  db.end();
}
});
}

