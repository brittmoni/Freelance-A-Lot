 import React from 'react';
import api from '../utils/api';
import 'bootstrap/dist/css/bootstrap.css';

function Post() {
  // addJob = () => {
    
  // }

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

export default Post;