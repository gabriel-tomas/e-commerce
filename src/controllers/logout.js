exports.logout = (req, res) => {
    const lang = req.session.lang;
    req.session.destroy(() => {
        res.redirect(`/language?q=${lang}`);
    });
}