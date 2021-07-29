const router = require('express').Router();
const LoyaltyProgram = require('../models/loyaltyProgram');
const validate = require("../middleware/validateSession");


router.get('/test', (req, res) => {
    res.send('Testing from programs controller');
})

router.get('/', validate, (req, res) => {
    LoyaltyProgram.findAll()
    .then((programs) => {
        const statusCode = programs.length === 0 ? 404: 200
        res.status(statusCode).json(programs)})
    .catch((err) => res.status(500).json({ message:"No loyalty program found", error:err }));
})

router.get('/:id', validate, (req, res) => {
    LoyaltyProgram.findAll({
        where: {
          id: req.params.id,
        },
      })
    .then((programs) => {
        const statusCode = programs.length === 0 ? 404: 200
        res.status(statusCode).json(programs)})
    .catch((err) => res.status(500).json({ message:"No loyalty program found", error:err }));
})

router.put('/:id', validate, (req, res) => {
    LoyaltyProgram.update({
        name: req.body.name,
        numOfPunches: req.body.numOfPunches,
        rewardType: req.body.rewardType,
        rewardAmount: req.body.rewardAmount
    },{
        where: {
          id: req.params.id,
        },
      })
    .then((programs) => {
        const statusCode = programs[0] === 0 ? 404: 200
        res.status(statusCode).json(programs)})
    .catch((err) => res.status(500).json({ message:"Error, loyalty program not updated", error:err }));
})

router.post('/', validate, (req, res) => {
    LoyaltyProgram.create({
        name: req.body.name,
        numOfPunches: req.body.numOfPunches,
        rewardType: req.body.rewardType,
        rewardAmount: req.body.rewardAmount,
        businessId: req.body.busId
    })

    .then((programs) => {
        const statusCode = programs[0] === 0 ? 404: 200
        res.status(statusCode).json(programs)})
    .catch((err) => res.status(500).json({ message:"Error, loyalty program not created", error:err }));
})

router.delete('/:id', validate, (req, res) => {
    LoyaltyProgram.destroy({
        where: {
          id: req.params.id,
        },
      })
    .then((programs) => {
        const statusCode = programs.length === 0 ? 404: 200
        res.status(statusCode).json(programs)})
    .catch((err) => res.status(500).json({ message:"Loyalty program not deleted", error:err }));
})


module.exports = router;