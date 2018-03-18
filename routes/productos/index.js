var express = require('express');
var router = express.Router();

router.get('/', require('./get'));
router.post('/', require('./post'));
router.put('/', require('./put'));
router.delete('/', require('./delete'));

module.exports = router;