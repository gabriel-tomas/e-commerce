exports.index = (req, res) => {
    res.render("products", {forYou: true});
};
