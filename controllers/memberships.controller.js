const router = require('express').Router();
const Memberships = require('../models/memberships');

router.get('/test', (req, res) => {
    res.send('Testing from memberships controller');
})

module.exports = router;