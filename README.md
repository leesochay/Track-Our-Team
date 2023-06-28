# Track Our Team

 ![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)

## Table of Contents
  - [Description](#description)
  - [Installation](#installation)
  - [Usage](#usage)
  - [Contributing](#contributing)
  - [License](#license)

## Description
This challenge involved the building of a content managagment system. This allows users to interact with data that is stored in databases. Building a command line interface, the user will be able to manage employee data. This application was built utilizing Node.js, Inquirer, and MySQL. 

User Story
- AS A business owner
- I WANT to be able to view and manage the departments, roles, and employees in my company
- SO THAT I can organize and plan my business

Acceptance Criteria
- GIVEN a command-line application that accepts user input
- WHEN I start the application
- THEN I am presented with the following options: view all departments, view all roles, view all employees, add a department, add a role, add an   
  employee, and update an employee role
- WHEN I choose to view all departments
- THEN I am presented with a formatted table showing department names and department ids
- WHEN I choose to view all roles
- THEN I am presented with the job title, role id, the department that role belongs to, and the salary for that role
- WHEN I choose to view all employees
- THEN I am presented with a formatted table showing employee data, including employee ids, first names, last names, job titles, departments, salaries, 
  and managers that the employees report to
- WHEN I choose to add a department
- THEN I am prompted to enter the name of the department and that department is added to the database
- WHEN I choose to add a role
- THEN I am prompted to enter the name, salary, and department for the role and that role is added to the database
- WHEN I choose to add an employee
- THEN I am prompted to enter the employee’s first name, last name, role, and manager, and that employee is added to the database
- WHEN I choose to update an employee role
- THEN I am prompted to select an employee to update and their new role and this information is updated in the database

With this description and criteria, the application is built using one database with three tables (department, role, employee).

## Installation
1. This application utilizes [Node.js](https://nodejs.org/en).
2. Install npm package [Inquirer](https://www.npmjs.com/package/inquirer) as the application to ask questions and capture the repsonses.
3. Install npm package [Mysql2](https://www.npmjs.com/package/mysql2) which allow the connection and interaction with Mysql databases.
4. Install npm package [Console.table](https://www.npmjs.com/package/console.table) which formats tables within the console.

## Usage

Demo Video: [Track-Our-Team Demo](https://drive.google.com/file/d/1Bs7E0_f77cjZONEGXeFnJ9keiH-Yc7VM/view)

This is a command-line interface application, so all of the start up methods, usage, and interaction is through the command-line (specifically Git Bash for me).
 - Sign in to mysql to provide structure and initial data to the database and tables.
 - Source schema.sql which provides structure for the database and tables.
 - Source seeds.sql which provides initial data within the tables.
 - Quit mysql and start the appliocation (in the correct directory) by entering node server.js

![InitialScreenshot](https://github.com/leesochay/track-our-team/blob/main/images/Initial_screenshot.png)

![All Departments](https://github.com/leesochay/track-our-team/blob/main/images/All_departments_screenshot.png)

![All Roles](https://github.com/leesochay/track-our-team/blob/main/images/View_all_roles_screenshot.png)

![All Employees](https://github.com/leesochay/track-our-team/blob/main/images/All_employees_screenshot.png)

![Add Department](https://github.com/leesochay/track-our-team/blob/main/images/Add_department.png)

![Add Role](https://github.com/leesochay/track-our-team/blob/main/images/Add_role.png)

![Add Employee](https://github.com/leesochay/track-our-team/blob/main/images/Add_employee.png)

![Update Employee Role](https://github.com/leesochay/track-our-team/blob/main/images/Update_employee_role.png)

## Contributing
Many Resources to help me along the way:
- [MySQL](https://www.mysql.com/): Update Statement, SELECT Statement
- npm Documentation: [Inquirer](https://www.npmjs.com/package/inquirer), [MySQL2](https://www.npmjs.com/package/mysql2)
- [W3 Schools - MySQL](https://www.w3schools.com/mysql/default.asp): SELECT Statement, UPDATE, INNER JOIN, LEFT JOIN, INSERT-SELECT, Constraints, Auto_Increment, Data Types, , Functions, CONCAT()
- [Node.js MySQL](https://www.w3schools.com/nodejs/nodejs_mysql.asp)
- [W3 Schools - JavaScript](https://www.w3schools.com/js/default.asp)
- JavaScript: map(), forEach()
- [MDN Web docs](https://developer.mozilla.org/en-US/): forEach(), map()
- [Convert an Object to an Array in JavaScript](https://www.javascripttutorial.net/object/convert-an-object-to-an-array-in-javascript/)

## License
MIT License
A short and simple permissive license with conditions only requiring preservation of copyright and license notices. Licensed works, modifications, and larger works may be distributed under different terms and without source code. Please refer to [License: MIT](https://choosealicense.com/licenses/mit/) for more information.
