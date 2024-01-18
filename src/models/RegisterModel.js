const mongoose = require("mongoose");
const validator = require("validator");
const bcryptjs = require("bcryptjs");
const UserSchema = require("./schemas/UserSchema");

const UserModel = mongoose.model('Users', UserSchema);

class RegisterModel {
    constructor(body) {
        this.body = body;
        this.errors = [];
        this.user = null;
    }

    async create() {
        this.valid();
        await this.userExists();
        if(this.errors.length > 0) return;

        const salt = bcryptjs.genSaltSync();
        this.body.password = bcryptjs.hashSync(this.body.password, salt);

        this.user = await UserModel.create(this.body);
    }

    async userExists() {
        this.user = await UserModel.findOne({email: this.body.email});
        if(this.user) this.errors.push("User already exists");
    }

    valid() {
        this.cleanUp();

        if(this.body.name.length < 3 || this.body.name.length > 24) this.errors.push("Name must contain between 3 and 24 characters");
        if(this.body.surname.length < 3 || this.body.surname.length > 24) this.errors.push("Surname must contain between 3 and 24 characters");
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
            name: this.body.name,
            surname: this.body.surname,
            email: this.body.email,
            password: this.body.password
        };
    }
}

module.exports = RegisterModel;