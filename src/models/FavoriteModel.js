const mongoose = require("mongoose");
const FavoriteSchema = require("./schemas/FavoriteSchema");

const FavoritesModel = mongoose.model('Favorites', FavoriteSchema);

class Favorite {
    constructor(userId, item, errorLang) {
        this.userId = userId;
        this.item = item;
        this.errors = [];
        this.favorite = null;
        this.errorLang = errorLang;
    }

    defErrorLang(ptBrLangMessage, enLang2Message) {
        return this.errorLang === "ptBr"? ptBrLangMessage : enLang2Message;
    }

    async create() {
        favoriteExists();
        
        this.favorite = await FavoritesModel.findOne({ id_reference: userId });

        console.log(this.favorite);
    }

    async favoriteExists() {
        if(this.favorite) this.errors.push(this.defErrorLang("Já adicionado", "Already added"));
    }
}

module.exports = Favorite;