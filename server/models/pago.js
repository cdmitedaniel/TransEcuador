const mongoose = require('mongoose');
const { Schema } = mongoose;

const PagoSchema = new Schema({
    usuario:{ type: String, required: true},
    nombretarjeta: { type: String, required: true},
    numerotarjeta: { type: String, required: true}
    
 
 
});

module.exports = mongoose.model('Pago', PagoSchema);