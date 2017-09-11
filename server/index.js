/*const express = require('express');
//const fs = require('fs');

const app = express();

app.use(express.static('public'));

app.get('../public/*', (req, res) => {
    res.send('404');
})

app.listen(process.env.PORT || '8000', () => {
    console.log('awd');
});*/
'use strict';

const express = require('express');
const body = require('body-parser');
const cookie = require('cookie-parser');
const morgan = require('morgan');
const uuid = require('uuid/v4');
const app = express();


app.use(morgan('dev'));
app.use(express.static('public'));
app.use(body.json());
app.use(cookie());


const users = {};
const ids = {};

app.post('/login', function(req, res) {
    const nick = req.body.nick;
    const pas = req.body.pas;
    if (!nick || !pas) {
        return res.status(400).end();
    }
    if (!users[nick]) {
        console.log(`No such User: ${err.status}`);
        return;
    }
    const id = uuid();
    ids[id] = pas;

    res.cookie('podvorot', id, { expires: new Date(Date.now() + 1000 * 60 * 10) });
    res.json({ id });
});


app.post('/register', function(req, res) {
    const nick = req.body.nick;
    const pas = req.body.pas;
    const conf = req.body.conf;
    if (!nick || !pas) {
        return res.status(400).end();
    }
    if (users[nick]) {
        console.log(`Already exists: ${err.status}`);
        return;
    }
    const id = uuid();
    ids[id] = pas;

    res.cookie('podvorot', id, { expires: new Date(Date.now() + 1000 * 60 * 10) });
    res.json({ id });
});

app.get('/me', function(req, res) {
    const id = req.cookies['podvorot'];
    const email = ids[id];
    if (!email || !users[email]) {
        return res.status(401).end();
    }

    users[email].count += 1;

    res.json(users[email]);
});

const port = process.env.PORT || 8000;

app.listen(port, function() {
    console.log(`Server listening port ${port}`);
});