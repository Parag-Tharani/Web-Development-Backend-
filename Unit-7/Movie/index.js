const express  = require("express");
const cors = require("cors");
const connectDatabase = require("./Database");
const movieRoutes = require("./Routes/movies");


const app = express();

app.use(express.json());
app.use(cors());

app.use(movieRoutes)



connectDatabase()
.then(() => {
    app.listen(8080, () => {
        console.log("Database Initiated at http://localhost:8080")
    })
})
.catch((err) => console.log("Error in Database Connection"))