exports.changeLanguage = (req, res, next) => {
    req.session.lang = req.query.q;
    req.session.save(() => {
        res.redirect("back");
    });
}