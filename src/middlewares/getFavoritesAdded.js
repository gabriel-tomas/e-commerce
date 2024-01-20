const Favorite = require("../models/FavoriteModel");

exports.getFavorites = async (req, res, next) => {
    if(req.session.user) {
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
        
        const idUser = req.session.user._id;
    
        try {
            const favorite = new Favorite(idUser, null, language);
            await favorite.getItems();
        
            res.locals.linksToChange = favorite.favorites;
            console.log(res.locals.linksToChange);
            next();
        } catch(e) {
            console.log(e);
            next();
        }
    }
}