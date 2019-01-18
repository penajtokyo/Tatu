const router = require("express").Router();
const imagesRoutes = require("./images");
const authRoutes = require("./auth");
const artistAdmin = require("./artistAdmin");

// images routes
// url is /api/images
router.use("/images", imagesRoutes);

// artist admin routes
router.use("/admin", artistAdmin);

//auth routes
router.use("/auth", authRoutes);

module.exports = router;
