const router = require('express').Router();

router.get('/test', (req, res) => {
    res.send('Testing from customers controller');
})

module.exports = router;