function init() {
const express = require('express');
const mysql = require('mysql2');
const inquirer = require('inquirer');
const cTable = require('console.table');

const PORT = process.env.PORT || 3001;
const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

const db = mysql.createConnection(
  {
    host: 'localhost',
    user: 'root',
    password: 'u*sHvWC6',
    database: 'cms_db'
  });

db.connect((err) => {
  if (err) {
    console.error("Unable to connect to the cms_db database", err);
    return;
}
    console.log(`Connected to the cms_db database.`);

});

inquirer
  .prompt([
    {
        type:"list",
        message: "What would you like to do?",
        choices: ["View All Departments", "View All Roles", "View All Employees", "Add Department", "Add Role", "Add Employee", "Update Employee Role", "Quit"],
        name: "options",
    },
])

.then((answers) => {

if (answers.options === "View All Departments") {
  db.query('SELECT * FROM department', function (err, results) {
    console.table(results);
  });
} else if (answers.options === "View All Roles") {
  db.query('SELECT * FROM role', function (err, results) {
    console.table(results);
  });
} else if (answers.options === "View All Employees") {
  db.query('SELECT * FROM employee', function (err, results) {
    console.table(results);
  })
}});
}

init();
