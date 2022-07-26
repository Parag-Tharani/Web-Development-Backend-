const mongoose = require("mongoose");

const AuthSchema = new mongoose.Schema({
    email:{
        type:String,
    },
    password:{
        type: String,
    }
})

const UserCredentials = mongoose.model("UserCred", AuthSchema)

module.exports = UserCredentials