const router = require('express').Router();
const Customer = require('../models/customer');

router.get('/test', (req, res) => {
    res.send('Testing from customers controller');
})

module.exports = router;