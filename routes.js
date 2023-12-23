const express = require("express");
const route = express.Router();
const homeController = require("./src/controllers/homeController");
const cartController = require("./src/controllers/cartController");
const productsSearch = require("./src/controllers/productsSearch");

function startMiddleware(req, res, next) {
    console.log("Passei no seu Middleware");
    next();
}

// Rotas home
route.get("/", startMiddleware, homeController.paginaInicial);

// Rotas cart
route.get("/cart", cartController.paginaInicial);

// Rotas pesquisa
route.get("/search", productsSearch.paginaInicial);

// Rotas produto
route.get("/product", productsSearch.paginaInicial);


module.exports = route;