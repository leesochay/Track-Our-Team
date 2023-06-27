
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
  db.query(sql, newDept, function (err, result) {
    if (err) throw err;
    console.log(" ");
    console.log(`Added ${newDept} to the database`);
    console.log(" ");
    initialPrompt();
  });
})
}

function addRole() {
  db.query("select * from department", (err, results) => {
if (err) throw err;
const departments = results.map(({ id, name }) => ({
    name: name,
    value: id
  }));
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
    type:"list",
    message: "In what department will this position report?",
    name: "roleDepartment",
    choices: departments,
    loop: false,
    }
  ])
.then((answers) => {
  const newRole = Object.values(answers);
  const sql = `INSERT INTO role (title, salary, department_id) VALUES (?, ?, ?)`;
  db.query(sql, newRole, function (err, result) {
    if (err) throw err;
    console.log(" ");
    console.log(`Added ${answers.roleName} to the database`);
    console.log(" ");
    initialPrompt();
  });
})
}
)}


function addEmployee() {
  db.query("select * from role", (err, results) => {
    if (err) throw err;
const employees = results.map(({ id, title }) => ({
  name: title,
  value: id
}));
  db.query("select manager_id, CONCAT(first_name,' ', last_name) AS first_name FROM employee;", (err, results) => {
  if (err) throw err;
  const managers = results.map(({ id, first_name }) => ({
  name: first_name,
  value: id
  }));

inquirer
  .prompt([
       {
      type:"input",
      name: "empFirstName",
      message: "What is the first name of the employee?",
    },
    {
      type:"input",
      name: "empLastName",
      message: "What is the last name of the employee?",
    },
    {
      type:"list",
      message: "In what role will the employee fill?",
      name: "empRole",
      choices: employees,
      loop: false,
    },
    {
      type:"list",
      message: "Who will play the part of manager here?",
      name: "empManager",
      choices: managers,
      loop: false,
    }
  ])
.then((answers) => {
  const newEmployee = Object.values(answers);
  const sql = `INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES (?, ?, ?, ?)`;
  db.query(sql, newEmployee, function (err, result) {
    if (err) throw err;
    console.log(" ");
    console.log(`Added ${answers.empFirstName} ${answers.empLastName} to the database`);
    console.log(" ");
    initialPrompt();
  });
})
})})}








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
} else if (answers.options === "Add Employee") {
  addEmployee();
} else if(answers.options === "Quit") {
  db.end();
}
});
}
