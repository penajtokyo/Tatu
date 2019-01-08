const router = require('express').Router();
const imagesRoutes = require('./images');
// const userRoutes = require('./user');

// images routes
// url is /api/images
router.use('/images', imagesRoutes);

//auth routes?

module.exports = router;