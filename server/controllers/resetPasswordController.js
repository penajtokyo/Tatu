var db = require("../models");
const bcrypt = require("bcrypt");

module.exports = {
    resetPassword: (req, res, next) => {
        console.log("This is it", req.query.resetPasswordToken)
        db.Customer.findOne({
                resetPasswordToken: req.query.resetPasswordToken,
                resetPasswordExpires: { 
                    $gt: Date.now()
                }
        }).then(user => {
            if (user === null) {
                console.log("password reset link is invalid or has expired");
                res.json("password reset link is invalid or has expired")
            } else {
                res.status(200).send({
                    username: user.username,
                    message: "password reset link a-ok"
                })
            }
        })
    },

    updatePassword: (req, res, next) => {
        bcrypt.genSalt(10, function(err, salt) {
            bcrypt.hash(req.body.password, salt, function(err, hash) {
                console.log(hash);
                req.body.password = hash;
                db.Customer.findOneAndUpdate({resetPasswordToken: req.body.passwordToken},
                    {$set: {
                        password: hash,
                        resetPasswordToken: null,
                        resetPasswordExpires: null
                    }
                }).then(user => {
                    if (user !== null) {
                        console.log("password updated");
                        res.status(200).send({ message: "password updated"});
                    } else {
                        console.log("no user exists in db to update");
                        res.status(404).json("no user exists in db to update");
                    }
                });
            })
        })
    }
}