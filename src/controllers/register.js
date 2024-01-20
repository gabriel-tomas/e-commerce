const Register = require("../models/RegisterModel");

exports.index = (req, res) => {
    res.render("register-login", {
        route: "register"
    });
};

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

    try {
        const register = new Register(req.body, language);
        await register.create();
        if(register.errors.length > 0)  {
            req.flash("errors", register.errors);
            req.session.save(() => {
                res.redirect("/register");
            });
        } else {
            req.flash("success", "User created successfully!");
            req.session.user = register.user;
            req.session.save(() => {
                res.redirect("/");
            });
        }
    } catch(e) {
        console.log(e);
    }
}
