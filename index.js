require('dotenv').config();

// package required
const express = require('express');
const cookieParser = require('cookie-parser');

const app = express();
const port = 3000;

// set view engines
app.set('view engine', 'pug');
app.set('views', './views');

// use middleware
app.use(cookieParser());

app.use(express.json()); // for parsing application/json
app.use(express.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded

app.use(express.static('public'));


app.get('/', (req, res) => {
    res.render('home');
});

app.listen(port, () => console.log(`Server is running in port ${port}`));