const add = require("./operators/add");
const subtract = require("./operators/subtract");
const multiply = require('./operators/multiply');
const divide = require("./operators/divide");

function basicCalculator(operator,a,b){
    if(operator === add){
        console.log(add(a,b))
    }else if(operator === subtract){
        console.log(subtract(a,b))
    }else if(operator === multiply){
        console.log(multiply(a,b))
    }else if(operator === divide){
        console.log(divide(a,b))
    }
}

basicCalculator(divide,2,3)