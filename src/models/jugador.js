const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const JugadorSchema = {
    id: String,
    camiseta: Number,
    nombre: String,
    apellido:String,
    goles: Number,
    amarillas: Number,
    rojas: Number
}
module.exports = mongoose.model('jugadores', JugadorSchema);

