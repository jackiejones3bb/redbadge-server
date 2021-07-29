const router = require('express').Router();
const Memberships = require('../models/memberships');
const validate = require("../middleware/validateSession");


router.get('/test', (req, res) => {
    res.send('Testing from memberships controller');
})

router.post('/', validate, (req, res) => {
    Memberships.create({
        customerId: req.body.customerId,
        businessId: req.body.businessId
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

router.post('/get-details', validate, (req, res) => {
    Memberships.findAll({
        where: {
          customerId: req.body.customerId,
          businessId: req.body.businessId
        },

      })
    .then((memberships) => {
        const statusCode = memberships.length === 0 ? 404: 200
        res.status(statusCode).json(memberships)})
    .catch((err) => res.status(500).json({ message:"Membership details not found", error:err }));
})

router.put('/:id', validate, (req, res) => {
    Memberships.update({
        numPunches: req.body.numPunches
    },{
        where: {
          id: req.params.id,
        },
      })
    .then((memberships) => {
        const statusCode = memberships.length === 0 ? 404: 200
        res.status(statusCode).json(memberships)})
    .catch((err) => res.status(500).json({ message:"Membership was not updated", error:err }));
})

module.exports = router;