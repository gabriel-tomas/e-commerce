require("dotenv").config();
const express = require("express");
const app = express();
const routes = require("./routes");
const path = require("path");
const MdwareGlobal = require("./src/middlewares/middleware");

app.use(express.urlencoded({extended: true}));

app.use(express.static(path.resolve(__dirname, "public")));

app.set("views", path.resolve(__dirname, "src", "views"));
app.set("view engine", "ejs");

// Meus próprios middlewares
app.use(MdwareGlobal);
app.use(routes);

const port = process.env.DEFAULT_PORT;

app.listen(port, () => {
    console.log(`Acesse http://localhost:${port}`);
    console.log(`Executando na porta ${port}`);
});