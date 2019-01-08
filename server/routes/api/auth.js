const router = require('express').Router();
const authController = require('../../controllers/authController')

router.route('/signup')
.post(authController.customerOrArtist)

router.route('/login')
  .post(authController.login)


module.exports = router;