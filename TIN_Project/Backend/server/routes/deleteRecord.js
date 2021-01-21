const express = require('express');
const router = express.Router();
const utils = require('../Utils');
const mysql = require('mysql');

router.delete('/', function(req, res, next) {
    const connection = mysql.createConnection(utils);
    connection.connect((err) => {
        if (err)
            console.log(err);
        else
            console.log("connected ")
    });

    //getting table name this way, cause couldn't figure out how to pass em to the router
    const tableName = req.baseUrl.split("/")[2];

    const{columnName, columnValue} = req.body;
    let actualColumnValue='';

    if(typeof columnValue == 'string' || (columnValue instanceof String))
        actualColumnValue = `'${columnValue}'`;
    else
        actualColumnValue = columnValue;


    connection.query(`DELETE FROM ${tableName} WHERE ${columnName} = ${actualColumnValue} `, (err, rows, fields) => {
        if (err) {
            console.log(err);
            res.send(err);
        }
        else {
            res.send(`delete record of ${columnName} = ${actualColumnValue} from ${tableName}`);
        }
    });
    connection.end();

});
module.exports = router;