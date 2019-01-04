import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import ArtistProfile from './pages/ArtistProfile';
import Home from './pages/Home';
import Navbar from './components/Navbar';
import NoMatch from './pages/NoMatch';
import User from './pages/User';
import './App.css';

class App extends Component {
  render() {
    return (
      <Router>
        <Navbar />
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/artist' component={ArtistProfile} />
          <Route exact path='/user' component={User} />
          <Route component={NoMatch} />
        </Switch>
      </Router>
    );
  };
};

export default App;
