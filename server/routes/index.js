const path = require('path');
const router = require('express').Router();
const apiImagesRoutes = require('./api/images');
// const apiUserRoutes = require('./api/user');
// const authRoutes = require("./auth/xxxx");

// API Routes
//for images
router.use('/api/images', apiImagesRoutes);

//for user

//for auth?

// If no API routes are hit, send the React app
//not sure how this will work with authentiecation routes?
router.use(function(req, res) {
  res.sendFile(path.join(__dirname, '../client/build/index.html'));
});

module.exports = router;