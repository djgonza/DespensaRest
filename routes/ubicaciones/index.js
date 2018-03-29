var express = require('express');
var router = express.Router();

router.get('/getAll', require('./getAll'));
router.post('/save', require('./save'));

module.exports = router;