const express = require('express');
const router = express.Router();
const utils = require('../Utils');
const mysql = require('mysql');
const Employee = require('../Models/Employee.js');
const Shop_item = require('../Models/Shop_item');
const Shop_transaction = require('../Models/Shop_transaction');

router.post('/', function (req, res, next) {

    const tableName = req.baseUrl.split("/")[2]; // getting tableName from URL
    try {

        const connection = mysql.createConnection(utils);
        connection.connect((err) => {
            if (err)
                console.log(err);
            else
                console.log("connected ")
        });

        connection.beginTransaction((err) => {
            if (err)
                throw err;
            const sqlStmt = `INSERT INTO tableName (key0, key1, key2, key3, key4) values ('value0','value1','value2','value3','value4')`;
            if (tableName === "employees") {
                const {employee_name, employee_surname, employee_birthday,employee_position,employee_seniority} = req.body;
                const employee = new Employee(employee_name, employee_surname, employee_birthday,employee_position,employee_seniority);
                performInsert(tableName, employee, connection, sqlStmt, res);

            } else if (tableName === "shop_item") {
                const {item_name, item_price,item_category,item_color} = req.body;
                const shop_item = new Shop_item(item_name, item_price,item_category,item_color);
                performInsert(tableName, shop_item, connection, sqlStmt, res);

            } else if (tableName === "shop_transaction") {
                const {id_employee, id_item, transaction_date,transaction_comment,transaction_method} = req.body;
                const shop_transaction = new Shop_transaction(id_employee, id_item, transaction_date,transaction_comment,transaction_method);
                performInsert(tableName, shop_transaction, connection, sqlStmt, res);

            } else {
                throw "Incorrect table name"
            }

        });
    } catch (e) {
        res.status(400);
        res.send(e);
    }

});
module.exports = router;

const performInsert = (tableName, model, connection, sqlStatement, res) => {
    let sqlString = sqlStatement.replace("tableName", tableName);
    const keys = Object.keys(model);
    const values = Object.values(model);
    console.log(keys);
    console.log(values);
    console.log(keys.length);

    if (keys.length === 4) {
        console.log("key.length = 2")
        for (let i = 0; i < keys.length; i++) {
            console.log(i, keys[i], values[i]);
            sqlString = sqlString.replace(`key${i}`, `${keys[i]}`);
            sqlString = sqlString.replace(`value${i}`, `${values[i]}`);
            console.log(sqlString);
        }
        sqlString = sqlString.replace(", key4", "");
        sqlString = sqlString.replace(",'value4'", "");
    } else if (keys.length === 5) {
        console.log("key.length = 3")
        for (let i = 0; i < keys.length; i++) {
            console.log(i, keys[i], values[i]);
            sqlString = sqlString.replace(`key${i}`, `${keys[i]}`);
            sqlString = sqlString.replace(`value${i}`, `${values[i]}`);
        }
    }

    connection.query(sqlString, (error, results, fields) => {
        if (error) {
            return connection.rollback(() => {
                throw error;
            });
        } else {

            console.log(results);
            connection.commit((err) => {
                if (err) {
                    return connection.rollback(() => {
                        throw err;
                    });
                }
                console.log('success!');
                connection.end();
                res.send(`object has been added to ${tableName} `);
            });

        }

    });
}