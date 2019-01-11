
var express = require("express");
var mongoose = require("mongoose");
var session = require("express-session");
var routes = require("./routes")

var PORT = process.env.PORT || 3001;

// var db = require("./models");

// Initialize Express
var app = express();

// Configure middleware
app.use(
  session({
    secret: "keyboard cat",
    resave: false,
    saveUninitialized: true,
    cookie: {
      secure: false
    }
  })
);
//middleware for setting up a user object when anyone first come to the appplication
function userSetup(req, res, next) {
  if (!req.session.customer) {
    req.session.customer = {}
    req.session.customer.loggedIn = false;
  }
  next()
}

//using middlewhere acrossed the entire application before any route gets hit.
app.use(userSetup)

// Use morgan logger for logging requests
// app.use(logger("dev"));
// Parse request body as JSON
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// Make public a static folder
app.use(express.static("public"));

// Connect to the Mongo DB
mongoose.connect("mongodb://localhost/tatuDB", { useNewUrlParser: true });

//using router routes
app.use(routes)

app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
});


//Test Data
// {
//   "file": 'asdfasdf.jpg',
//   "description": 'dope tattoo',
//   "style": 'the dopest',
//   "placement": 'where ever',
// }
// {
//   "type": "customer",
//   "firstName": "asdf",
//   "lastName": "asdf",
//   "phone": "asdf",
//   "email": "customerTest@test.com",
//   "password": "1234"
// }

// {
//   "type": "artist",
//   "firstName": "test2",
//   "lastName": "artist2",
//   "phone": "8015551214",
//   "email": "test2Test@test.com",
//   "password": "12345",
//   "artistData": {
//     "specialization": "American Traditional",
//     "pricing": "byPiece",
//     "location": "home",
//     "street": "123 main st",
//     "city": "salt lake city",
//     "state": "UT",
//     "zip": "84121"
//   }
// }