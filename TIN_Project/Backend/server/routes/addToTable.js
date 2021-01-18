const express = require('express');
const router = express.Router();
const utils = require('../Utils');
const mysql = require('mysql');

router.post('/', function(req, res, next) {
    const connection = mysql.createConnection(utils);
    connection.connect((err) => {
        if (err)
            console.log(err);
        else
            console.log("connected ")
    });



    connection.end();

});
module.exports = router;