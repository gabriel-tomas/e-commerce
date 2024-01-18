const mongoose = require("mongoose");
const validator = require("validator");
const bcryptjs = require("bcryptjs");
const UserSchema = require("./schemas/UserSchema");
const FavoriteSchema = require("./schemas/FavoriteSchema");

const UserModel = mongoose.model('Users', UserSchema);
const FavoritesModel = mongoose.model('Favorites', FavoriteSchema);

class RegisterModel {
    constructor(body) {
        this.body = body;
        this.errors = [];
        this.user = null;
    }

    async login() {
        this.valid();
        if(this.errors.length > 0) return;

        this.user = await UserModel.findOne({email: this.body.email});

        if(!this.user) {
            this.errors.push("User does not exist");
            return;
        }
        if(!bcryptjs.compareSync(this.body.password, this.user.password)) {
            this.errors.push("Incorrect or invalid password");
            this.user = null;
            return;
        }

        await FavoritesModel.create({ id_reference: this.user._id });
    }

    async userExists() {
        if(this.user) this.errors.push("User already exists");
    }

    valid() {
        this.cleanUp();

        if(!validator.isEmail(this.body.email)) this.errors.push("Inválid e-mail");
        if(this.body.password.length < 8 || this.body.password.length > 24) this.errors.push("Password must contain between 8 and 32 characters");
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

module.exports = RegisterModel;