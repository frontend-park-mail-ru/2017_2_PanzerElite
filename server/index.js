const express = require('express');
const app = express();

app.use(express.static('public'));

app.get('../public/bandles/*', (req, res) => {
    res.send('404');
})



app.listen(process.env.PORT || '8000', () => {
    console.log('Port: 8000');
});