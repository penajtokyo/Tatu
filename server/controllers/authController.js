var db = require('../models');
const bcrypt = require('bcrypt');
module.exports = {
  //10 is saltrounds you can change that later if you with
  //hash is the encrypted password
  customerOrArtist: (req, res) => {
    bcrypt.genSalt(10, function (err, salt) {
      bcrypt.hash(req.body.password, salt, function (err, hash) {
        // Store hash in your password DB.
        req.body.password = hash
        if (req.body.type === "customer") {
          db.Customer.create(req.body).then(function (dbData) {
            var userObj = {
              _id: dbData._id,
              firstName: dbData.firstName,
              lastName: dbData.lastName,
              email: dbData.email,
              phone: dbData.phone,
              type: dbData.type
            }
            req.session.customer = userObj;
            req.session.customer.loggedIn = true;
            res.json(dbData);
          })
        } else {
      
          var customerObj = {
            type: req.body.type,
            firstName: req.body.firstName,
            lastName: req.body.lastName,
            phone: req.body.phone,
            email: req.body.email,
            password: req.body.password
          };
          console.log(customerObj);
          db.Customer.create(customerObj).then(function (customerData) {
            var artistData = {
              specialization: req.body.artistData.specialization,
              pricing: req.body.artistData.pricing,
              location: req.body.artistData.location,
              address: req.body.artistData.street,
              city: req.body.artistData.city,
              state: req.body.artistData.state,
              zip: req.body.artistData.zip,
              Customer_Id: customerData._id
            }
            db.Artist.create(artistData).then(function (artistData) {
              console.log(artistData);
              var userObj = {
                _id: customerData._id,
                firstName: customerData.firstName,
                lastName: customerData.lastName,
                email: customerData.email,
                phone: customerData.phone,
                type: customerData.type,
                artistData: {
                  artistId: artistData._id,
                  specialization: artistData.specialization,
                  pricing: artistData.pricing,
                  location: artistData.location,
                  street: artistData.street,
                  city: artistData.city,
                  state: artistData.state,
                  zip: artistData.zip
                }
              };
              req.session.customer = userObj;
              req.session.customer.loggedIn = true;
              res.json(userObj);
            })
          })
        };
      });
    });
  },
  login: (req, res) => {
    //email
    //password
    db.Customer.find({email: req.body.email}).then((userData) => {
      console.log(userData);
      bcrypt.compare(req.body.password, userData[0].password, function (err, res) {
        // res == true
        if(res === true){
          console.log("loggedin");
          // check to see if they are an artists or not
          // if customer (I switched it to check if customer first)
          console.log('req.body', req.body); //email and password object since that is the info being passed in from the "front end"
          console.log(db.Customer.type);
          //need to determine how to check the type from teh db for the email???
            if(db.Customer.type === "customer"){
              //changed res to req below
              req.session.customer = userObj = {
                //changed from "customerData.XXXXX" to "db.Customer.XXXXX" on all values
                _id: db.Customer._id,
                firstName: db.Customer.firstName,
                lastName: db.Customer.lastName,
                email: db.Customer.email,
                phone: db.Customer.phone,
                type: db.Customer.type
              }
              console.log("I am logged in as a customer!")
            }
            else {
              //changed res to req below and then customerData.XXXX to db.Customer.XXXX on all values
              req.session.customer = userObj = {
                _id: db.Customer._id,
                firstName: db.Customer.firstName,
                lastName: db.Customer.lastName,
                email: db.Customer.email,
                phone: db.Customer.phone,
                type: db.Customer.type,
                artistData: {
                  artistId: db.Artist._id,
                  specialization: db.Artist.specialization,
                  pricing: db.Artist.pricing,
                  location: db.Artist.location,
                  street: db.Artist.street,
                  city: db.Artist.city,
                  state: db.Artist.state,
                  zip: db.Artist.zip
                }
              }
            console.log("I am an Artist and I am logged in")
           }
        }
        else {
          console.log("invalid email or password")
        }
      });
    })
  }
}