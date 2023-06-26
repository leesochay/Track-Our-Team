const express = require('express');
const mysql = require('mysql');

const PORT = process.env.PORT || 3001;
const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static('public'));


const db = mysql.createConnection(
  {
    host: 'localhost',
    // MySQL username,
    user: 'root',
    // MySQL password
    password: '',
    database: ''
  },
  console.log(`Connected to the database.`)
);

// Query database
db.query('SELECT * FROM ', function (err, results) {
  console.log(results);
});

// listen for incoming connections on the specified port
app.listen(PORT, () => {
  console.log(`Listening at http://localhost:${PORT}`)
})