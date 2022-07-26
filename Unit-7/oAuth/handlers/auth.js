const jwt = require("jsonwebtoken");
const UserCredentials = require("../database/auth");
const SECRET = "ThisisarandomString"



async function getloggedusers(req,res){
    const token = req.headers.token

    if(token){
        const decode_token = jwt.decode(token,SECRET)

        try {
            const data = await UserCredentials.findById(decode_token.id)

            res.send({registerUser:data})
        } catch (error) {
            res.send("No user Found with given Credentials")
        }
    }else{
        return res.send("No user Found")
    }
}



async function registerUser(req,res){
    const {email, password} = req.body

    let existingUser = await UserCredentials.findOne({
        email: email
    })

    if(existingUser){
        return res.status(401).send("User Already Registered")
    }

    let user = {
        email: email,
        password: password
    }

    let userCred = await UserCredentials.create(user);
    return res.send("Registration Successful")
}


async function login(req, res){
    let {email, password} = req.body;

    let existingUser = await UserCredentials.findOne({
        email: email
    })

    if(existingUser){
        if(existingUser.password == password){

            let encryptionToken = jwt.sign({
                id: existingUser._id,
                email: existingUser.email,
                password: existingUser.password
            },SECRET)

            return res.send(encryptionToken)
        }else{
            res.send("Incorrect Password")
        }
    }else{
        res.status(404).send({
            error: "User Not Found"
        })
    }

}



module.exports = {
    getloggedusers,
    registerUser,
    login,
    SECRET
}