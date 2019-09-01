const mongoose = require('mongoose');
const { Schema } = mongoose;

const HorarioSchema = new Schema({
    ruta: { type: String, required: true},
    horasalida: { type: String, required: true},
    chofer: { type: String, required: true},
    placa: { type: String, required: true}
 
  
});

module.exports = mongoose.model('Horario', HorarioSchema);