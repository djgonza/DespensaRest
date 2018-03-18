var express = require('express');
var router = express.Router();

router.get('/getAll', require('./getAll'));
router.get('/getByProducto', require('./getByProducto'));
router.get('/getCountByProducto', require('./getCountByProducto'));

router.post('/', require('./post'));
router.put('/', require('./put'));
router.delete('/', require('./delete'));

module.exports = router;