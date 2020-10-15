//imports react to this file
import React from 'react';
//imports css file from src folder
import '../App.css';

//exports Header which is used in app.js file
export class Header extends React.Component{
    render(){
      return (
        <div className="App">
                <h1>My header in another component.</h1>
        </div>
      );
    }
  }