const jwt = require('jsonwebtoken');
const { SECRET } = require("../handlers/auth")
const UserCredentials = require("../database/auth");

async function authMidware(req, res, next) {
    
    let token = req.headers.token;

    if (token) {
        try {
            const decoded_user = jwt.verify(token, SECRET);

            const user = await UserCredentials.findOne({
                email: decoded_user.email
            })

            if (user) {
                req.context.user = user;
            } else {
                return res.status(401).send({
                    error: "You need to login to proceed."
                })
            }

        } catch(ex) {
            console.log(ex)
            return res.status(400).send({
                error: "Invalid Token provided"
            })
        }
    }

    next();
}

module.exports = authMidware;