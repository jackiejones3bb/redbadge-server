const router = require('express').Router();
const Memberships = require('../models/memberships');
const validate = require("../middleware/validateSession");

router.get('/test', (req, res) => {
    res.send('Testing from memberships controller');
})

router.post('/', validate, (req, res) => {
    Memberships.create({
        customerId: req.body.customerId,
        businessId: req.body.busId
    })

    .then((memberships) => {
        const statusCode = memberships[0] === 0 ? 404: 200
        res.status(statusCode).json(memberships)})
    .catch((err) => res.status(500).json({ message:"Error, membership not created", error:err }));
})

router.delete('/:id', validate, (req, res) => {
    Memberships.destroy({
        where: {
          id: req.params.id,
        },
      })
    .then((memberships) => {
        const statusCode = memberships.length === 0 ? 404: 200
        res.status(statusCode).json(memberships)})
    .catch((err) => res.status(500).json({ message:"Membership not deleted", error:err }));
})

module.exports = router;