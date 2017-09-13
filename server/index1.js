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
    if (users[nick] == undefined) {
        console.log(`No such User`);
        return;
    }
    res.cookie('UserID', ids[nick], { expires: new Date(Date.now() + 1000 * 60 * 10) });
    //res.json({ id });
});


app.post('/register', function(req, res) {
    const nick = req.body.nick;
    const pas = req.body.pas;
    const conf = req.body.conf;
    if (!nick || !pas) {
        return res.status(400).end();
    }
    if (users[nick]) {
        console.log(`Already exists`);
        return;
    }
    if (!users[nick]) {
        users[nick] = {
            nick,
            pas,

        };
    }
    const id = uuid();
    ids[nick] = id;

    res.cookie('UserID', id, { expires: new Date(Date.now() + 1000 * 60 * 10) });
    //sres.json({ id });
});
/*
app.get('/', function(req, res) {
    const id = req.cookies['UserID'];
    const nick = ids[id];
    if (!nick || !users[nick]) {
        return res.status(401).end();
    }
    res.json(users[nick]);
});*/
app.get('/check', function(req, res) {
    const id = req.cookies['UserID'];
    //const nick = ids[id];
    if (!id) {
        return res.status(401).end();
    }

    res.json({ field: true });
});

const port = process.env.PORT || 8000;

app.listen(port, function() {
    console.log(`Server listening port ${port}`);
});