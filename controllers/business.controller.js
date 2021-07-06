const router = require('express').Router();

router.get('/test', (req, res) => {
    res.send('Testing from business controller');
})

module.exports = router;