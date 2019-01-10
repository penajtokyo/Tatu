// this is where we will use the methods in the controller file to post and retreive from our mongoDb
const router = require('express').Router();
const imageController = require('../../controllers/imageController');

//this is used from the user page to return searched images.
router
  .route('/query')
  .get(imageController.findAllQuery);

//I had to move this to last so that query would work, is that normal?
//this is the route from the artist ID (their profile) to save and view all their images
//url is api/images/:id
router
  .route('/:id')
  .post(imageController.saveImage)
  .get(imageController.findAllByArtist);

module.exports = router;