const router = require("express").Router();
const adminController = require("../../controllers/adminController");

//url: api/admin/artistUpdate
router
    .route("/artistUpdate")
    .put(adminController.getArtistData);

//url: api/admin/userUpdate
router
    .route("/userUpdate")
    .put(adminController.updateUserData);

module.exports = router;
