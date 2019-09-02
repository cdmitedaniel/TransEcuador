const express = require('express');
const router = express.Router();

const pago = require('../controllers/pago.controller');

router.get('/', pago.getPagos);
router.post('/', pago.createPago);
router.get('/:id', pago.getPago);
router.put('/:id', pago.editPago);
router.delete('/:id', pago.deletePago);

module.exports = router;