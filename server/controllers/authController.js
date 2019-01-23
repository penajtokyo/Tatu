var db = require("../models");
const bcrypt = require("bcrypt");
module.exports = {
  //10 is saltrounds you can change that later if you with
  //hash is the encrypted password
  customerOrArtist: (req, res) => {
    console.log("req.body", req.body);
    bcrypt.genSalt(10, function(err, salt) {
      bcrypt.hash(req.body.password, salt, function(err, hash) {
        // Store hash in your password DB.
        req.body.password = hash;
        db.Customer.findOne({
            email: req.body.email
          }).then(newEmail => {
            if (newEmail !== null) {
              console.log('Email already registered found');
              res.json('email choice invalid');
            } else { 
        if (req.body.type === "customer") {
          db.Customer.create(req.body).then(function(dbData) {
            var userObj = {
              _id: dbData._id,
              firstName: dbData.firstName,
              lastName: dbData.lastName,
              email: dbData.email,
              phone: dbData.phone,
              type: dbData.type
            };
            req.session.customer = userObj;
            req.session.customer.loggedIn = true;
            res.json(dbData);
          });
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
          db.Customer.create(customerObj).then(function(customerData) {
            var artistData = {
              specialization: req.body.specialization,
              pricing: req.body.pricing,
              location: req.body.location,
              street: req.body.street,
              city: req.body.city,
              state: req.body.state,
              zip: req.body.zip,
              Customer_Id: customerData._id
            };
            db.Artist.create(artistData).then(function(artistData) {
              db.Customer.findByIdAndUpdate(
                { _id: customerData._id },
                { artistData: artistData._id },
                { new: true }
              ).then(updateData => {
                console.log(artistData);
                var userObj = {
                  _id: customerData._id,
                  firstName: customerData.firstName,
                  lastName: customerData.lastName,
                  email: customerData.email,
                  phone: customerData.phone,
                  type: customerData.type,
                  artistData: {
                    _id: artistData._id,
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
              });
            });
          });
        }
      }
    })
      });
    });
  },
  login: (req, res) => {
    // console.log(req.body);
    db.Customer.findOne({
      email: req.body.loginEmail
    })
      .populate("artistData")
      .then(userData => {
        console.log("User's info:", userData);

        // ***start of updated code*** if no match in db for email, comes back null
        if (userData === null) {
          console.log('user email not found');
          res.json('invalid');
        } 
        //if user data is not null then proceed to check if password matches
        else {
          bcrypt.compare(req.body.loginPassword, userData.password, function(err, pMatch) {
            //if password matches
            if (pMatch === true) {
              if (userData.type === "customer") {
                req.session.customer = {
                  _id: userData._id,
                  firstName: userData.firstName,
                  lastName: userData.lastName,
                  email: userData.email,
                  phone: userData.phone,
                  type: userData.type
                };
                req.session.customer.loggedIn = true;
                res.json(req.session.customer);
              } else {
                req.session.customer = {
                  _id: userData._id,
                  firstName: userData.firstName,
                  lastName: userData.lastName,
                  email: userData.email,
                  phone: userData.phone,
                  type: userData.type,
                  artistData: {
                    _id: userData.artistData._id,
                    specialization: userData.artistData.specialization,
                    pricing: userData.artistData.pricing,
                    location: userData.artistData.location,
                    street: userData.artistData.street,
                    city: userData.artistData.city,
                    state: userData.artistData.state,
                    zip: userData.artistData.zip
                  }
                };
                req.session.customer.loggedIn = true;
                res.json(req.session.customer);
              }
            }
            //if password doesn't match
            else {
              console.log("invalid password");
              res.json("invalid");
            }
        })
      }
    })     
  },
  session: (req, res) => {
    res.json(req.session.customer);
  },
  //Logout route
  //changed session from an object with items into it to an empty object
  logout: (req, res) => {
    if(req.session) {
    req.session.customer = {}
    res.json("user logged out")
    }
  }
};
