//imports react to this file
import React from 'react';
//imports css file from src folder
import '../App.css';
import Card from 'react-bootstrap/Card';

//exports MovieItem which is used in app.js file
export class MovieItem extends React.Component {
    render() {
        return (
            //Card displays all the information that is taken from 'read.js' file.
            <div className="App">
                <Card>
                    <Card.Header>{this.props.movie.Title}</Card.Header>
                    <Card.Body>
                        <blockquote className="blockquote mb-0">
                            <img src={this.props.movie.Poster} width="200" height="200"></img>
                            <footer className="blockquote-footer">
                                <cite>{this.props.movie.Year}</cite>
                            </footer>
                        </blockquote>
                    </Card.Body>
                </Card>

            </div>
        );
    }
}