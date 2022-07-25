const mongoose = require("mongoose")

const movieSchema = new mongoose.Schema({
    title : {
        type: String,
        required: true,
    },
    img : {
        type: String,
    },
    genre : {
        type: String,
    },
    rating : {
        type: Number,
        required: true
    }
})

const Movie = mongoose.model("Movie", movieSchema)


module.exports = Movie