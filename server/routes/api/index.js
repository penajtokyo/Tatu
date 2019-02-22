const router = require("express").Router();
const imagesRoutes = require("./images");
const authRoutes = require("./auth");
const artistAdmin = require("./artistAdmin");
const passwordRoute = require("./forgotPassword");
const resetRoute = require("./resetPassword");

// images routes
// url is /api/images
router.use("/images", imagesRoutes);

// artist admin routes
router.use("/admin", artistAdmin);

//auth routes
router.use("/auth", authRoutes);

//forgot password routes
router.use("/forgotPassword", passwordRoute);

//reset password routes
router.use("/resetPassword", resetRoute);

module.exports = router;
