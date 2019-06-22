 import React, { Component } from 'react';
import api from '../utils/api';
import 'bootstrap/dist/css/bootstrap.css';

class Post extends Component {
  state = {
    name: "",
    description: ""
  };

  addJob = () => {
    api.newJob()
      .then(res => this.setState({
        name: res.data,
        description: res.data
      }))
      .catch(err => console.log(err));
  }

  render() {
    return (
      <form>
        <label>
          Job Title
          <input type='text' name='job-title' />
        </label>
        <label>
          Job Description
          <textarea name='job-description' />
        </label>
        <input type='submit' value='Submit' />
      </form>
    )
  }
}

export default Post;