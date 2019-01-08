// this is where we will use the methods in the controller file to post and retreive from our mongoDb
const router = require('express').Router();
const artistController = require('../../controllers/artistController');
const imageController = require('../../controllers/imageController');

//this route loads the artist's data from the db based on their ID (is this an auth route though)
router
  .route('/artist/:id')
  .get(artistController.findOne);

//this will post the image to the db tied to that artist when they add one from their page?
//should this be in a separe file for images, how to tie to artist if they are separate?
router
  .route('/artist/:id/image')
  .post(imageController.create);

module.exports = router;