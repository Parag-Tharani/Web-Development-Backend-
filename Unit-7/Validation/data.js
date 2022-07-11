const { validationResult } = require('express-validator');

const personalData = [
    {
    "first_name": "Parag",
    "last_name": "Tharani",
    "email": "ParagTharani24@gmail.com",
    "pincode": 452001,
    "age": 20,
    "gender":"Male"
    }
]

function getData(req,res){
    return res.status(200).send(personalData)
}

function postValidator(req,res){

    const errors = validationResult(req);

    if(!errors.isEmpty()){
        res.status(400).json({ errors: errors.array() })
    }
    else{

    const body = req.body

    let data = {
        first_name: body.first_name,
        last_name: body.last_name,
        email: body.email,
        pincode: body.pincode,
        age: body.age,
        gender: body.gender
    }

    personalData.push(data)
    res.send("Data Recieved")
    }
}


module.exports = {
    getData,
    postValidator
}