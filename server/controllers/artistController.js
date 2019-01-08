const db = require('../models');

//define methods to get and post info to the db

module.exports = {
    //retrieve the artist information from the db with its ID (this might be a user auth route/controller)
    findOne: function (req, res) {
      // console.log(req.body);
      console.log('loading artist information');
      db.Artist
      .find({_id: req.params.id})
      .then(doc => res.json(doc))
      .catch(err => res.status(422).json(err));
    },
  };