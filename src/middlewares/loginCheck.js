exports.checkLogin = (req, res, next) => {
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

    if(req.session.user) {
        req.flash("errors", [
            language === "ptBr"? "Você já está logado" : "You are already logged in!"
        ]);
        req.session.save(() => {
            res.redirect("/");
        });
        return;
    }
    next();
}

exports.loginRequired = (req, res, next) => {
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
        req.flash("errors", [
            language === "ptBr"? "Login requerido" : "Login required"
        ]);
        req.session.save(() => {
            res.redirect("/register");
        });
        return;
    }
    next();
}