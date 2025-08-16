const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    console.log('Rush hit');
    res.render('rush')
});

module.exports = router;