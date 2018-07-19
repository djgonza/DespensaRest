const express = require('express');
const router = express.Router();
const validateRequest = require('utilities/validateRequest');
const productos = require('./productos');
const articulos = require('./articulos');
const ubicaciones = require('./ubicaciones');

router.use('/productos', validateRequest, productos);
router.use('/articulos', validateRequest, articulos);
router.use('/ubicaciones', validateRequest, ubicaciones);

module.exports = router;