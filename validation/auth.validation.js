const Users = require('../models/users.model');

module.exports.checkLogin = async (req, res, next) => {
    const cookie = req.signedCookies.userName;
    if(!cookie) {
        res.redirect('/auth/login');
        return;
    }

    const checkCookie = await Users.findOne({_id: cookie});

    if(!checkCookie) {
        res.redirect('/auth/login');
        return;
    }

    next();
}

module.exports.signup = async (req, res, next) => {
    const {userName, password, confirmPassword} = req.body;
    const errors = [];

    if(!userName) {
        errors.push('User is not empty!');
        res.render('./auth/signup', {
            errors: errors,
            values: req.body
        }); 
        return;
    }

    if(!password) {
        errors.push('Password is not empty!');
        res.render('./auth/signup', {
            errors: errors,
            values: req.body
        });
        return;
    }

    if(!confirmPassword) {
        errors.push('Confirm password is not empty!');
        res.render('./auth/signup', {
            errors: errors,
            values: req.body
        });
        return;
    }

    if(password != confirmPassword) {
        errors.push("Confirm password and password does' match!");
        res.render('./auth/signup', {
            errors: errors,
            values: req.body
        });
        return;
    }

    const user = await Users.findOne({userName: userName});

    if(user) {
        errors.push("User already exists!");
        res.render('./auth/signup', {
            errors: errors,
            values: req.body
        });
        return;
    }

    next();
}