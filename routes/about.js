const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    console.log('About us hit');
    res.render('about')
});

module.exports = router;