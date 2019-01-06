// this is where we will use the methods in the controller file to post and retreive from our mongoDb
const router = require('express').Router();
const imageController = require('../../controllers/imageController');

//this will post the image to the db tied to that artist when they add one from their page?
//should this be in a separate file for images (based on user query and artist profile?), 
//how to tie to artist if they are separate?
router
  .route('/images')
  .post(imageController.create)
  .get(imageController.findAll)
  // .get(imageController.findAllPlacement)
  .get(imageController.findAllStyle);

module.exports = router;