//define methods to get and post info to/from the db

const db = require('../models');

module.exports = {
    //gets all pictures from the DB based on arist ID (ie who uploaded them) to load to their profile page
    findAll: function(req, res) {
        console.log(req.params.id);
        console.log('finding all pictures for this artist');
        db.Pictures
        .find({_id: req.params.id})
        .then(doc => res.json(doc))
        .catch(err => res.status(422).json(err));
    },
    //used from user page when querying by style and placement of tattoo
    //need to also pull back the tatto artist info associated with each image
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
    //adds picture and its tags to db from artist page with the associated artist ID
    saveImage: function (req, res) {
        console.log('object to save', req.body);
        console.log ('saving to artist id', req.params.id) //or ??
        // console.log ('saving to artist id', req.session.customer.artistData.artistId) 
        // console.log('saving picture');
        db.Artist.findOne({
            // _id: req.session.customer.artistData.artistId
            _id: req.params.id
        })
        .then((artist) => {
            console.log('artist:', artist);
             // console.log('saving picture');
            db.Pictures
            .create(req.body)
            .then((picture) => {
                db.Artist.findOneAndUpdate(
                    // {_id: req.session.customer.artistData.artistId}, 
                    {_id: req.params.id},
                    { $push: { pictures: picture._id } }, 
                    { new: true })
                    .then((doc) => {res.json(doc)})
                })
            })
        .catch(err => res.status(422).json(err));
    }
};