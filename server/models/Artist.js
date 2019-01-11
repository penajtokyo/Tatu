var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var ArtistSchema = new Schema({
  location: String,
  street: String,
  city: String,
  state: String,
  zip: String,
  pricing: String,
  specialization: String,
  pictures: [{
    type: Schema.Types.ObjectId,
    ref: "Pictures"
  }]
});

var Artist = mongoose.model("Artist", ArtistSchema);

// Export the Library model
module.exports = Artist;