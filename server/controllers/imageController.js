//define methods to get and post info to/from the db
const db = require("../models");

module.exports = {
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
  //gets all user's saved images to load into their saved/favorites gallery
  findAllSaved: function (req, res) {
    console.log(req.session.customer._id);
    db.Customer.findOne({
      _id: req.session.customer._id
    })
    //this is how to populate across multple linked/nested tables
    .populate({
      path: 'savedPictures',
      populate: {
        path: 'customer',
        //doesn't bring back the password key/value
        select: '-password',
        populate: {
          path: 'artistData'
        }
      }
    })
    .then(doc => res.json(doc))
    .catch(err => res.status(422).json(err));
  },
  //used from user page when querying by style and placement of tattoo w/ artist info
  findAllQuery: function (req, res) {
    console.log("this is the query values", req.query);
    if (req.query.style == "All" || req.query.placement == "All"){
      db.Pictures.find({})
      .populate({
        path: 'customer',
        select: '-password',
        populate: {
          path: 'artistData'
        }
      })
      // console.log("the picture docs", docs);
      .then(doc => res.json(doc))
      .catch(err => res.status(422).json(err));
    }
    else if (req.query.style != "" && req.query.placement != "") {
      db.Pictures.find({
        style: req.query.style,
        placement: req.query.placement
      })
      .populate({
        path: 'customer',
        select: '-password',
        populate: {
          path: 'artistData'
        }
      })
      // console.log("the picture docs", docs);
      .then(doc => res.json(doc))
      .catch(err => res.status(422).json(err));
    } 
    else if (req.query.style === "" && req.query.placement != "") {
      db.Pictures.find({
        placement: req.query.placement
      })
      .populate({
        path: 'customer',
        select: '-password',
        populate: {
          path: 'artistData'
        }
      })
      // console.log("the picture docs", docs);
      .then(doc => res.json(doc))
      .catch(err => res.status(422).json(err));
    } 
    else if (req.query.placement === "" && req.query.style != "") {
      db.Pictures.find({
        style: req.query.style
      })
      .populate({
        path: 'customer',
        select: '-password',
        populate: {
          path: 'artistData'
        }
      })
      // console.log("the picture docs", docs);
      .then(doc => res.json(doc))
      .catch(err => res.status(422).json(err));
    }
  },
  //adds picture and its tags to db from artist page with the associated artist ID
  addImage: function (req, res) {
    // console.log('object to save', req.body);
    db.Artist.findOne({
      _id: req.session.customer.artistData._id
    })
    .then(artist => {
      // console.log('the artist data:', artist);
      console.log("adding picture");
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
  },
  //saves images to the user's saved gallery/favorites
  saveImage: function (req, res) {
    //req.body needs to be the image _id for the card that it was clicked on
    console.log('Picture ID', req.body);
    //find the image id in the Pictures table
    db.Pictures.findOne({
      _id: req.body
    })
     //then find that customer by their session ID in the database
    .then(picture => {
      // console.log('the picture data:', picture);
      console.log("saving picture");
      //find the customer in the customer's table
      db.Customer.findOneAndUpdate(
        { _id: req.session.customer._id },
        //put that picture ID into the customer.savedPictures array
        { $push: { savedPictures: picture._id } },
        { new: true })
      .then((data) => res.json(data))
    })
    .catch(err => res.status(422).json(err));
  },
  //removes an image from the user's savedImages array in the db
  removeSavedImage: function (req, res) {
    //find the customer by the req.session id
    console.log('Picture ID to remove', req.body._id);
    console.log('customer ID', req.session.customer._id);
    db.Customer.findOneAndUpdate(
      { _id: req.session.customer._id },
      //remove that picture ID into the customer.savedPictures array
      { $pull: { savedPictures: req.body._id } },
      { new: true })
      .then((data) => res.json(data))
    //update the saved images array by removing that picture id (req.body)
    .catch(err => res.status(422).json(err));
  }
}