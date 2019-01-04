var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var PicturesSchema = new Schema({
  file: String,
  description: String,
  style: String,
  placement:String,
});

var Pictures = mongoose.model("Pictures", PicturesSchema);

// Export the Library model
module.exports = Pictures;