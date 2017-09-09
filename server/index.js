const express = require('express');
//const fs = require('fs');

const app = express();

app.use(express.static('public'));

app.get('../public/*', (req, res) => {
    res.send('404');
})

app.listen(process.env.PORT || '8000', () => {
    console.log('awd');
});