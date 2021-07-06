const router = require('express').Router();

router.get('/test', (req, res) => {
    res.send('Testing from rewards controller');
})

module.exports = router;