//imports react to this file
import React from 'react';
//imports css file from src folder
import '../App.css';

//exports Create which is used in app.js file
export class Create extends React.Component{
    render(){
      return (
        <div className="App">
            <h1>This is the create component.</h1>
        </div>
      );
    }
  }