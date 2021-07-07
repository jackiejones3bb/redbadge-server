const router = require('express').Router();
const Business = require('../models/business');

router.get('/test', (req, res) => {
    res.send('Testing from business controller');
})

module.exports = router;