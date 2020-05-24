const Users = require('../models/users.model');
const md5 = require('md5');

module.exports.index = (req, res) => {
    res.render('./auth/login');
}

module.exports.login = async (req, res) => {
    const {userName, password} = req.body; 
    const user = await Users.findOne({userName: userName});

    if(!user) {
        res.render('./auth/login', {
            errors: ['User is not exist!'],
            values: req.body
        });
        return;
    }

    const passwordHash = md5(password);

    if(passwordHash != user.password) {
        res.render('./auth/login', {
            errors: ['Password is wrong!'],
            values: req.body
        });
        return;
    }

    res.cookie('userName', user.id, {
        signed: true
    });
    res.redirect('/');

}