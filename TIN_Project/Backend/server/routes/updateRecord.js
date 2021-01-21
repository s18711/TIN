const express = require('express');
const router = express.Router();
const utils = require('../Utils');
const mysql = require('mysql');

router.put('/', function(req, res, next) {
    const connection = mysql.createConnection(utils);
    connection.connect((err) => {
        if (err)
            console.log(err);
        else
            console.log("connected ")
    });

    //getting table name this way, cause couldn't figure out how to pass em to the router
    const tableName = req.baseUrl.split("/")[2];
    const {columnName, columnValue, whereName, whereValue} = req.body;
    let actualColumnValue ='';
    let actualWhereValue = '';

    if(typeof columnValue == 'string' || (columnValue instanceof String))
        actualColumnValue = `'${columnValue}'`; // to make it sql-like string
    else
        actualColumnValue = columnValue;

    if(typeof whereValue == 'string' || (whereValue instanceof String))
        actualWhereValue = `'${whereValue}'`;// to make it sql-like string
    else
        actualWhereValue = whereValue;

    connection.query(`UPDATE ${tableName} SET ${columnName} = ${actualColumnValue} where ${whereName} = ${actualWhereValue}; `, (err, rows, fields) => {
        if (err) {
            console.log(err);
            res.send(err);
        }
        else {
            res.send(`updated record `);
        }
    });
    connection.end();

});
module.exports = router;