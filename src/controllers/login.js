const LoginModel = require("../models/LoginModel");

exports.index = (req, res) => {
    res.render("register-login", {
        route: "login"
    });
};

exports.login = async (req, res) => {
    try {
        const login = new LoginModel(req.body);
        await login.login();
        if(login.errors.length > 0) {
            req.flash("errors", login.errors);
            req.session.save(() => {
                res.redirect("/login");
            });
        } else {
            req.flash("success", "Logged in successfully");
            req.session.user = login.user;
            req.session.save(() => {
                res.redirect("/");
            });
        }
    } catch(e) {
        console.log(e);
    }
}