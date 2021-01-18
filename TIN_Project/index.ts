// const express = require('express');
// const mysql = require('mysql');
// const app = express();
// const connection = mysql.createConnection({
//     host: 'localhost',
//     user: 'root',
//     password: 'root',
//     database: 'employees',
// });
//
//
//
//
// connection.connect(function (err) {
//     if(err)
//         console.log(err);
//     else
//         console.log("Connected");
// });
//
// app.get('/', function (req,res){
//     connection.query("SELECT * FROM EMPLOYEES", function (error,rows,fields){
//         if(error)
//             console.log("Error while querying database");
//         else{
//             console.log(rows);
//             res.send(rows);
//         }
//
//
//     })
// });
//
// app.listen(1335, () =>{
//     console.log("listening on port 1335");
// });
