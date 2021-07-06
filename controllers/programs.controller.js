const router = require('express').Router();

router.get('/test', (req, res) => {
    res.send('Testing from programs controller');
})

module.exports = router;