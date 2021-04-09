const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const EquipoSchema = new Schema({
    id:String,
    nombre:String,
    jugadores:Object
});
module.exports = mongoose.model('equipos', EquipoSchema);

/*
const equipo1 ={
    id:1,
    nombre:String,
    jugadores:Object
}
const equipo2 ={
    id:2,
    nombre:String,
    jugadores:Object
}
*/