const router = require("express").Router();
const imagesRoutes = require("./images");
const authRoutes = require("./auth");
const adminRoutes = require("./admin");

// images routes
// url is /api/images
router.use("/images", imagesRoutes);

// artist and user admin routes
//url is /api/admin
router.use("/admin", adminRoutes);

//auth routes
router.use("/auth", authRoutes);

module.exports = router;
