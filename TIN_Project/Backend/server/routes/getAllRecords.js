const express = require('express');
const router = express.Router();
const utils = require('../Utils');
const mysql = require('mysql');
/* GET home page. */
const results = []
router.get('/', function(req, res, next) {
    const connection = mysql.createConnection(utils);
    connection.connect((err) => {
        if (err)
            console.log(err);
        else
            console.log("connected ")
    });
    const sqlQueries = ["SELECT * FROM employees", "SELECT * FROM shop_item", "SELECT * FROM shop_transaction"];

    getAllRecords(sqlQueries,res,connection);

    connection.end();

});


const getAllRecords = (sqlQueries,res,connection) => {
    const results = [];
    for (let i = 0; i < sqlQueries.length; i++) {
        connection.query(sqlQueries[i], (err, rows, fields) => {
            if (err)
                console.log(err);
            else {
                results.push(rows);
                //done this way because fo non-blocking query function
                if(i === sqlQueries.length - 1){
                    res.send(results);
                }
            }
        });
    }

}

module.exports = router;
