const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    console.log('alumni hit');
    res.render('alumni')
});

module.exports = router;