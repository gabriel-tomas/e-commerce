exports.middlewareGlobal = (req, res, next) => {
    res.locals.errors = req.flash("errors");
    res.locals.success = req.flash("success");
    if(req.session.user) {
        res.locals.user = {name: req.session.user.name};
    } else {
        res.locals.user = null;
    }
    next();
}

exports.checkCsrfError = (err, req, res, next) => {
    if(err/*  && err.code === "EBADCSRFTOKEN" */) {
        return res.render("404");
    }
    next();
}

exports.csrfMiddleware = (req, res, next) => {
    res.locals.csrfToken = req.csrfToken();
    next();
}