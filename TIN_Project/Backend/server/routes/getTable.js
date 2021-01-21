const express = require('express');
const router = express.Router();
const utils = require('../Utils');
const mysql = require('mysql');

router.get('/', function(req, res, next) {
    const connection = mysql.createConnection(utils);
    connection.connect((err) => {
        if (err)
            console.log(err);
        else
            console.log("connected ")
    });

    //getting table name this way, cause couldn't figure out how to pass em to the router
    const tableName = req.baseUrl.split("/")[2];
    connection.query(`SELECT * FROM ${tableName}`, (err, rows, fields) => {
        if (err)
            console.log(err);
        else {
            res.send(rows);
        }
    });
    connection.end();

});
module.exports = router;