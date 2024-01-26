const mongoose = require("mongoose");
const FavoriteSchema = require("./schemas/FavoriteSchema");

const FavoritesModel = mongoose.model('Favorites', FavoriteSchema);

class Favorite {
    constructor(userId, item, errorLang) {
        this.userId = userId;
        if(item) {
            this.item = String(item.trim());
        }
        this.errors = [];
        this.favorite = null;
        this.errorLang = errorLang;
        this.favorites = [];
    }

    defErrorLang(ptBrLangMessage, enLang2Message) {
        return this.errorLang === "ptBr"? ptBrLangMessage : enLang2Message;
    }

    async create() {
        this.favorite = await FavoritesModel.findOne({ id_reference: this.userId });
        if(!this.favorite) return;
        this.favorites = [...this.favorite.favorites];
        if(!Number(this.item)) return;
        this.favoriteExists();
        if(this.errors.length > 0) return;
        await FavoritesModel.findOneAndUpdate({ id_reference: this.userId }, { favorites: [...this.favorites, this.item] });
    }

    async delete() {
        this.favorite = await FavoritesModel.findOne({ id_reference: this.userId });
        if(!this.favorite) return;
        this.favorites = [...this.favorite.favorites];
        if(!Number(this.item)) return;
        this.favoriteNotExists();
        if(this.errors.length > 0) return;
        this.favorites.splice(this.favorites.indexOf(this.item), 1);
        await FavoritesModel.findOneAndUpdate({ id_reference: this.userId }, { favorites: [...this.favorites] });
    }

    async getItems() {
        this.favorite = await FavoritesModel.findOne({ id_reference: this.userId });
        if(!this.favorite) return;
        this.favorites = this.favorite.favorites;
        if(!this.favorites) {
            return null;
        }
    }

    async favoriteNotExists() {
        if(this.favorites.indexOf(this.item) === -1) this.errors.push(this.defErrorLang("Esse item não existe nos favoritos", "This item does not exist in favorites"))
    }

    async favoriteExists() {
        if(this.favorites.indexOf(this.item) !== -1) this.errors.push(this.defErrorLang("Já adicionado", "Already added"));
    }
}

module.exports = Favorite;