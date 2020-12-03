//imports react to this file
import React from 'react';
//imports axios to this file
import axios from 'axios';
// imports Link which allows to change the URL of the application
import {Link} from 'react-router-dom';
//imports css file from src folder
import '../App.css';
//imports css files from react bootstarp
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import e from 'cors';

//exports MovieItem which is used in app.js file
export class MovieItem extends React.Component {
    
    //this constructor allows to delete movies
    constructor() {
        super();
        this.DeleteMovie = this.DeleteMovie.bind(this);
    }

    //this methood indicates which exact movie is to be deleted by taking the movies ID and deleting the matching one
    DeleteMovie(e){
        e.preventDefault();
        axios.delete('http://localhost:4000/api/movies/'+this.props.movie._id)
        .then(()=>{
            this.props.ReloadData();
        })
        .catch((err)=>{
            console.log(err);
        });
    }

    render() {
        return (
            //Card displays all the information that is taken from 'read.js' file
            //Added 'delete' button under each movie which allows to remove a specific title from the database
            <div className="App">
                <Card>
                    <Card.Header>{this.props.movie.title}</Card.Header>
                    <Card.Body>
                        <blockquote className="blockquote mb-0">
                            <img src={this.props.movie.poster} width="200" height="200"></img>
                            <footer className="blockquote-footer">
                                <cite>{this.props.movie.year}</cite>
                            </footer>
                        </blockquote>
                        <Button variant="danger" onClick={this.DeleteMovie}>Delete</Button>
                        <Link to={'/edit/'+this.props.movie._id} className="btn btn-primary ml-3">Edit</Link>
                    </Card.Body>
                </Card>
            </div>
        );
    }
}