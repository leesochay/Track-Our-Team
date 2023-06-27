# Track Our Team

 ![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)

## Table of Contents
  - [Description](#description)
  - [Installation](#installation)
  - [Usage](#usage)
  - [Contributing](#contributing)
  - [Tests](#tests)
  - [License](#license)
  - [Questions](#questions)

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

Demo Video: 

1. To generate the svg logo, enter "node index.js" into the command-line and follow the prompts.

## Contributing
1. The npm package Inquirer
3. Notes and video replay from class
4. MDN Web Docs [l](https://developer.mozilla.org/en-US/docs/Web/SVG/Tutorial).
5. MDN Web Docs [s](https://developer.mozilla.org/en-US/docs/Web/SVG/Tutorial/Basic_Shapes).
6. MDN Web Docs [ts](https://developer.mozilla.org/en-US/docs/Web/SVG/Tutorial/Texts).
7. [J](https://marketplace.visualstudio.com/items?itemName=jock.svg).

## Tests
1. This project includes a test script with Jest, a npm package for testing.
2. To test the rendering svg function, enter "npm test" into the command-line.

## License
MIT License
A short and simple permissive license with conditions only requiring preservation of copyright and license notices. Licensed works, modifications, and larger works may be distributed under different terms and without source code. Please refer to [License: MIT](https://choosealicense.com/licenses/mit/) for more information.
