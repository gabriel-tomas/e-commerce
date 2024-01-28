const mongoose = require("mongoose");
const validator = require("validator");
const bcryptjs = require("bcryptjs");
const UserSchema = require("./schemas/UserSchema");

const UserModel = mongoose.model('Users', UserSchema);

class MyData {
    constructor(id, body, errorLang) {
        this.id = id;
        this.body = body;
        this.errors = [];
        this.user = null;
        this.errorLang = errorLang;
    }

    defErrorLang(ptBrLangMessage, enLang2Message) {
        return this.errorLang === "ptBr"? ptBrLangMessage : enLang2Message;
    }

    async getUser() {
        this.user = await UserModel.findOne({ _id: this.id });
    }

    async edit() {
        this.valid();
        if(this.errors.length > 0) return;

        const salt = bcryptjs.genSaltSync();
        this.body.password = bcryptjs.hashSync(this.body.password, salt);

        this.user = await UserModel.findOneAndUpdate({ _id: this.id }, { ...this.body }, {new: true});
    }

    valid() {
        this.cleanUp();

        if(this.body.name.length < 3 || this.body.name.length > 24) this.errors.push(this.defErrorLang("Nome deve conter entre 3 e 24 caracteres", "Name must contain between 3 and 24 characters"));
        if(this.body.surname.length < 3 || this.body.surname.length > 24) this.errors.push(this.defErrorLang("Sobrenome deve conter entre 3 e 24 caracteres", "Surname must contain between 3 and 24 characters"));
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
            name: this.body.name.trim(),
            surname: this.body.surname.trim(),
            email: this.body.email.trim(),
            password: this.body.password.trim()
        };
    }
}

module.exports = MyData;