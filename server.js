require('dotenv').config();
const express = require("express");
const app = express();
const mongoose = require("mongoose");
mongoose.connect(process.env.CONNECTION_STRING)
    .then(() => {
        console.log("Conexão com DB obtida com sucesso!");
        app.emit("ready");
    })
    .catch(error => {
        console.log("ERROR: erro na conexão com o DB");
        console.log(error);
    });
const session = require("express-session");
const MongoStore = require("connect-mongo");
const flash = require("connect-flash");
const routes = require("./routes");
const path = require("path");
const csrf = require("csurf");
const {middlewareGlobal, checkCsrfError, csrfMiddleware} = require("./src/middlewares/middleware");
const {globalLanguages} = require("./src/middlewares/globalLanguage");
const {getFavorites} = require("./src/middlewares/getFavoritesAdded");

app.use(express.urlencoded({extended: true}));
app.use(express.json());
app.use(express.static(path.resolve(__dirname, "public")));

const sessionOptions = session({
    secret: process.env.SECRET,
    store: MongoStore.create({ mongoUrl: process.env.CONNECTION_STRING }),
    resave: false,
    saveUninitialized: false,
    cookie: {
        maxAge: 1000 * 60 * 60 * 24 * 7,
        httpOnly: true
    }
});

app.use(sessionOptions);
app.use(flash());

app.set("views", path.resolve(__dirname, "src", "views"));
app.set("view engine", "ejs");

app.use(csrf());
// Meus próprios middlewares
app.use(middlewareGlobal);
app.use(checkCsrfError);
app.use(csrfMiddleware);
app.use(globalLanguages);
app.use(getFavorites);
app.use(routes);

app.on('ready', () => {
    app.listen(3000, () => {
        console.log("Acesse http://localhost:3000");
        console.log("Executando na porta 3000");
    });
})
