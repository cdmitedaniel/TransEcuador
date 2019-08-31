const mongoose = require('mongoose');
const { Schema } = mongoose;

const UserSchema = new Schema({
    nombre: { type: String, required: true},
    apellido: { type: String, required: true},
    nacimiento: { type: String, required: true},
    email: { type: String, required: true},
    direccion: { type: String, required: true},
    telefono: { type: String, required: false},
    password: { type: String, required: false},
    cedula: { type: String, required: false},
    ciudad: { type: String, required: false}
});

module.exports = mongoose.model('User', UserSchema);