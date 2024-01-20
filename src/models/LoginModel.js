const mongoose = require("mongoose");
const validator = require("validator");
const bcryptjs = require("bcryptjs");
const UserSchema = require("./schemas/UserSchema");
const FavoriteSchema = require("./schemas/FavoriteSchema");

const UserModel = mongoose.model('Users', UserSchema);
const FavoritesModel = mongoose.model('Favorites', FavoriteSchema);

class Login {
    constructor(body, errorLang) {
        this.body = body;
        this.errors = [];
        this.user = null;
        this.errorLang = errorLang;
    }

    defErrorLang(ptBrLangMessage, enLang2Message) {
        return this.errorLang === "ptBr"? ptBrLangMessage : enLang2Message;
    }

    async login() {
        this.valid();
        if(this.errors.length > 0) return;

        this.user = await UserModel.findOne({email: this.body.email});

        if(!this.user) {
            this.errors.push(this.defErrorLang("Usuário não existe", "User does not exist"));
            return;
        }
        if(!bcryptjs.compareSync(this.body.password, this.user.password)) {
            this.errors.push(this.defErrorLang("Senha incorreta ou inválida", "Incorrect or invalid password"));
            this.user = null;
            return;
        }

        const favorites = await FavoritesModel.findOne({ id_reference: this.user._id });

        if(!favorites) {
            await FavoritesModel.create({ id_reference: this.user._id });
        }
    }

    async userExists() {
        if(this.user) this.errors.push(this.defErrorLang("Usuário já existe", "User already exists"));
    }

    valid() {
        this.cleanUp();

        if(!validator.isEmail(this.body.email)) this.errors.push(this.defErrorLang("E-mail inválido", "Invalid e-mail"));
        if(this.body.password.length < 8 || this.body.password.length > 24) this.errors.push(this.defErrorLang("Senha deve conter entre 8 e 32 caracteres", "Password must contain between 8 and 32 characters"));
    }

    cleanUp() {
        for(const key in this.body) {
            if(typeof this.body[key] !== "string") {
                this.body[key] = "";
            }
        }

        this.body = {
            email: this.body.email,
            password: this.body.password
        };
    }
}

module.exports = Login;