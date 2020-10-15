//this file imports react and all the files which were exported in components folder
import React from 'react';
import './App.css';
import { Content } from './components/content';
import { Footer } from './components/footer';
import { Header } from './components/header';
//These imports, import all the necessary files to display navbar which is coded below
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Nav } from 'react-bootstrap';

import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

  class App extends React.Component {
    render(){
    return (
      <Router>
      <div className="App">

        <Navbar bg="primary" variant="dark">
          <Navbar.Brand href="/">Navbar</Navbar.Brand>
          <Nav className="mr-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/sport">Sport</Nav.Link>
            <Nav.Link href="/travel">Travel</Nav.Link>
          </Nav>
        </Navbar>

        <Switch>
          <Route path='/' component={Content} exact></Route>
          <Route path='/sport' component={Header}></Route>
          <Route path='/travel' component={Footer}></Route>
        </Switch>
      </div>
      </Router>
    );
  }
}

export default App;