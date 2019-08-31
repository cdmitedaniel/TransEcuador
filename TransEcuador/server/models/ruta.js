const mongoose = require('mongoose');
const { Schema } = mongoose;

const RutaSchema = new Schema({
    ruta: { type: String, required: false},
    costopiso1: { type: String, required: false},
    costopiso2: { type: String, required: false}
});

module.exports = mongoose.model('Ruta', RutaSchema);