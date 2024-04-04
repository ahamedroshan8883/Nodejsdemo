const express = require("express");
const app = express();
const cors = require("cors");

app.use(cors())
app.use(express.json());

app.listen(8001,()=>{
    console.log('Server is running on port 8001');
})
app.get('/',(req,res)=>{
    res.end('Hiii welcome');
})

let movies = [
    {id:1,moviename:'Good fellas',director:"Martin Scorsese"},
    {id:2,moviename:'Wolf of wall streets',director:"Martin Scorsese"},
    {id:3,moviename:'Django unchained',director:"Quentin tarantino"},
    {id:4,moviename:'Dark knight rises',director:"Christopher Nolan"},
    {id:5,moviename:'Iron man',director:"Jon Favreau"}
]
app.get('/api/movies',(req,res)=>{
    res.json(movies);
})

app.post('/api/addmovies',(req,res)=>{
    const {moviename,director} = req.body;
    let newMovies = {
        id:movies.length+1,
        moviename:moviename,
        director:director
    }
    movies.push(newMovies);
    res.end("Movie successfully added");
})

app.delete('/api/movie/:id',(req,res)=>{
    const id = req.params.id;
    movies = movies.filter(movie => movie.id!=id);
    res.end('Movie deleted successfully');
})
app.get('/api/movies/:id',(req,res)=>{
    let movie = movies.find(movie=>movie.id==req.params.id);
    res.json(movie);
})