//Importing modules
const express = require('express');
const mysql = require('mysql2');

const app = express();
const PORT = 3000;

// Create a connection to the database
const connection = mysql.createConnection({
host: 'localhost',
user: 'root',
password: 'root',
database: "blogdb"	
});

// open the MySQL connection
connection.connect(error => {
    debugger;
	if (error){
		console.log("A error has been occurred "
			+ "while connecting to database.");	
		throw error;
	}
	
	//If Everything goes correct, Then start Express Server
	app.listen(PORT, ()=>{
		console.log("Database connection is Ready and "
			+ "Server is Listening on Port ", PORT);
	})
});

app.get('/', (req, res) => {
    debugger;
    res.send('Hello World, from express');
});
