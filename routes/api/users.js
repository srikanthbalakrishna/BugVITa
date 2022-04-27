/**
 * Handles all the 'routes' for GET,POST,DELETE,PUT from the "User" database
 */

const express = require("express");

const router = express.Router();
router.use(express.static("public"));

const User = require("../../models/User"); //User model

// @route POST api/users/signup
// @desc add/create a user
// @access Public
router.post("/signup", (req, res) => {
  const newUser = new User({
    email: req.body.email,
    password: req.body.password,
  });

  newUser.save().then((user) => res.json({ ...user, signedup: true }));
  console.log("Signup successful!");
}); //create a user POST ends

// @route GET api/users/login/:email-:password
// Example Request URL: api/users/login/admin@gmail.com-admin123
// req.params: { "email": "admin@gmail.com", "password": "admin123" }
// @desc check if user exists in database.
// @access Public
router.get("/login/:email-:password", (req, res) => {
  User.findOne(
    { email: req.params.email, password: req.params.password },
    (err, user) => {
      if (err) {
        console.log(err);
        return res.status(500).send(); //some server side error
      }

      if (!user) {
        //if no such user exists
        console.log("No such user exists");
        return res.json({ ...req.body, loggedin: false });
      }
      console.log("Login successful!");
      return res.json({ ...user, loggedin: true });
    }
  ); //findOne() ends
}); //login user GET route ends

module.exports = router;
