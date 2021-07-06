const router = require('express').Router();

router.get('/test', (req, res) => {
    res.send('Testing from memberships controller');
})

module.exports = router;