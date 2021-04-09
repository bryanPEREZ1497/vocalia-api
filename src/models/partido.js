const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// const PartidoSchema = new Schema({
//     id: String,
//     vocal: String,
//     fecha: Date,
//     lugar: String,
//     equipos: Object,
//     observaciones: String
// });





/*
    EJEMPLO
*/

/*
const Partido = {
    id: '1',
    vocal: 'Yo',
    fecha: Lunes,
    arbitro: 'Juan',
    lugar: 'Solanda',
    equipos: [1,2]
    goles:[] Aquí van los jugadores
    amarillas:[]
    rojas:[]
}
*/

//Ejemplo 2
const PartidoSchema = {
    vocal: String,
    fecha: Date,
    arbitro: String,
    lugar: String,
    equipos: [{
        nombre: String,
        jugadores: [{
            camiseta: Number,
            nombre: String,
            goles: Number,
            amarillas: Number,
            rojas: Number
        }]
    },
    {
        nombre: String,
        jugadores: [{
            camiseta: Number,
            nombre: String,
            goles: Number,
            amarillas: Number,
            rojas: Number
        }]
    }]
}


module.exports = mongoose.model('partidos', PartidoSchema);
