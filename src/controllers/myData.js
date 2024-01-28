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

exports.edit = async (req, res) => {
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

    if(!req.body) {
        req.flash("error", language === "ptBr"? "Os dados precisam ser enviados": "Data needs to be sent");
        req.session.save(() => {
            res.redirect("/myData");
        });
        return;
    }

    try {
        const myData = new MyData(req.session.user._id, req.body, language);
        await myData.edit();
        if(myData.errors.length > 0)  {
            req.flash("errors", myData.errors);
            req.session.save(() => {
                res.redirect("/myData");
            });
        } else {
            req.flash("success", language === "ptBr"? "Usuário editado com sucesso": "User edited successfully!");
            req.session.user.name = myData.user.name;
            req.session.user.surname = myData.user.surname;
            req.session.user.email = myData.user.email;
            req.session.user.password = myData.user.password;
            req.session.user.userPassword = req.body.password.trim();
            req.session.save(() => {
                res.redirect("/myData");
            });
        }
    } catch(e) {
        console.log(e);
    }
}