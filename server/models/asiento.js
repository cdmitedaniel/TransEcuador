const mongoose = require('mongoose');
const { Schema } = mongoose;

const AsientoSchema = new Schema({
    horario: { type: String, required: true},
    dia: { type: String, required: true},
    usuario: { type: String, required: true},

    asiento1: { type: Number, required: true},
    asiento2: { type: Number, required: true},
    asiento3: { type: Number, required: true},
    asiento4: { type: Number, required: true}
   
 
 
});

module.exports = mongoose.model('Asiento', AsientoSchema);