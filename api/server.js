import express from 'express';
import mysql from 'mysql';
import cors from 'cors';

const app = express()

// Constants
const PORT = 3000;
const HOST = '0.0.0.0';

// Database
const con = mysql.createConnection({
  host: "db",
  port: "3306",
  user: "root",
  password: "admin",
  database: "bcf",
})

con.connect();

// App
app.use(cors())

app.get('/', (req, res) => {
  con.query("SELECT * FROM products", (err, values) => {
    if (err) {
      res.status(500).send(err);
    }

    res.json(values);
  });
});

app.get('/:name', (req, res) => {
  const { name } = req.params;

  const product = con.query(`SELECT * FROM products WHERE name=${name}`);

  res.json(product)
})

app.listen(PORT, HOST, () => {
  con.query(`CREATE TABLE IF NOT EXISTS products(
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    description TEXT,
    stock INT
  )`);

  con.query(`INSERT IGNORE INTO products (name, description, stock) VALUES ("Wire Tap", "Will wire tap a home", 10)`);
  con.query(`INSERT IGNORE INTO products (name, description, stock) VALUES ("Root Kit", "Break into any public facing server", 100)`);
  con.query(`INSERT IGNORE INTO products (name, description, stock) VALUES ("Death USB", "A USB that will cause imminent death", 5)`);
  con.query(`INSERT IGNORE INTO products (name, description, stock) VALUES ("Password Cracker", "A USB that will cause imminent death", 5)`);
  con.query(`INSERT IGNORE INTO products (name, description, stock) VALUES ("Pineapple", "A USB that will cause imminent death", 5)`);
  con.query(`INSERT IGNORE INTO products (name, description, stock) VALUES ("Rubber Ducky", "A USB that will cause imminent death", 5)`);
  con.query(`INSERT IGNORE INTO products (name, description, stock) VALUES ("Wireless Adaptor", "A USB that will cause imminent death", 5)`);
  con.query(`INSERT IGNORE INTO products (name, description, stock) VALUES ("RF Receiver", "A USB that will cause imminent death", 5)`);

  console.log(`Running on http://${HOST}:${PORT}`);
});
