'use strict';

const http = require('http');
const url = require('url');

const server = http.createServer((req, res) => {

    const pathname = url.parse(req.url,true).pathname;
    const number1 = url.parse(req.url,true).query.number1;
    const number2 = url.parse(req.url,true).query.number2;

    performMathOperation(pathname, number1, number2, res);
});

function performMathOperation(pathname, number1, number2, res) {
    let sum = 0;

    if (number1 === undefined || number2 === undefined) {
        res.end('No parameters were passed \nthe request should be in form of  http://127.0.0.1:1337/"operation"?number1="X"&number2="Y"');
        return;
    }

    const number1Parsed = parseInt(number1);
    const number2Parsed = parseInt(number2);

    if (isNaN(number1Parsed) || isNaN(number2Parsed)) {
        res.end('Wrong types, parameters must be of type "number"\n the request should be in form of  http://127.0.0.1:1337/"operation"?number1="X"&number2="Y"');
        return;
    }

    switch (pathname) {
        case "\/add":
            sum =  number1Parsed + number2Parsed;
            break;

        case "\/subtract":
            sum = number1Parsed - number2Parsed;
            break;

        case "\/multiply":
            sum = number1Parsed * number2Parsed;
            break;

        case "\/divide":
            sum = number1Parsed / number2Parsed;
            break;
    }
    console.log(sum);

    res.end(`the result of your operation is: ${sum}`);
}

server.listen(1337, "127.0.0.1", () => {
    console.log(`Server running at http://127.0.0.1:1337/`);
});


