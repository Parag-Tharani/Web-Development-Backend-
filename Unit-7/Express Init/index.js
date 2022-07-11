const express = require("express")
const app = express()



function bookRoutes(req,res){

    var booksData=[
        {
            id:1,
            title:"Rich Dad, Poor Dad",
            timestamp: new Date()
        },
        {
            id:2,
            title:"Atomic Habits",
            timestamp: new Date()
        },
        {
            id:3,
            title:"The Subtle Art of not giving a f**k",
            timestamp: new Date()
        },
        {
            id:4,
            title:"Ankur Warikoo",
            timestamp: new Date()
        },
    ]

    res.status(200).send(booksData)
}


app.get("/", (req, res) => {
    res.status(200).send("Hello World")
})

app.get('/books',bookRoutes)

app.get('/*', (req,res) => {
    res.status(404).send("Wrong URL")
})


app.listen(4000)