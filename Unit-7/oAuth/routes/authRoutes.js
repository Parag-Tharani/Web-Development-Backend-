const express = require("express");
const authMidware = require("../middleware/auth")
const {getloggedusers, registerUser, login} = require("../handlers/auth");

const auth = express.Router()


auth.get('/', (req,res) => res.send("Welcome To Auth Initializerr..."))
auth.get('/users', getloggedusers)
auth.post('/signup', registerUser)
auth.post('/login', login)


module.exports = auth