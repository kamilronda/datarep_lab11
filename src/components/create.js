//imports react to this file
import React from 'react';
//imports axios to this file
import axios from 'axios';
//imports css file from src folder
import '../App.css';

//exports Create which is used in app.js file
export class Create extends React.Component{

    constructor(){
      super();

      //these properties bind methods to their Events
      this.onSubmit = this.onSubmit.bind(this);
      this.onChangeTitle = this.onChangeTitle.bind(this);
      this.onChangeYear = this.onChangeYear.bind(this);
      this.onChangePoster = this.onChangePoster.bind(this);

      this.state ={
        Title: '',
        Year: '',
        Poster: ''
      }
    }

  //Methods
    onChangeTitle(e){
      this.setState({
        Title: e.target.value
      });
    }

    onChangeYear(e){
      this.setState({
        Year: e.target.value
      });
    }

    onChangePoster(e){
      this.setState({
        Poster: e.target.value
      });
    }

    onSubmit(e){
      e.preventDefault();
      alert("Movie: " + this.state.Title + " " + this.state.Year + " " + this.state.Poster);

      // object
      const newMovie = {
        title: this.state.Title,
        year: this.state.Year,
        poster: this.state.Poster
      }
      // takes data from API
      axios.post('http://localhost:4000/api/movies',newMovie)
      // gets the data
      .then((res)=>{
        console.log(res);
      })
      // if no data is recieved then error is caught and displayed
      .catch((err)=>{
        console.log(err);
      });
    }


    //form which allows user to enter the movie details 
    render(){
      return (
        <div className="App">
            <form onSubmit={this.onSubmit}>
              <div className="form-group">
                <label>Add Movie Title: </label>
                <input type='text' className='form-control' value={this.state.Title} onChange={this.onChangeTitle}></input>
              </div>
              <div className="form-group">
                <label>Add Movie Year: </label>
                <input type="text" className='form-control' value={this.state.Year} onChange={this.onChangeYear}></input>
              </div>
              <div className="form-group">
                <label>Movies Poster: </label>
                <textarea type='text' className='form-control' value={this.state.Poster} onChange={this.onChangePoster}></textarea>
              </div>
              <div className="form-group">
                <input type='submit' value='Add Movie' className='btn btn-primary'></input>
              </div>
            </form>
        </div>
      );
    }
  }