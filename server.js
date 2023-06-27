
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

const addDepartment = () => {
  inquirer
  .prompt([
    {
        type:"input",
        name: "departmentName",
        message: "What is the name of the department to add?",
    },
])
.then((answers) => {
  const sql = `INSERT INTO department (name) VALUES (?)`;
  let newDept = answers.departmentName;
  console.log(newDept);
  db.query(sql, newDept, function (err, result) {
    if (err) throw err;
    console.log(" ");
    console.log(`Added ${newDept} to the database`);
    initialPrompt();
  });
})
}

const addRole = () => {
  inquirer
  .prompt([
    {
        type:"input",
        name: "roleName",
        message: "What is title for the new position in the company?",
    },
    {
      type:"input",
      name: "roleSalary",
      message: "What is salary associated with this position?",
    },
    {
    type:"input",
    name: "roleDepartment",
    message: "In what department will this position report?",
    },
])
.then((answers) => {
  const sql = `INSERT INTO role (title, salary, department_id) VALUES (?)`;
  let newRole = answers;
  console.log(newRole);
  db.query(sql, newRole, function (err, result) {
    if (err) throw err;
    console.log(" ");
    console.log(`Added ${newRole} to the database`);
    initialPrompt();
  });
})
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
} else if (answers.options === "Add Department") {
  addDepartment();
} else if (answers.options === "Add Role") {
  addRole();
} else if (answers.options === "Quit") {
  db.end();
}
});
}
