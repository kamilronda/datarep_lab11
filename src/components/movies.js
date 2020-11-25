//imports react to this file
import React from 'react';
//imports css file from src folder
import '../App.css';
import { MovieItem } from './movieItem';

//exports Movies which is used in app.js file also reloads movies page so we can see the efects of deletion straight away
export class Movies extends React.Component{
    render(){
      return this.props.movies.map( (movie)=>{
        return <MovieItem movie={movie} ReloadData={this.props.ReloadData}></MovieItem>
      })
  }
}