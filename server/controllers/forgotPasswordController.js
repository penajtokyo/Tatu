var db = require("../models");
const crypto = require("crypto");
require("dotenv").config();


const keys = require("../keys");
const nodemailer = require("nodemailer");

module.exports = {
    forgotPassword: (req, res, next) => {
        console.log(req.body.email)
        if (req.body.email === "") {
            res.json("email required");
        }
        const token = crypto.randomBytes(20).toString("hex");
        db.Customer.findOneAndUpdate({email: req.body.email}, 
            {$set:{
                resetPasswordToken: token,
                resetPasswordExpires: Date.now() + 180000

            }}).then(user => {
            if (user === null) {
                res.json("email not in db");
            } else {
                const transporter = nodemailer.createTransport({
                    service: "gmail",
                    auth: {
                        user: `${keys.email.email}`,
                        pass: `${keys.email.password}`
                    },
                });

                const mailOptions = {
                    from: `tatuinkinc@gmail.com`,
                    to: `${user.email}`,
                    subject: `Link To Reset Password`,
                    text:
                        `You are receiving this because you (or someone else) have requested the reset of the password for your account.\n\n` +
                        `Please click on the following link, or paste this into your browser to complete the process within 30 minutes of receiving it: \n\n` +
                        `http://localhost:3002/reset-password/${token}\n\n` +
                        `If you did not request this, please ignore this email and your password will remain unchanged.\n`
                };
                console.log("sending mail");

                transporter.sendMail(mailOptions, function(err, response) {
                    if (err) {
                        console.error("there was an error: ", err);
                    } else {
                        console.log("here is the res: ", response);
                        res.status(200).json("recovery email sent");
                    }
                })
            }
        })
    }
}