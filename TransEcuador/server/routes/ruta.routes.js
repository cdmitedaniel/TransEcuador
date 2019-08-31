const express = require('express');
const router = express.Router();

const ruta = require('../controllers/ruta.controller');

router.get('/', ruta.getRutas);
router.post('/', ruta.createRuta);
router.get('/:id', ruta.getRuta);
router.put('/:id', ruta.editRuta);
router.delete('/:id', ruta.deleteRuta);

module.exports = router;