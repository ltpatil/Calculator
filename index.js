const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send(`
    Hello to calculator API<br>
    <br>
    This is a simple calculator API built with Express.js.<br>
    Access add with <code>/add?a=5&b=3</code><br>
    Access subtract with <code>/subtract?a=10&b=4</code><br>
    Access multiply with <code>/multiply?a=2&b=3</code><br>
    Access divide with <code>/divide?a=10&b=2</code>
`);
});

app.get('/add', (req, res) => {
    const { a, b } = req.query;
    if (a === undefined || b === undefined) {
        return res.status(400).send('Please provide both a and b query parameters');
    }
    const sum = parseFloat(a) + parseFloat(b);
    res.send(`The sum of ${a} and ${b} is ${sum}`);
});

app.get('/subtract', (req, res) => {
    const { a, b } = req.query;
    if (a === undefined || b === undefined) {
        return res.status(400).send('Please provide both a and b query parameters');
    }
    const difference = parseFloat(a) - parseFloat(b);
    res.send(`The difference between ${a} and ${b} is ${difference}`);
});

app.get('/multiply', (req, res) => {
    const { a, b } = req.query;
    if (a === undefined || b === undefined) {
        return res.status(400).send('Please provide both a and b query parameters');
    }
    const product = parseFloat(a) * parseFloat(b);
    res.send(`The product of ${a} and ${b} is ${product}`);
}); 

app.get('/divide', (req, res) => {
    const { a, b } = req.query;
    if (a === undefined || b === undefined) {
        return res.status(400).send('Please provide both a and b query parameters');
    }
    if (parseFloat(b) === 0) {
        return res.status(400).send('Division by zero is not allowed');
    }
    const quotient = parseFloat(a) / parseFloat(b);
    res.send(`The quotient of ${a} divided by ${b} is ${quotient}`);
}); 

app.listen(3000);