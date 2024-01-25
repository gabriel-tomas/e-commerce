const MyData = require("../models/MyDataModel");

exports.index = async (req, res) => {
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

    if(!req.session.user) {
        req.flash("success", language === "ptBr"? "Sem usuário": "Without user");
        return;
    }

    res.locals.userData = req.session.user;
    res.render("my-data");
}