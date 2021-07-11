const router = require('express').Router();
const Rewards = require('../models/rewards');
const validate = require("../middleware/validateSession");

router.get('/test', (req, res) => {
    res.send('Testing from rewards controller');
})

router.get('/', validate, (req, res) => {
    Rewards.findAll()
    .then((rewards) => {
        const statusCode = rewards.length === 0 ? 404: 200
        res.status(statusCode).json(rewards)})
    .catch((err) => res.status(500).json({ message:"No rewards found", error:err }));
})

router.get('/:id', validate, (req, res) => {
    Rewards.findAll({
        where: {
          userId: req.params.id,
        },
      })
    .then((rewards) => {
        const statusCode = rewards.length === 0 ? 404: 200
        res.status(statusCode).json(rewards)})
    .catch((err) => res.status(500).json({ message:"No rewards found", error:err }));
})

router.put('/:id', validate, (req, res) => {
    Rewards.update({
        redeemed: req.body.redeemed,
        redeemedDate: req.body.redeemedDate,
    },{
        where: {
          id: req.params.id,
        },
      })
    .then((rewards) => {
        const statusCode = rewards[0] === 0 ? 404: 200
        res.status(statusCode).json(rewards)})
    .catch((err) => res.status(500).json({ message:"Error, rewards not updated", error:err }));
})

router.post('/', validate, (req, res) => {
    Rewards.create({
        membershipId: req.body.membershipId,
        punchDate: req.body.punchDate,

    })

    .then((rewards) => {
        const statusCode = rewards[0] === 0 ? 404: 200
        res.status(statusCode).json(rewards)})
    .catch((err) => res.status(500).json({ message:"Error, punch not created", error:err }));
})

router.delete('/:id', validate, (req, res) => {
    Rewards.destroy({
        where: {
          id: req.params.id,
        },
      })
    .then((rewards) => {
        const statusCode = rewards.length === 0 ? 404: 200
        res.status(statusCode).json(rewards)})
    .catch((err) => res.status(500).json({ message:"Punch not deleted", error:err }));
})

module.exports = router;