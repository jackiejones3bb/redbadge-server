
const router = require('express').Router();
const User = require('../models/users');
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const Business = require('../models/business')
const Customer = require('../models/customer')

router.get('/test', (req, res) => {
    res.send('Testing from user controller');
})

router.post("/register-business", (req, res) => {
    const { email, password, firstName, lastName, businessName, street, city, state, zip } = req.body;
    User.create({
      email,
      password: bcrypt.hashSync(req.body.password, 13),
      firstName,
      lastName,
      role: 'business',
      business: {  //inserting Business table values through association
          name: businessName,
          street,
          city,
          state,
          zip
      }
    },{
        include: ['business']  //including the Business association into the create statement
    })
      .then((user) => {
        let token = jwt.sign({ id: user.id }, process.env.SECRET, { expiresIn: "1d" });
        res.send({
          user,
          token,
        });
      })
      .catch((error) => {
        console.log(error);
        res.status(500).send({
          message: "User not created",
          error: error.errors[0].message,
        });
      });
  });

  router.post("/register-customer", (req, res) => {
    const { email, password, firstName, lastName, phone, street, city, state, zip } = req.body;
    User.create({
      email,
      password: bcrypt.hashSync(req.body.password, 13),
      firstName,
      lastName,
      role: 'customer',
      customer: {  //inserting Business table values through association
          phone,
          street,
          city,
          state,
          zip
      }
    },{
        include: ['customer']  //including the Business association into the create statement
    })
      .then((user) => {
        let token = jwt.sign({ id: user.id }, process.env.SECRET, { expiresIn: "1d" });
        res.send({
          user,
          token,
        });
      })
      .catch((error) => {
        console.log(error);
        res.status(500).send({
          message: "User not created",
          error: error.errors[0].message,
        });
      });
  });

  router.post("/login", (req, res) => {
    User.findOne({
      where: {
        email: req.body.email,
      },
      include: [Business, Customer]
    }).then((user) => {
      if (user) {
        //  compare passwords
        bcrypt.compare(req.body.password, user.password, (err, isMatch) => {
          isMatch ? generateToken(user) : res.send("Incorrect Password");
        });
        function generateToken(user) {
          let token = jwt.sign({ id: user.id }, process.env.SECRET, { expiresIn: "1d" });
          console.log(token);
          res.send({ user, token });
        }
      } else {
        res.send("Login failed!");
      }
    });
  });

module.exports = router;