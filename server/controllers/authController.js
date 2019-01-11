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
              street: req.body.artistData.street,
              city: req.body.artistData.city,
              state: req.body.artistData.state,
              zip: req.body.artistData.zip,
              Customer_Id: customerData._id
            }
            db.Artist.create(artistData).then(function (artistData) {
              db.Customer.findByIdAndUpdate({_id: customerData._id},{artistData: artistData._id})
              .then( updateData =>{
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
          })
        };
      });
    });
  },
  login: (req, res) => {
    //email
    //password
    db.Customer.findOne({
      email: req.body.email
    })
    .populate("artistData")
    .then((userData) => {
      console.log('userData ahhhhhhhhhhhhhhhhh', userData);
      bcrypt.compare(req.body.password, userData.password, function (err, pMatch) {
        if( pMatch === true) {

          // if(userData.type === "artist"){
          //   db.Artist.find
          // }
          // check to see if they are an artists or not
          // if customer
          if(userData.type === "customer") {
            //changed res to req below
            req.session.customer = {
              //changed from "customerData.XXXXX" to "db.Customer.XXXXX" on all values
              _id: userData._id,
              firstName: userData.firstName,
              lastName: userData.lastName,
              email: userData.email,
              phone: userData.phone,
              type: userData.type,
            }
            console.log("I am logged in as a customer!");
          }
          else {
            //changed res to req below and then customerData.XXXX to db.Customer.XXXX on all values
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
            }
            req.session.customer.loggedIn = true;
            res.json(req.session.customer);
 
          }
        }
        else {
          console.log("invalid email or password")
        }
      });
    })
  },
  session: (req, res) =>{
    res.json(req.session.customer)
  }
}