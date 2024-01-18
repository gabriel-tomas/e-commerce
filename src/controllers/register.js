const RegisterModel = require("../models/RegisterModel");

exports.index = (req, res) => {
    res.render("register-login", {
        route: "register"
    });
};

exports.create = async (req, res) => {
    try {
        const register = new RegisterModel(req.body);
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
