const path = require("path");
const router = require("express").Router();
const Jobs = require('../models/jobs');

// Job GET request
router.get('/jobs', (req, res) => {
  Jobs.find()
    .then(jobs => res.json(jobs))
});

//Job POST request
router.post('/postjob', (req, res) => {
  const newJob = new Jobs({
    name: req.body.name,
    description: req.body.description
  });

  newJob.save().then(jobs => res.json(jobs));
})

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

// Profile GET request

// If no API routes are hit, send the React app
router.use(function(req, res) {
  res.sendFile(path.join(__dirname, "../client/build/index.html"));
});
 
module.exports = router;