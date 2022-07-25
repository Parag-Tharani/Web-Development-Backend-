## Some Example Searches 

GET-
<br>
All Req = http://localhost:8080/movies
<br>
By Id eg: http://localhost:8080/movies/62d535e0b97d64f2abc3de0e
<br>
by title: http://localhost:8080/movies?title=Ave


Post-
<br>
Post Movie Data = http://localhost:8080/movies/create
<br>
    Schema{
        "title": String - required,
        "img": String,
        "genre": String,
        "Rating": Number - required
    }