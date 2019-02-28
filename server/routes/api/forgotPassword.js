const router = require('express').Router();
const forgotPasswordController = require('../../controllers/forgotPasswordController');

router.route('/forgot-password')
  .post(forgotPasswordController.forgotPassword)

module.exports = router;