import axios from 'axios';

export default {
  allJobs: function() {
    return axios.get('/jobs');
  },
  chooseJob: function(id) {
    return axios.get('/jobs/' + id);
  },
  newJob: function(newPost) {
    return axios.post('/jobs', newPost);
  },
  deleteJob: function(id) {
    return axios.get('/jobs' + id);
  }
}