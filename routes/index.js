var express = require('express');
var router = express.Router();
var productos = require('./productos');
var articulos = require('./articulos');
var ubicaciones = require('./ubicaciones');

router.use('/productos', productos);
router.use('/articulos', articulos);
router.use('/ubicaciones', ubicaciones);

module.exports = router;