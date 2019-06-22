const router = require("express").Router();
const jobController = require('../../client/controllers/jobController');

router.route('/jobs')
  .get(jobController.findAll)
  .post(jobController.create);

router.route('/jobs/:id')
  .get(jobController.findById)
  .delete(jobController.remove);

module.exports = router;