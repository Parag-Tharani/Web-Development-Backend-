const Movie = require("../Database/movies")

async function fetchAllMovies(req, res){

    const title = req.query.title


    if (title === undefined) 
    {
        const movieData = await Movie.find()
        return res.send({
            moveisData: movieData
        });

    } 
    
    else 
    {
        const movieData = await Movie.find({title: {$regex:title}})
        return res.send({
            moveisData: movieData
        });
    }
}



async function findonemovie(req,res){
    const {id} = req.params
    
    const movie = await Movie.findById(id);

    if(movie){
        res.send(movie)
    }else{
        res.status(404).send("movie not found")
    }
}



async function createData(req,res){
    const {movie: movieData} = req.body

    let movie = new Movie(movieData);

    try {
        await movie.save()
        res.send("data has been added")
    } catch (ex) {
        res.status(404).send("Bad Schema")
    }

}






module.exports = {
    fetchAllMovies,
    findonemovie,
    createData
}