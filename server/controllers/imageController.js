//define methods to get and post info to/from the db
const db = require("../models");
module.exports = {
  //gets all images in the db with no parameters to return to the user default view
  findAllImages: function(req, res) {
    db.Pictures.find({})
    .then(pictures => res.json(pictures))
    .catch(err => res.status(422).json(err))
  },
  //gets all artist's doc from the DB,used to load to their profile page gallery
  findAllByArtist: function (req, res) {
    console.log(req.session.customer.artistData._id);
    db.Artist.findOne({
      _id: req.session.customer.artistData._id
    })
      .populate("pictures")
      .then(doc => res.json(doc))
      .catch(err => res.status(422).json(err));
  },
  //used from user page when querying by style and placement of tattoo w/ artist info
  findAllQuery: function (req, res) {
    console.log("this is the query values", req.query);
    if (req.query.style != "" && req.query.placement != "") {
      db.Pictures.find({
        style: req.query.style,
        placement: req.query.placement
      })
        .populate('artist')
        .populate('customer')
        .then(docs => {
          console.log("the picture docs", docs);
          //create a new array of objects that doesn't contain un-needed info
          var newDocs = docs.map((doc, i,) => {
            return ({
              _id: doc._id,
              file: doc.file,
              description: doc.description,
              style: doc.style,
              placement: doc.placement,
              artist: {
                pictures: doc.artist.pictures,
                _id: doc.artist._id,
                specialization: doc.artist.specialization,
                pricing: doc.artist.pricing,
                location: doc.artist.location,
                street: doc.artist.street,
                city: doc.artist.city,
                state: doc.artist.state,
                zip: doc.artist.zip,
              },
              customer: {
                _id: doc.customer._id,
                firstName: doc.customer.firstName,
                lastName: doc.customer.lastName,
                phone: doc.customer.phone,
                email: doc.customer.email,
              }
            })
          })
          res.json(newDocs);
        })
        .catch(err => res.status(422).json(err));
    } else if (req.query.style === "" && req.query.placement != "") {
      db.Pictures.find({
        placement: req.query.placement
      })
        .populate('artist')
        .populate('customer')
        .then(docs => {
          console.log("the picture docs", docs);
          var newDocs = docs.map((doc, i,) => {
            return ({
              _id: doc._id,
              file: doc.file,
              description: doc.description,
              style: doc.style,
              placement: doc.placement,
              artist: {
                pictures: doc.artist.pictures,
                _id: doc.artist._id,
                specialization: doc.artist.specialization,
                pricing: doc.artist.pricing,
                location: doc.artist.location,
                street: doc.artist.street,
                city: doc.artist.city,
                state: doc.artist.state,
                zip: doc.artist.zip,
              },
              customer: {
                _id: doc.customer._id,
                firstName: doc.customer.firstName,
                lastName: doc.customer.lastName,
                phone: doc.customer.phone,
                email: doc.customer.email,
              }
            })
          })
          res.json(newDocs);
        })
      .catch(err => res.status(422).json(err));
    } else if (req.query.placement === "" && req.query.style != "") {
      db.Pictures.find({
        style: req.query.style
      })
        .populate('artist')
        .populate('customer')
        .then(docs => {
          console.log("the picture docs", docs);
          var newDocs = docs.map((doc, i, ) => {
            return ({
              _id: doc._id,
              file: doc.file,
              description: doc.description,
              style: doc.style,
              placement: doc.placement,
              artist: {
                pictures: doc.artist.pictures,
                _id: doc.artist._id,
                specialization: doc.artist.specialization,
                pricing: doc.artist.pricing,
                location: doc.artist.location,
                street: doc.artist.street,
                city: doc.artist.city,
                state: doc.artist.state,
                zip: doc.artist.zip,
              },
              customer: {
                _id: doc.customer._id,
                firstName: doc.customer.firstName,
                lastName: doc.customer.lastName,
                phone: doc.customer.phone,
                email: doc.customer.email,
              }
            })
          })
          res.json(newDocs);;
        })
      .catch(err => res.status(422).json(err));
    }
  },
  //adds picture and its tags to db from artist page with the associated artist ID
  saveImage: function (req, res) {
    // console.log('object to save', req.body);
    // console.log("testData in ImageController: ", req.params);
    // console.log("session data: ", req.session.customer);
    // console.log("saving to artist id", req.session.customer.artistData._id);
    db.Artist.findOne({
      _id: req.session.customer.artistData._id
    })
    .then(artist => {
      // console.log('the artist data:', artist);
      console.log("saving picture");
      //save the picture to the associated artist ID
      db.Pictures.create(req.body)
      .then(picture => {
        db.Artist.findOneAndUpdate(
          { _id: req.session.customer.artistData._id },
          { $push: { pictures: picture._id } },
          { new: true })
          // })
          //then find the picture ID just created and add the artist ID and Customer ID
          .then(pictureData => {
            console.log('picture Data', pictureData);
            db.Pictures.findOneAndUpdate(
              { _id: picture._id },
              {
                $push: {
                  artist: req.session.customer.artistData._id,
                  customer: req.session.customer._id
                }
              },
              { new: true })
            .then((data) => res.json(data));
          })
        })
      .catch(err => res.status(422).json(err));
    })
  }
}