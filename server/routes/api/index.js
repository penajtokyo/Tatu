const router = require("express").Router();
const imagesRoutes = require("./images");
const authRoutes = require("./auth");
const artistAdmin = require("./artistAdmin");
const passwordRoute = require("./forgotPassword");
const resetRoute = require("./resetPassword");
const adminRoutes = require("./admin");

// images routes
// url is /api/images
router.use("/images", imagesRoutes);

// artist and user admin routes
//url is /api/admin
router.use("/admin", adminRoutes);

//auth routes
router.use("/auth", authRoutes);

//forgot password routes
router.use("/forgotPassword", passwordRoute);

//reset password routes
router.use("/resetPassword", resetRoute);

module.exports = router;
