exports.index = (req, res) => {
    res.render("register-login", {
        route: "login"
    });
};
