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

    //this method containts axios package to get JSON data from the link provided
    //if any errors will be found, they'll be displayed in the browsers console 
    componentDidMount(){
      axios.get('https://jsonblob.com/api/jsonblob/520c3b5e-0312-11eb-a6af-cbf00d776032')
      .then((response)=>{
          this.setState({movies: response.data.Search})
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