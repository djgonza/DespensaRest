var express = require('express');
var router = express.Router();
var productos = require('./productos');
var articulos = require('./articulos');

router.use('/productos', productos);
router.use('/articulos', articulos)

module.exports = router;