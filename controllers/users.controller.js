const router = require('express').Router();

router.get('/test', (req, res) => {
    res.send('Testing from user controller');
})

module.exports = router;