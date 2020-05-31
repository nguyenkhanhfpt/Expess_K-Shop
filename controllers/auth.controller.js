const Users = require('../models/users.model');
const md5 = require('md5');

module.exports.index = (req, res) => {
    res.render('./auth/login', {
        csrfToken: req.csrfToken()
    });
}

module.exports.viewSignup = (req, res) => {
    res.render('./auth/signup', {
        csrfToken: req.csrfToken()
    });
}

module.exports.signup = async (req, res) => {
    const data = {
        userName: req.body.userName,
        password: md5(req.body.password)
    }

    await Users.create(data);

    res.render('./auth/signup', {
        success: 'Sign up successful',
        csrfToken: req.csrfToken()
    });
}

module.exports.login = async (req, res) => {
    const {userName, password} = req.body; 
    const user = await Users.findOne({userName: userName});

    if(!user) {
        res.render('./auth/login', {
            errors: ['User is not exist!'],
            values: req.body,
            csrfToken: req.csrfToken()
        });
        return;
    }

    const passwordHash = md5(password);

    if(passwordHash != user.password) {
        res.render('./auth/login', {
            errors: ['Password is wrong!'],
            values: req.body,
            csrfToken: req.csrfToken()
        });
        return;
    }

    res.cookie('userName', user.id, {
        signed: true
    });
    res.redirect('/');

}