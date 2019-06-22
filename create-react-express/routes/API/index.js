const router = require('express').Router();
const jobs = require('./jobs');
const profiles = require('./profiles');

router.use("/jobs", jobs);
router.use("/profile", profiles);

module.exports = router;
