const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const peliculas = new Schema({
   
    titulo: {
        type: String,
        required: true
    },
    genero: {
        type: String,
        required: true,
    },
    director: {
        type: String,
        required: true,
    },
})




const Pelis = mongoose.model('peliculas', peliculas);

module.exports = Pelis

