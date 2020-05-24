const mongoose = require('mongoose');

const usersSchema = new mongoose.Schema({
    userName: String,
    password: String
});

const Users = mongoose.model('Users', usersSchema, 'users');

module.exports = Users;