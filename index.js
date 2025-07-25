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

function checkInputs(req, res, next) {
    const { a, b } = req.query;
    if (a === undefined || b === undefined) {
        return res.status(400).send('Please provide both a and b query parameters');
    }
    const aNum = parseFloat(a);
    const bNum = parseFloat(b);
    if (isNaN(aNum) || isNaN(bNum)) {
        return res.status(400).send('Both a and b must be valid numbers');
    }
    req.a = aNum;
    req.b = bNum;
    next();
}
app.use(checkInputs);

app.get('/add', (req, res) => {
    res.send(`The sum of ${req.a} and ${req.b} is ${req.a + req.b}`);
});

app.get('/subtract', (req, res) => {
    res.send(`The difference between ${req.a} and ${req.b} is ${req.a - req.b}`);
});

app.get('/multiply', (req, res) => {
    res.send(`The product of ${req.a} and ${req.b} is ${req.a * req.b}`);
}); 

app.get('/divide', (req, res) => {
    if (req.b === 0) {
        return res.status(400).send('Division by zero is not allowed');
    }
    res.send(`The quotient of ${req.a} and ${req.b} is ${req.a / req.b}`);
}); 

app.listen(3000);