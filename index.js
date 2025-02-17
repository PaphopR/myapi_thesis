const express = require('express')
const cors = require('cors')
const mysql = require('mysql2')
const PORT = process.env.PORT || 3000;
require('dotenv').config()

const app = express()

const connection = mysql.createConnection(process.env.DATABASE_URL)

app.get('/', function(req, res, next){
    res.json({msg: 'Hi'})
})

app.get('/details', function(req, res, next) {
    connection.query(
        'SELECT * FROM details',
        function(err, results, fields){
            res.json(results)
        }
    )
})

app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));