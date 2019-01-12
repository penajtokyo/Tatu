//define methods to get and post info to/from the db
const db = require("../models");

module.exports = {
  //gets all artist's doc from the DB, based on artist who is signed, in and the array of their images
  // used to load to their profile page gallery
  findAllByArtist: function(req, res) {
    console.log(req.session.customer.artistData);

    console.log(
      "req.customer.session artist id: ",
      req.session.customer.artistData._id
    );
    db.Artist.findOne({
      _id: req.session.customer.artistData.artistId
    })
      .populate("pictures")
      .then(doc => {
        //this is how to drill down into get the aritiest and then image data
        // console.log('artist doc with pictures', doc);
        // console.log('picture array for the artist', doc.pictures);
        // console.log('picture url from db', doc.pictures[0].file);
        res.json(doc);
      })
      .catch(err => res.status(422).json(err));
  },
  //used from user page when querying by style and placement of tattoo
  //need to also pull back the tatto artist info associated with each image
  findAllQuery: function(req, res) {
    console.log("this is the query values", req.query);
    if (req.query.style != "" && req.query.placement != "") {
      db.Pictures.find({
        style: req.query.style,
        placement: req.query.placement
      })
        // .populate('artist')
        .then(doc => {
          console.log("the picture doc", doc);
          res.json(doc);
        })
        .catch(err => res.status(422).json(err));
    } else if (req.query.style === "" && req.query.placement != "") {
      db.Pictures.find({
        placement: req.query.placement
      })
        .then(doc => res.json(doc))
        .catch(err => res.status(422).json(err));
    } else if (req.query.placement === "" && req.query.style != "") {
      db.Pictures.find({
        style: req.query.style
      })
        .then(doc => res.json(doc))
        .catch(err => res.status(422).json(err));
    }
  },
  //adds picture and its tags to db from artist page with the associated artist ID
  saveImage: function(req, res) {
    // console.log('object to save', req.body);
    console.log("testData in ImageController: ", req.params);
    console.log("session data: ", req.session.customer);
    console.log("saving to artist id", req.session.customer.artistData._id);
    db.Artist.findOne({
      _id: req.session.customer.artistData._id
    })
      .then(artist => {
        // console.log('the artist data:', artist);
        console.log("saving picture");
        db.Pictures.create(req.body).then(picture => {
          db.Artist.findOneAndUpdate(
            { _id: req.session.customer.artistData._id },
            { $push: { pictures: picture._id } },
            { new: true }
          ).then(doc => {
            res.json(doc);
          });
        });
      })
      .catch(err => res.status(422).json(err));
  }
};
