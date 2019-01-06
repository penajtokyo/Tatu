const router = require('express').Router();
const imagesRoutes = require('./artist');
// const userRoutes = require('./user');

// images routes
router.use('/images', imagesRoutes);

//user routes

module.exports = router;