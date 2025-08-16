const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    console.log('brothers hit');
    res.render('brothers')
});

module.exports = router;