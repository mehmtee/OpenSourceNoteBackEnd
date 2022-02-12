const {Schema,model} = require('mongoose');

const UserSchema = Schema({
    username: {
        type :String,
        required: true,
        unique: true
    },
    email: {
        type :String,
        required: true,
        unique: true
    },
    bio: String,
    image: String,
    hash: String,
    salt: String
  }, {timestamps: true});



  
  module.exports = model('User',UserSchema);