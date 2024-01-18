const mongoose = require("mongoose");

const FavoriteSchema = new mongoose.Schema({
    id_reference: {type: String, require: true},
    favorites: {type: Array, require: false}
});

module.exports = FavoriteSchema;