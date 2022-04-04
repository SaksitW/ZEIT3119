import express from 'express';
import mysql from 'mysql';

// Constants
const PORT = 3000;
const HOST = '0.0.0.0';

const con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "admin",
  database: "bcf",
})

con.connect();

// App
const app = express();
app.get('/', (req, res) => {
  con.query("SELECT * FROM ")
});

app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);
