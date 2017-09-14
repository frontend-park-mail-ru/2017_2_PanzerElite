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
app.use('/node_modules', express.static(__dirname + '/../node_modules'));
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
        res.status(401);
        res.json({ fuckyourself: 'bitch' });
        return;
    }
    res.cookie('UserID', ids[nick], { expires: new Date(Date.now() + 1000 * 60 * 10) });
    res.json({ id: ids[nick] });
});


app.post('/register', function(req, res) {
    const nick = req.body.nick;
    const pas = req.body.pas;
    const conf = req.body.conf;
    if (!nick || !pas) {
        console.log("!nick || !pas");
        return res.status(400).end();
    }
    if (users[nick]) {
        console.log(`Already exists`);
        return;
    }
    if (!users[nick]) {
        console.log("!users[nick]");
        users[nick] = {
            nick,
            pas,
        };
    }
    console.log("we eill regiister now");
    const id = uuid();
    ids[nick] = id;

    res.cookie('userid', id, { expires: new Date(Date.now() + 1000 * 60 * 10), httpOnly: false });
    console.log(id);
    res.json({ id });
    //sres.json({ id });
    //console.log(res);
});
app.get('/check', function(req, res) {
    //console.log(req.cookies['userid']);
    const id = req.cookies['userid'];
    console.log(id);
    if (id === undefined) {
        return res.status(401).end();
    }

    res.json({ field: true });
});

const port = process.env.PORT || 8000;

app.listen(port, function() {
    console.log(`Server listening port ${port}`);
});