const express = require("express");
const handler = require("./data.js")

const { body } = require('express-validator');

const app = express();

app.use(express.json())





app.get("/",handler.getData)

app.post("/",
body("first_name").exists().withMessage("Please Enter First Name"),
body("last_name").exists().withMessage("Please Enter Last Name"),
body("email").exists().withMessage("Please Enter Email").isEmail().withMessage("Please enter a Valid email"),
body("pincode").isNumeric().withMessage("Pincode should be always numeric").isLength({min:6}).withMessage("Pincode should of 6 numbers"),
body("age").isNumeric().withMessage("Age should be always numeric").custom((value) => {
    if(value>18 && value<100){
        return true
    }else{
        throw new Error("Age must be between 18-100")
    }
}),
body("gender").custom((value) => {
    if(value == "Male" || value == "Female" || value == "Other"){
        return true
    }else{
        throw new Error("gender must be : Male, Female, Other")
    }
}),
handler.postValidator)




app.listen(4000)