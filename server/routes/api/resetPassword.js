const router = require('express').Router();
const resetPasswordController = require('../../controllers/resetPasswordController');

router.route('/reset-password')
  .get(resetPasswordController.resetPassword)

router.route('/update-password')
  .put(resetPasswordController.updatePassword)

module.exports = router;