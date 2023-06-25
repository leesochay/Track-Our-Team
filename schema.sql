DROP DATABASE IF EXISTS cms_db;

CREATE DATABASE cms_db;

CREATE TABLE department (
	id INT,
	name VARCHAR(30)
	);

CREATE TABLE role (
	id INT,
    title VARCHAR(30),
	salary DECIMAL,
    dartment_id INT
	);

CREATE TABLE employee (
	id INT,
	first_name VARCHAR(30),
    last_name VARCHAR(30),
    role_id INT,
    manager_id INT
	);
