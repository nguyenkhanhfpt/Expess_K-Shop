require('dotenv').config();

// package required
const express = require('express');
const cookieParser = require('cookie-parser');
const mongoose = require('mongoose');
const csrf = require('csurf');

mongoose.connect('mongodb://localhost:27017/k-shop'); // connect db

const app = express();
const port = 3000;

// require router
const homeRouter = require('./routers/home.router');
const adminRouter = require('./routers/admin.router');
const authRouter = require('./routers/auth.router');
const productsRouter = require('./routers/products.router');

// require validation
const authValidation = require('./validation/auth.validation');


// set view engines
app.set('view engine', 'pug');
app.set('views', './views');

// use middleware
app.use(cookieParser(process.env.SIGNED_KEY));

app.use(express.json()); // for parsing application/json
app.use(express.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded

app.use(express.static('public'));
app.use(csrf({cookie: true}));

// use router
app.use('/', homeRouter);
app.use('/products', productsRouter);
app.use('/admin', authValidation.checkLogin, adminRouter);
app.use('/auth', authRouter);


app.listen(port, () => console.log(`Server is running in port ${port}`));