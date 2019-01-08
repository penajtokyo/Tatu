const router = require('express').Router();
const imagesRoutes = require('./images');
const authRoutes = require('./auth');

// images routes
// url is /api/images
router.use('/images', imagesRoutes);

//auth routes?
router.use('/auth', authRoutes);
module.exports = router;