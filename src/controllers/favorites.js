const FavoriteModel = require("../models/FavoriteModel");

exports.index = (req, res) => {
    res.render("favorites");
}

exports.create = (req, res) => {
    const idUser = req.session.user._id;

    console.log(idUser);
}