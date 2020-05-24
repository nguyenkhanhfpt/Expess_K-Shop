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