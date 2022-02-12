const {Schema} = require('mongoose');

const UserSchema = Schema({
    username: String,
    email: String,
    bio: String,
    image: String,
    hash: String,
    salt: String
  }, {timestamps: true});


  module.exports = UserSchema;