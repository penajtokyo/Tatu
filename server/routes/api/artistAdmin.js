const router = require("express").Router();
const artistAdminController = require("../../controllers/artistAdminController");

router.route("/artistUpdate").put(artistAdminController.getArtistData);

module.exports = router;
