import axios from 'axios';

export default {
  allJobs: function() {
    return axios.get('/api/jobs');
  },
  chooseJob: function(id) {
    return axios.get('/api/jobs/' + id);
  }
}