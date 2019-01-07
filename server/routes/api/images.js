// this is where we will use the methods in the controller file to post and retreive from our mongoDb
const router = require('express').Router();
const imageController = require('../../controllers/imageController');

// url is now: api/images/ (CRUD)
//can only have one get per route
router
  .route('/')
  .post(imageController.create)
  .get(imageController.findAll);

// api/images/:id (CRUD) this will find inages by artist id if needed
// router.route('/:id')

router.route('/style')
.get(imageController.findAllQuery);

// router.route('/placement')

module.exports = router;