import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import Home from './pages/Home';
import Jobs from './pages/Jobs';
import Post from './pages/Post';
import Profile from './pages/Profile';
import Login from './pages/Login';
import ProfileAnnabella from'./pages/ProfileAnnabella';
import ProfileTanya from'./pages/ProfileTanya';
import ProfileBrittany from'./pages/ProfileBrittany';
import ProfileNygel from'./pages/ProfileNygel';
import ProfileThibault from'./pages/ProfileThibault';

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
            <Route exact path='/profileAnnabella' component={ProfileAnnabella} />
            <Route exact path='/profileTanya' component={ProfileTanya} />
            <Route exact path='/profileBrittany' component={ProfileBrittany} />
            <Route exact path='/profileNygel' component={ProfileNygel} />
            <Route exact path='/profileThibault' component={ProfileThibault} />

          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;