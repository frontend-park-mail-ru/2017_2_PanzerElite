/*'use strict';

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
    const { nick, pas, conf } = req.body;
    if (!nick || !pas) {
        return res.status(400).end();
    }
    if (users[nick]) {
        // say front that already exists
        res.status(401).end();
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
    const { nick: nickname, pas: password } = req.body;
    if (!nickname || !password) {
        return res.status(400).end();
    }
    if (users[nickname] === undefined || users[nickname].pas != password) {
        res.status(401).end();
        // say front that such user doesnt exist
        return;
    }
    res.cookie('userid', users[nickname].id, { expires: new Date(Date.now() + 1000 * 60 * 10) });
    res.end();
});

app.get('/check', function(req, res) {
    const id = req.cookies['userid'];
    if (id === undefined) {
        return res.status(401).end();
    }
    res.end();
});
app.get('/logout', function(req, res) {
    res.clearCookie('userid');
    res.end();
});


const port = process.env.PORT || 8000;

app.listen(port, function() {
    console.log(`Server listening port ${port}`);
});*/
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

//const fs = require('fs');



app.use(express.static('public'));

app.get('../public/*', (req, res) => {
    res.send('404');
})

app.listen(process.env.PORT || '8000', () => {
    console.log('Port: 8000');
});