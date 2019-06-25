const router = require("express").Router();
const Jobs = require('../models/jobs');

router.get('/jobs', function(req, res) {
  Jobs.find({}, function(err, jobs) {
    if(err) {
      console.log(err);
    } else {
      res.json(jobs);
    }
  })
})

router.post('/postjob', function(req, res) {
  let job = new Jobs(req.body);
  job.save()
    .then(job => {
      res.status(200).json({job: 'Job added successfully'});
    })
    .catch(err => {
      res.status(400).send('Could not add job');
    })
});

router.get('/jobs/:id', function(req, res) {
  Jobs.findById(req.params.id, function(err, job) {
    if(err) {
      console.log(err);
    } else {
      res.json(job);
    }
  })
});

router.delete('/jobs', function(req, res) {
  Jobs.findByIdAndRemove({_id: req.params.id}, function(err, job) {
    if(err) {
      console.log(err);
    } else {
      res.json(job);
    }
  })
});

module.exports = router;