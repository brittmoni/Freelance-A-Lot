import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import Home from './pages/Home';
import Jobs from './pages/Jobs';
import Post from './pages/Post';
import Profile from './pages/Profile';
import Login from './pages/Login';

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Switch>
            <Route exact path='/' component={Login} />
            <Route exact path='/home' component={Home} />
            <Route exact path='/jobs' component={Jobs} />
            <Route exact path='/postjob' component={Post} />
            <Route exact path='/profile' component={Profile} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;