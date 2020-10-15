//imports react to this file
import React from 'react';
//imports css file from src folder
import '../App.css';

//exports Content which is used in app.js file
//new Date().toLocaleTimeString - shows local time 
export class Content extends React.Component{
    render(){
      return (
        <div className="App">
            <h1>Hello World!</h1>
            <h2>It is {new Date().toLocaleTimeString()}</h2>
        </div>
      );
    }
  }