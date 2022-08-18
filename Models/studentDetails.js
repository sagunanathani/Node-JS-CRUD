const mongoose =require('mongoose');

const login = new mongoose.Schema({
    email:{
        type: String
    },
    password:{
        type: Number
    }
});

const user = mongoose.model("login_details",login);
module.exports = user;