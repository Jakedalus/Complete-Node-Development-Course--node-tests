
const express = require('express');

var app = express();

app.get('/', (req, res) => {
    res.status(404).send({
        error: 'Page not found',
        name: 'ToDo App v1.0'
    });
});

app.get('/users', (req, res) => {
    res.send([
        {
            name: 'Jake',
            age: 36
        },
        {
            name: 'Bob',
            age: 39
        },
        {
            name: 'Suzy',
            age: 26
        }
    ]);
});

app.listen(3000);

module.exports.app = app;
