const Favorite = require("../models/FavoriteModel");

exports.index = (req, res) => {
    res.render("favorites");
}

exports.create = async (req, res) => {
    let language;
    if(req.session.lang) {
        if(req.session.lang === "ptBr") {
            language = "ptBr";
        } else if(req.session.lang === "en") {
            language = "en";
        }
    } else {
        language =  "en";
    }

    const idUser = req.session.user._id;
    const newItem = req.params.id;

    if(!newItem) {
        req.flash("errors", language === "ptBr"? "ID do item precisa ser enviado" : "ID item must be sent");
        req.session.save(() => {
            res.redirect("back");
        });
        return;
    }
    if(!Number(newItem)) {
        req.flash("errors", language === "ptBr"? "ID do item precisa ser um número" : "ID item must be a number");
        req.session.save(() => {
            res.redirect("back");
        });
        return;
    } 

    const favorite = new Favorite(idUser, newItem, language);
    await favorite.create();

    if(favorite.errors.length > 0) {
        req.flash("errors", favorite.errors);
        req.session.save(() => {
            res.redirect("back");
        });
    } else {
        req.flash("success", language === "ptBr"? "Adicionado aos favoritos com sucesso!" : "Successfully added to favorites!");
        req.session.save(() => {
            res.redirect("back");
        });
    }
}