import React, { Component } from 'react';
import api from '../utils/api';
import 'bootstrap/dist/css/bootstrap.css';
import "../App.css"
import Navbar from '../components/Navbar/Navbar';
import Header from '../components/Header/Header';
import Footer from "../components/Footer/Footer"
import { Animated } from "react-animated-css";
import axios from 'axios';
import "../components/Instructions/Instructions.css";

class Post extends Component {
  constructor(props) {
    super(props);
    this.onChangeName = this.onChangeName.bind(this);
    this.onChangeDescription = this.onChangeDescription.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      name: '',
      description: ''
    }
  }

  onChangeName(event) {
    this.setState({
      name: event.target.value
    })
  }

  onChangeDescription(event) {
    this.setState({
      description: event.target.value
    })
  }

  onSubmit(event) {
    event.preventDefault();
    const newPost = {
      name: this.state.name,
      description: this.state.description
    }

    console.log(newPost);

    axios.post('/postjob', newPost)
      .then(newPost => console.log(newPost));

    this.setState({
      name: '',
      description: ''
    })

    alert('Job added successfully!');
  }

  render() {
    return (
      <div>
        <Navbar>
        </Navbar>
        <Header backgroundImage="https://i.imgur.com/SwAw7zx.jpg">
          <div className="animated bounceInUp"><h1>Post a Job</h1>
          <div class="container">
          <div className="animated bounceInUp delay-3s">
  <div className=" content">
    <svg id="more-arrows">
     
      <polygon className="arrow-bottom" points="37.6,64 0,36.1 5.1,32.8 37.6,56.8 70.4,32.8 75.5,36.1 "/>
    </svg>
    </div>
  </div>
</div>


          </div>
        </Header>
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <br></br>
              <h3>Please describe what resource you are looking for</h3>
              <hr></hr>
              <br></br>
            </div>
          </div>
          <div className="jobposting">
            <div className="container">

              <div onSubmit={this.onSubmit}>
                <div className="row">
                  <div className="col-md-12">
                    <label>
                      <h5>Job Title</h5>
                      <input
                        type='text'
                        className='job-title'
                        value={this.state.name}
                        onChange={this.onChangeName} />
                    </label>
                    <br></br>
                  </div>
                </div>
                <label>
                  <h5>Job Description</h5>
                  <textarea
                    className='job-description'
                    value={this.state.description}
                    onChange={this.onChangeDescription} />
                </label>
                <br></br>
                <input type='submit' variant="primary" value='Submit' />
                <br></br>
              </div>
            </div>
          </div>
          <br></br>
        </div>
        <Footer />
      </div>
    )
  }
}

export default Post;