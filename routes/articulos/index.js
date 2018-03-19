var express = require('express');
var router = express.Router();

router.get('/getByProducto', require('./getByProducto'));
router.post('/save', require('./save'));
router.put('/updateById', require('./updateById'));
router.put('/updateCantidadById', require('./updateCantidadById'));
router.delete('/deleteById', require('./deleteById'));

module.exports = router;