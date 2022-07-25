const express = require('express');
const { fetchAllMovies, findonemovie, createData } = require('../Handlers/movies');

const movieRoutes = express.Router();



movieRoutes.get('/', (req,res) => {
    res.send("Welcome My Friends, Welcome")
})

movieRoutes.get("/movies", fetchAllMovies )
movieRoutes.get("/movies/:id", findonemovie )
movieRoutes.post("/movies/create", createData )


movieRoutes.get("/*", (req,res) => {
    res.status(404).send("Bad Request")
})


module.exports  = movieRoutes;