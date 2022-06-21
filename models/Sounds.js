const mongoose = require('mongoose');
const Schema = mongoose.Schema;

/**
 *  SoundsSchema es un modelo utilizado para almacenar y mostrar las urls de los sonidos.
 */

const SoundsSchema = new Schema({
    url: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true
    }
}, {
    timestamps: true
});

module.exports = mongoose.model("Sounds", SoundsSchema);