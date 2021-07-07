
const router = require('express').Router();
const User = require('../models/users');

router.get('/test', (req, res) => {
    res.send('Testing from user controller');
})

module.exports = router;