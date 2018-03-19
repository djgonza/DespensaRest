var express = require('express');
var router = express.Router();

router.get('/getAll', require('./getAll'));
router.post('/save', require('./save'));
router.put('/updateById', require('./updateById'));
router.delete('/deleteById', require('./deleteById'));

module.exports = router;