
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
  db.query('SELECT * FROM role', function (err, results) {
    console.log(" ");
    console.table(results);
    initialPrompt();
  });
  }

  const viewAllEmployees = () => {
    db.query('SELECT * FROM employee', function (err, results) {
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

