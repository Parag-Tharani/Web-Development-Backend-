## Some Searches 

GET-
All Req = http://localhost:8080/movies
By Id eg: http://localhost:8080/movies/62d535e0b97d64f2abc3de0e
by title: http://localhost:8080/movies?title=Ave


Post-
Post Movie Data = http://localhost:8080/movies/create
    Schema{
        "title": String - required,
        "img": String,
        "genre": String,
        "Rating": Number - required
    }