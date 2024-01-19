exports.checkLogin = (req, res, next) => {
    if(req.session.user) {
        req.flash("errors", [
            "You are already logged in!"
        ]);
        req.session.save(() => {
            res.redirect("/");
        });
        return;
    }
    next();
}

exports.loginRequired = (req, res, next) => {
    if(!req.session.user) {
        req.flash("errors", [
            "Login required"
        ]);
        req.session.save(() => {
            res.redirect("/");
        });
        return;
    }
    next();
}