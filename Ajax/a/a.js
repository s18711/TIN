'use strict'

const express = require('express');
const app = express();
const bodyParser = require('body-parser');

app.use(express.urlencoded({extended: true}));
app.use(express.json());
app.use(bodyParser.json());


app.post('/',(req, res) =>{
    const { a,b,operation} = req.body;
    const x = parseFloat(a);
    const y = parseFloat(b);

    let result;
    switch (operation){
        case "add":
            result = x + y;
            break;
        case "subtract":
            result = x - y;
            break;
        case "multiply":
            result = x * y;
            break;
        case "divide":
            result = x / y;
            break;
        default:
            result = NaN;
            break;
    }
    const json = {response: result};
    if(result.isNaN){
        res.send({response: "some error occurred "});
    }else{
        res.json(json);
    }
} );

app.listen(63342,() => {console.log("server listening on port 3000")});