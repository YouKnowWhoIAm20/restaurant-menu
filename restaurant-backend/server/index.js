const express = require('express');
const mysql = require('mysql2');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

const db = mysql.createConnection({
    host: 'sql12.freesqldatabase.com',
    user: 'sql12771237',
    password: 'Lqs9eGr86Z',
    database: 'sql12771237',
    port: 3306
});

db.connect(err => {
    if (err) throw err;
    console.log('MySQL Connected...');
});

app.get('/menu', (req, res) => {
    res.json([{ name: 'Test Dish', price: '123' }]);
});


app.listen(5000, () => console.log('Server running on port 5000'));
