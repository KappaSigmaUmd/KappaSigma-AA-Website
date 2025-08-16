const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    console.log('Home route hit');
    res.render('home');
});

module.exports = router;