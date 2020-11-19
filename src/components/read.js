//imports react to this file
import React from 'react';
//imports css file from src folder
import '../App.css';
import { Movies } from './movies';
import axios from 'axios';

//exports Read which is used in app.js file
export class Read extends React.Component{

  //state movies has all the information in JSON format that is used by 'movieItem.js' file to be displayed on the web page
    state = {
        movies: []
    };

    // takes data in from API
    componentDidMount(){
      axios.get('http://localhost:4000/api/movies')
      .then((response)=>{
          this.setState({movies: response.data})
        }
      )
      .catch((error)=>{
        console.log(error)
      }
      );
    }

    render(){
      return (
        <div className="App">
            <h1>This is the read component.</h1>
            <Movies movies={this.state.movies}></Movies>
        </div>
      );
    }
  }