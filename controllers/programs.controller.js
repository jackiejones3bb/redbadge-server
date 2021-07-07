const router = require('express').Router();
const LoyaltyProgram = require('../models/loyaltyProgram');


router.get('/test', (req, res) => {
    res.send('Testing from programs controller');
})

module.exports = router;