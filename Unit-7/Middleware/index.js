const express = require("express")
const handler = require("./books.js")

const app = express();


app.get("/books", handler.booksDataList)
app.get("/book/:id", handler.bookName)

function allBooks(req,res,next){
    console.log("Fetching Books Data...")
    next()
}
app.use(allBooks)


app.get('/', (req,res) => {
    res.send("Welcome To Book store")
})


app.get("/*", (req,res) => {
    res.status(404).send("Page Not Found")
})


app.listen(4000)