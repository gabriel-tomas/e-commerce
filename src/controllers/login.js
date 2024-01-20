const Login = require("../models/LoginModel");

exports.index = (req, res) => {
    res.render("register-login", {
        route: "login"
    });
};

exports.login = async (req, res) => {
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

    try {
        const login = new Login(req.body, language);
        await login.login();
        if(login.errors.length > 0) {
            req.flash("errors", login.errors);
            req.session.save(() => {
                res.redirect("/login");
            });
        } else {
            req.flash("success", language === "ptBr"? "Logado com sucesso" : "Logged in successfully");
            req.session.user = login.user;
            req.session.save(() => {
                res.redirect("/");
            });
        }
    } catch(e) {
        console.log(e);
    }
}