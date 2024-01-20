const mongoose = require("mongoose");
const FavoriteSchema = require("./schemas/FavoriteSchema");

const FavoritesModel = mongoose.model('Favorites', FavoriteSchema);

class Favorite {
    constructor(userId, item, errorLang) {
        this.userId = userId;
        if(item) {
            this.item = item.trim();
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
        this.favorites = [...this.favorite.favorites];
        this.favoriteExists();
        if(this.errors.length > 0) return;
        if(!Number(this.item)) return;
        await FavoritesModel.findOneAndUpdate({ id_reference: this.userId }, { favorites: [...this.favorites, this.item] });
    }

    async getItems() {
        this.favorite = await FavoritesModel.findOne({ id_reference: this.userId });
        this.favorites = this.favorite.favorites;
        if(!this.favorites) {
            return null;
        }

        const products = [];
        for(let item of this.favorites) {
            const requestItem = await fetch(`https://dummyjson.com/products/${item}`);
            const product = await requestItem.json();
            products.push(product);
        }

        return products;
    }

    async favoriteExists() {
        if(this.favorites.indexOf(this.item) !== -1) this.errors.push(this.defErrorLang("Já adicionado", "Already added"));
    }
}

module.exports = Favorite;