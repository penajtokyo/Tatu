const db = require("../models");
// const bcrypt = require("bcrypt");

module.exports = {
  getArtistData: (req, res) => {
    // get artist/customer id off of req.session
    var customerId = req.session.customer._id;
    var artistId = req.session.customer.artistData._id
    console.log("this is cust id", customerId);
    console.log("this is artist id", artistId);
    console.log(req.body);
    //call db.Customer.findOneAndUpdate() and give it the id of our artist/customer and update their data

    db.Customer.findOneAndUpdate({ _id: customerId }, {
      $set: {
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        email: req.body.email,
        phone: req.body.phone,
      }
    }, { new: true }).then((updatedCustomerData) => {

      console.log("this is updated customer data", updatedCustomerData);

      db.Artist.findOneAndUpdate({ _id: artistId }, {
        $set: {
          location: req.body.location,
          street: req.body.street,
          city: req.body.city,
          state: req.body.state,
          zip: req.body.zip,
          pricing: req.body.pricing,
          specialization: req.body.specialization
        }
      }, { new: true }).then((updatedArtistData) => {

        console.log("this is updated artist data", updatedArtistData);

        var userObj = {
          _id: updatedCustomerData._id,
          firstName: updatedCustomerData.firstName,
          lastName: updatedCustomerData.lastName,
          email: updatedCustomerData.email,
          phone: updatedCustomerData.phone,
          type: updatedCustomerData.type,
          artistData: {
            _id: updatedArtistData._id,
            specialization: updatedArtistData.specialization,
            pricing: updatedArtistData.pricing,
            location: updatedArtistData.location,
            street: updatedArtistData.street,
            city: updatedArtistData.city,
            state: updatedArtistData.state,
            zip: updatedArtistData.zip
          }
        };
        //once done, we need to update our req.session with the new data coming back from the db.
        req.session.customer = userObj;
        req.session.customer.loggedIn = true;
        //then we should send that data back to the client
        res.json(req.session.customer)
      })
    })
  },
  updateUserData: (req, res) => {
    // console.log('req.body', req.body);
    db.Customer.findOneAndUpdate(
      {_id: req.session.customer._id},
      {$set: {
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        email: req.body.email,
        phone: req.body.phone
        }
      },
      {new: true})
      .then(updatedData => {
        // console.log('updated data', updatedData);
        res.json(updatedData)
      })
      .catch(err => res.status(422).json(err));
  }
};

// {
//   "firstName": "Greg",
//   "lastName": "Galant",
//   "email": "greg@greg.com",
//   "phone": 444444444,
//   "location": "1234 S. 5678 E.",
//   "street": "wall st",
//   "city": "chandler",
//   "state": "VT",
//   "zip": "63925",
//   "pricing": "per hour",
//   "specialization": "things"
// }
// {
//   "firstName": "bob",
//   "lastName": "smith",
//   "email": "bob@smith.com",
//   "phone": 22345456,
//   "location": "4321 S. 312213 E.",
//   "street": "wall st",
//   "city": "chandler",
//   "state": "VT",
//   "zip": "63925",
//   "pricing": "per hour",
//   "specialization": "things"
// }