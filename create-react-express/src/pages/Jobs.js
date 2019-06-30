import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import api from '../utils/api';
import {List, ListItem} from '../components/List';
import Navbar from "../components/Navbar/Navbar";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";

class Jobs extends Component {
  state = {
    job: []
  };

  componentDidMount() {
    this.showJobs();
  }

  showJobs = () => {
    api.allJobs()
      .then(res => this.setState({ job: res.data}))
      .catch(err => console.log(err));
  }

  render() {
    return (
      <div>
        <Navbar/>
        <Header className="animated fadeIn delay-3s" backgroundImage="https://i.imgur.com/FreU70c.jpg">
        <div className="animated bounceInUp"><h1>Freelance-A-Lot®</h1></div>
      </Header>
        <h1>Find Your Next Job</h1>
        {this.state.job.length ? (
          <List>
            {this.state.job.map(job => (
              <ListItem key={job._id}>
                  <h2>
                    {job.name}
                  </h2>
                  <p>
                    {job.description}
                  </p>
              </ListItem>
            ))}
          </List>
        ) : (
          <h1>No Jobs Posted</h1>
        )}

        <Footer/>
      </div>
    );
  }
};

export default Jobs;