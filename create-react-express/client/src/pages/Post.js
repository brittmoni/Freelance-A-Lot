import React, { Component } from 'react';
import api from '../utils/api';
import 'bootstrap/dist/css/bootstrap.css';

import axios from 'axios';

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
  }


  render() {
    return (
      <form onSubmit={this.onSubmit}>
        <label>
          Job Title
          <input 
            type='text' 
            className='job-title' 
            value={this.state.name} 
            onChange={this.onChangeName} />
        </label>
        <label>
          Job Description
          <textarea 
            className='job-description'
            value={this.state.description}
            onChange={this.onChangeDescription} />
        </label>
        <input type='submit' value='Submit' />
      </form>
    )
  }
}

export default Post;