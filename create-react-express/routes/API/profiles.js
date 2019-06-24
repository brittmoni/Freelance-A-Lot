const router = require("express").Router();
const profileController = require('../../client/controllers/profileController');

router.route('/profile/:id')
  .get(profileController.findById)
  .post(profileController.create);

module.exports = router;