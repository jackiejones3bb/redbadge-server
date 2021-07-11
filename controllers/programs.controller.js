const router = require('express').Router();
const LoyaltyProgram = require('../models/loyaltyProgram');


router.get('/test', (req, res) => {
    res.send('Testing from programs controller');
})

router.get('/', (req, res) => {
    LoyaltyProgram.findAll()
    .then((programs) => {
        const statusCode = programs.length === 0 ? 404: 200
        res.status(statusCode).json(programs)})
    .catch((err) => res.status(500).json({ message:"No loyalty program found", error:err }));
})

router.get('/:id', (req, res) => {
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

router.put('/:id', (req, res) => {
    LoyaltyProgram.update({
        name: req.body.name,
        numOfPunches: req.body.numOfPunches,
        rewardType: req.body.rewardType,
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

router.post('/', (req, res) => {
    LoyaltyProgram.create({
        name: req.body.name,
        numOfPunches: req.body.numOfPunches,
        rewardType: req.body.rewardType,
        businessId: req.body.busId
    })

    .then((programs) => {
        const statusCode = programs[0] === 0 ? 404: 200
        res.status(statusCode).json(programs)})
    .catch((err) => res.status(500).json({ message:"Error, loyalty program not created", error:err }));
})

router.delete('/:id', (req, res) => {
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