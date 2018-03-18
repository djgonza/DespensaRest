var express = require('express');
var router = express.Router();

router.get('/getAll', require('./getAll'));
router.post('/', require('./post'));
router.put('/', require('./put'));
router.delete('/', require('./delete'));

module.exports = router;