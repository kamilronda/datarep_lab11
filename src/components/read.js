//imports react to this file
import React from 'react';
//imports css file from src folder
import '../App.css';
import { Movies } from './movies';

//exports Read which is used in app.js file
export class Read extends React.Component{

  //state movies has all the information in JSON format that is used by 'movieItem.js' file to be displayed on the web page
    state = {
        movies: [
            {
            "Title": "Avengers: Infinity War",
            "Year": "2018",
            "imdbID": "tt4154756",
            "Type": "movie",
            "Poster": "https://m.media-amazon.com/images/M/MV5BMjMxNjY2MDU1OV5BMl5BanBnXkFtZTgwNzY1MTUwNTM@._V1_SX300.jpg"
            },
            {
            "Title": "Captain America: Civil War",
            "Year": "2016",
            "imdbID": "tt3498820",
            "Type": "movie",
            "Poster": "https://m.media-amazon.com/images/M/MV5BMjQ0MTgyNjAxMV5BMl5BanBnXkFtZTgwNjUzMDkyODE@._V1_SX300.jpg"
            },
            {
            "Title": "Charlie Wilson's War",
            "Year": "2007",
            "imdbID": "tt0472062",
            "Type": "movie",
            "Poster": "https://m.media-amazon.com/images/M/MV5BMTgwMDgwMDc4MF5BMl5BanBnXkFtZTYwOTU3MDM4._V1_SX300.jpg"
            }
            ]
    };

    render(){
      return (
        <div className="App">
            <h1>This is the read component.</h1>
            <Movies movies={this.state.movies}></Movies>
        </div>
      );
    }
  }