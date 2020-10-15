//imports react to this file
import React from 'react';
//imports css file from src folder
import '../App.css';

//exports Footer which is used in app.js file
export class Footer extends React.Component{
    render(){
      return (
        <div className="App">
                <h1>My footer in another component.</h1>
        </div>
      );
    }
  }