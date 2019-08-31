const express = require('express');
const router = express.Router();

const asiento = require('../controllers/asiento.controller');

router.get('/', asiento.getAsientos);
router.post('/', asiento.createAsiento);
router.get('/:id', asiento.getAsiento);
router.put('/:id', asiento.editAsiento);
router.delete('/:id', asiento.deleteAsiento);

module.exports = router;