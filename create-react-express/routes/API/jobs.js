const router = require("express").Router();
// const jobController = require('../../client/controllers/jobController');
const Jobs = require('../../models/jobs');

router.route('/jobs')
  .get(function(req, res) {
    Jobs.find(function(err, jobs) {
      if(err) {
        console.log(err);
      } else {
        res.json(jobs);
      }
    })
  })

router.route('/postjob')
  .post(function(req, res) {
    let job = new Jobs(req.body);
    job.save()
      .then(job => {
        res.status(200).json({'job': 'Job added successfully'});
      })
      .catch(err => {
        res.status(400).send('Unable to save to database');
      })
  });

router.route('/jobs/:id')
  .get(function(req, res) {
    Jobs.findById(req.params.id, function(err, job) {
      if(err) {
        console.log(err);
      } else {
        res.json(job);
      }
    })
  });

router.route('/jobs')
  .get(function(req, res) {
    Jobs.findByIdAndRemove({_id: req.params.id}, function(err, job) {
      if(err) {
        console.log(err);
      } else {
        res.json(job);
      }
    })
  });

module.exports = router;