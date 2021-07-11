const router = require('express').Router();
const Customer = require('../models/customer');

router.get('/test', (req, res) => {
    res.send('Testing from customers controller');
})

router.get('/', (req, res) => {
    Customer.findAll()
    .then((customers) => res.status(200).json(customers))
    .catch((err) => res.status(500).json({ message:"No customers found", error:err }));
})

router.get('/:id', (req, res) => {
    Customer.findAll({
        where: {
          id: req.params.id,
        },
      })
    .then((customers) => {
        const statusCode = customers.length === 0 ? 404: 200
        res.status(statusCode).json(customers)})
    .catch((err) => res.status(500).json({ message:"Customer not found", error:err }));
})

router.put('/:id', (req, res) => {
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