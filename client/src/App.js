import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import ArtistProfile from "./pages/ArtistProfile";
// import ArtistAdmin from "./pages/ArtistAdmin/ArtistAdmin";
import Home from "./pages/Home";
import NoMatch from "./pages/NoMatch";
import User from "./pages/User";
import "./App.css";
import ChatScreen from './components/ChatScreen'

const App = () => {
  return (
    <Router>
      <div>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/artist" component={ArtistProfile} />
          {/* <Route exact path="/artistAdmin/:id" component={ArtistAdmin} /> */}
          <Route exact path="/user" component={User} />
          <Route component={NoMatch} />
        </Switch>
      </div>
    </Router>
  );
};

export default App;
