// all the necessary Requirements, initializations and having server assigned to port:4000
const express = require('express')
const app = express()
const port = 4000
const cors = require('cors');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const path = require('path');

// sends the website files to the server so it can be viewed on port:4000
app.use(express.static(path.join(__dirname, '../build')));
app.use('/static', express.static(path.join(__dirname, 'build/static')));

// app.use(cors());
// app.use(function(req, res, next) {
// res.header("Access-Control-Allow-Origin", "*");
// res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
// res.header("Access-Control-Allow-Headers",
// "Origin, X-Requested-With, Content-Type, Accept");
// next();
// });


// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())


// connection to Mongo Database
const myConnectionString = 'mongodb+srv://admin:admin@cluster0.jivna.mongodb.net/movies?retryWrites=true&w=majority';
mongoose.connect(myConnectionString, {useNewUrlParser: true});

const Schema = mongoose.Schema;

// movie schema
var movieSchema = new Schema({
  title:String,
  year:String,
  poster:String
});

var MovieModel = mongoose.model("movie", movieSchema);
// this is the movies array which is displayed in 'read.js'
app.get('/api/movies', (req, res)=>{
  
  // const mymovies = [
  //   {
  //     "Title":"Avengers: Infinity War",
  //     "Year":"2018",
  //     "imdbID":"tt4154756",
  //     "Type":"movie",
  //     "Poster":"https://m.media-amazon.com/images/M/MV5BMjMxNjY2MDU1OV5BMl5BanBnXkFtZTgwNzY1MTUwNTM@._V1_SX300.jpg"
  //     },
  //     {
  //     "Title":"Captain America: Civil War",
  //     "Year":"2016",
  //     "imdbID":"tt3498820",
  //     "Type":"movie",
  //     "Poster":"https://m.media-amazon.com/images/M/MV5BMjQ0MTgyNjAxMV5BMl5BanBnXkFtZTgwNjUzMDkyODE@._V1_SX300.jpg"
  //     },
  //     {
  //     "Title":"World War Z",
  //     "Year":"2013",
  //     "imdbID":"tt0816711",
  //     "Type":"movie",
  //     "Poster":"https://m.media-amazon.com/images/M/MV5BNDQ4YzFmNzktMmM5ZC00MDZjLTk1OTktNDE2ODE4YjM2MjJjXkEyXkFqcGdeQXVyNTA4NzY1MzY@._V1_SX300.jpg"}
  //     ,{
  //     "Title":"War of the Worlds",
  //     "Year":"2005",
  //     "imdbID":"tt0407304",
  //     "Type":"movie",
  //     "Poster":"https://m.media-amazon.com/images/M/MV5BNDUyODAzNDI1Nl5BMl5BanBnXkFtZTcwMDA2NDAzMw@@._V1_SX300.jpg"
  //     }
  // ];

  MovieModel.find((err, data)=>{
    res.json(data);
  })

  // res.status(200).json({
  //   message:"Everything is ok",
  //   movies:mymovies
  // });
})

// returns the movie with the specific id
app.get('/api/movies/:id', (req, res)=>{
  console.log(req.params.id);

  // finds movies by the id
  MovieModel.findById(req.params.id, (err, data) => {
    res.json(data);
  })
})

// finds a record by ID and updates it
app.put('/api/movies/:id', (req, res)=>{
  console.log("Update movie: "+req.params.id);
  console.log(req.body);

  MovieModel.findByIdAndUpdate(req.params.id,req.body, {new:true}, (err,data)=>{
    res.send(data);
  })
})

//deletes a specific movie with it's details from the database
app.delete('/api/movies/:id', (req, res)=>{
  console.log(req.params.id);

  MovieModel.findByIdAndDelete({_id:req.params.id}, (err, data)=>{
    res.send(data);
  })
})

// returns the movies
app.post('/api/movies', (req, res)=>{
  console.log('Movie Recieved!');
  console.log(req.body.title);
  console.log(req.body.year);
  console.log(req.body.poster);

  // adds movie data to database
  MovieModel.create({
    title:req.body.title,
    year:req.body.year,
    poster:req.body.poster
  });

  // prevents from duplication of entries
  res.send('Item Added');

})

// sends the file to the path below
app.get('*', (req, res)=>{
  res.sendFile(path.join(__dirname+'/../build/index.html'));
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})