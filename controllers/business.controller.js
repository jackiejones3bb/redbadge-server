const router = require('express').Router();
const Business = require('../models/business');

router.get('/test', (req, res) => {
    res.send('Testing from business controller');
})

router.get('/', (req, res) => {
    Business.findAll()
    .then((businesses) => res.status(200).json(businesses))
    .catch((err) => res.status(500).json({ message:"No businesses found", error:err }));
})

router.get('/:id', (req, res) => {
    Business.findAll({
        where: {
          id: req.params.id,
        },
      })
    .then((businesses) => {
        const statusCode = businesses.length === 0 ? 404: 200
        res.status(statusCode).json(businesses)})
    .catch((err) => res.status(500).json({ message:"No business found", error:err }));
})

router.put('/:id', (req, res) => {
    Business.update({
        name: req.body.name,
        street: req.body.street,
        city: req.body.city,
        state: req.body.state,
        zip: req.body.zip
    },{
        where: {
          id: req.params.id,
        },
      })
    .then((businesses) => {
        const statusCode = businesses[0] === 0 ? 404: 200
        res.status(statusCode).json(businesses)})
    .catch((err) => res.status(500).json({ message:"Error, business not updated", error:err }));
})


module.exports = router;