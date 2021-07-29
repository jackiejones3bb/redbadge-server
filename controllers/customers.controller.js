const router = require('express').Router();
const Customer = require('../models/customer');
const validate = require("../middleware/validateSession");
const User = require('../models/users');
const { Op } = require('sequelize');
const Memberships = require('../models/memberships');
const Business = require('../models/business');
const LoyaltyProgram = require('../models/loyaltyProgram');

router.get('/test', (req, res) => {
    res.send('Testing from customers controller');
})

router.get('/', validate, (req, res) => {
    Customer.findAll()
    .then((customers) => res.status(200).json(customers))
    .catch((err) => res.status(500).json({ message:"No customers found", error:err }));
})

router.get('/:id', validate, (req, res) => {
    Customer.findAll({
        where: {
          id: req.params.id,
        },
        include: [User,{ model: Business, include: [LoyaltyProgram] } ]
      })
    .then((customers) => {
        const statusCode = customers.length === 0 ? 404: 200
        res.status(statusCode).json(customers)})
    .catch((err) => res.status(500).json({ message:"Customer not found", error:err }));
})

router.post('/search', validate, (req, res) => {
  Customer.findAll({
    include: [{
      model: User,
      where: {
        [Op.or]: [
          {
            firstName: {
              [Op.like]: `%${req.body.searchTerm}%`
            }
          },
          {
            lastName: {
              [Op.like]: `%${req.body.searchTerm}%`
            }
          }
        ]
      },
    }]

    })
  .then((customers) => {
      const statusCode = customers.length === 0 ? 404: 200
      res.status(statusCode).json(customers)})
  .catch((err) => res.status(500).json({ message:"Customer not found", error:err }));
})

router.put('/:id', validate, (req, res) => {
    Customer.update({
        phone: req.body.phone,
        street: req.body.street,
        city: req.body.city,
        state: req.body.state,
        zip: req.body.zip
    },{
        where: {
          id: req.params.id,
        },
      })
    .then((customers) => {
        const statusCode = customers[0] === 0 ? 404: 200
        res.status(statusCode).json(customers)})
    .catch((err) => res.status(500).json({ message:"Error, profile not updated", error:err }));
})

module.exports = router;