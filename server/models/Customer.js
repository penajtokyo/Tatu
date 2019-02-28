var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var CustomerSchema = new Schema({
  lastName: {
    type: String,
    require: true
  },
  firstName: {
    type: String,
    require: true
  },
  email: {
    type: String,
    require: true,
    unique: true
  },
  password: {
    type: String,
    require: true
  },
  phone: {
    type: String,
    require: true
  },
  type: {
    type: String,
    require: true
  },
  resetPasswordToken: {
    type: String,
    require: false
  },
  resetPasswordExpires: {
    type: Date,
    require: false
  },
  artistData: {
    type: Schema.Types.ObjectId,
    ref: "Artist"
  },
  //their saved images
  savedPictures: [{
    type: Schema.Types.ObjectId,
    ref: "Pictures"
  }]
});

// This creates our model from the above schema, using mongoose's model method
var Customer = mongoose.model("Customer", CustomerSchema);

// Export the Library model
module.exports = Customer;