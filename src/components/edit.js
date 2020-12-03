//imports react to this file
import React from 'react';
//imports axios to this file
import axios from 'axios';
//imports css file from src folder
import '../App.css';

//exports Edit which is used in app.js file
export class Edit extends React.Component{

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

    // this runs when the component is active in the view 
    componentDidMount(){
        console.log("load "+this.props.match.params.id);

        axios.get('http://localhost:4000/api/movies/'+this.props.match.params.id)
        .then(response => {
          this.setState({
            _id:response.data._id,
            Title:response.data.title,
            Year:response.data.year,
            Poster:response.data.poster
          })
        })
        .catch((error)=>{
          console.log(error);
        });
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
        poster: this.state.Poster,
        _id:this.state._id
      }

      // takes updated data from API
      axios.put('http://localhost:4000/api/movies/'+this.state._id, newMovie)
      .then(res =>{
        console.log(res.data)
      })
      .catch();

      // // takes data from API
      // axios.post('http://localhost:4000/api/movies',newMovie)
      // // gets the data
      // .then((res)=>{
      //   console.log(res);
      // })
      // // if no data is recieved then error is caught and displayed
      // .catch((err)=>{
      //   console.log(err);
      // });
    }


    //form which allows user to enter the movie details 
    render(){
      return (
        <div className="App">
            <form onSubmit={this.onSubmit}>
              <div className="form-group">
                <label>Edit Movie Title: </label>
                <input type='text' className='form-control' value={this.state.Title} onChange={this.onChangeTitle}></input>
              </div>
              <div className="form-group">
                <label>Edit Movie Year: </label>
                <input type="text" className='form-control' value={this.state.Year} onChange={this.onChangeYear}></input>
              </div>
              <div className="form-group">
                <label>Movies Poster: </label>
                <textarea type='text' className='form-control' value={this.state.Poster} onChange={this.onChangePoster}></textarea>
              </div>
              <div className="form-group">
                <input type='submit' value='Edit Movie' className='btn btn-primary'></input>
              </div>
            </form>
        </div>
      );
    }
  }