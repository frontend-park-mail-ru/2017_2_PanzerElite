'use strict';

const express = require('express');
const body = require('body-parser');
const cookie = require('cookie-parser');
const morgan = require('morgan');
const uuid = require('uuid/v4');
const app = express();


app.use(morgan('dev'));
app.use(express.static('public'));
app.use('/node_modules', express.static(__dirname + '/../node_modules'));
app.use(body.json());
app.use(cookie());

const users = {};

app.post('/register', function(req, res) {
    const nick = req.body.nick;
    const pas = req.body.pas;
    const conf = req.body.conf;
    if (!nick || !pas) {
        return res.status(400).end();
    }
    if (users[nick]) {
        // say front that already exists
        console.log("already exists");
        return;
    }

    const id = uuid();
    users[nick] = {
        id,
        nick,
        pas,
    };

    res.cookie('userid', id, { expires: new Date(Date.now() + 1000 * 60 * 10), httpOnly: false });
    res.json({ id });
});

app.post('/login', function(req, res) {
    const nickname = req.body.nick;
    const password = req.body.pas;
    if (!nickname || !password) {
        return res.status(400).end();
    }
    if (users[nickname] === undefined || users[nickname].pas != password) {
        res.status(401);
        // say front that such user doesnt exist
        return;
    }
    res.cookie('userid', users[nickname].id, { expires: new Date(Date.now() + 1000 * 60 * 10) });
    res.json({ id: users[nickname].id });
});

app.get('/check', function(req, res) {
    const id = req.cookies['userid'];
    if (id === undefined) {
        return res.status(401).end();
    }

    res.json({ field: true });
});

const port = process.env.PORT || 8000;

app.listen(port, function() {
    console.log(`Server listening port ${port}`);
});