const db = require('../models');

//define methods to get and post info to the db

module.exports = {
    //post picture and its data to the db when added from artist page
    //gets all pictures from the DB based on arist ID (ie who uploaded them)
    findAll: function(req, res) {
        console.log(req.body);
        console.log('finding all pictures');
        db.Pictures
        .find({})
        .then(doc => res.json(doc))
        .catch(err => res.status(422).json(err));
    },
    //used from user page when querying by placement
    // findAllPlacement: function(req, res) {
    //     console.log(req.body);
    //     console.log('finding pictures by body placement');
    //     db.Pictures
    //     .findAll({})
    //     .then(doc => res.json(doc))
    //     .catch(err => res.status(422).json(err));
    // },
    //used from user page when querying by style and placement of tattoo
    findAllQuery: function(req, res) {
        console.log('this is the query values', req.query);
        if (req.query.style != "" && req.query.placement != "") {
            db.Pictures
            .find({
                style: req.query.style,
                placement: req.query.placement
            })
            .then(doc => res.json(doc))
            .catch(err => res.status(422).json(err));   
        }
        else if (req.query.style === "" && req.query.placement != "") {
            db.Pictures
            .find({
                placement: req.query.placement
            })
            .then(doc => res.json(doc))
            .catch(err => res.status(422).json(err));  
        }
        else if (req.query.placement === "" && req.query.style != "") {
            db.Pictures
                .find({
                    style: req.query.style
                })
                .then(doc => res.json(doc))
                .catch(err => res.status(422).json(err));
        }
    },
    //adds picture and its tags to db from artist page
    //this maybe done in the server.js file...need to verify and possible move?
    create: function (req, res) {
        console.log(req.body);
        console.log('saving picture');
        db.Pictures
        .create(req.body)
        .then(doc => res.json(doc))
        .catch(err => res.status(422).json(err));
    }
  };