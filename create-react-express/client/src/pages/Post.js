import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';

function Post() {
  return (
    
    <form>
      <label>
        Job Title
        <input type='text' name='job-title' />
      </label>
      <label>
        Job Description
        <input type='textarea' name='job-description' />
      </label>
      <input type='submit' value='Submit' />
    </form>
  )
}

export default Post;