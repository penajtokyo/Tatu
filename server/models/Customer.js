var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var CustomerSchema = new Schema({
  lastName: {
    type: String,
    require: true,
    unique: true
  },
  firstName: {
    type: String,
    require: true,
    unique: true
  },
  email: {
    type: String,
    require: true,
    unique: true
  },
  password: {
    type: String,
    require: true,
    unique: true
  },
  phone: {
    type: String,
    require: true,
    unique: true
  },
  type: {
    type: String,
    require: true
  },
  artistId: {
    type: Schema.Types.ObjectId,
    ref: "Artist"
  }
});

// This creates our model from the above schema, using mongoose's model method
var Customer = mongoose.model("Customer", CustomerSchema);

// Export the Library model
module.exports = Customer;