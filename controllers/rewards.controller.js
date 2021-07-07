const router = require('express').Router();
const Rewards = require('../models/rewards');

router.get('/test', (req, res) => {
    res.send('Testing from rewards controller');
})

module.exports = router;