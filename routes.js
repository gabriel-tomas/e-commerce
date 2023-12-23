const express = require("express");
const route = express.Router();
const homeController = require("./src/controllers/homeController");
const cartController = require("./src/controllers/cartController");
const productsSearch = require("./src/controllers/productsSearch");


// Rotas home
route.get("/", homeController.paginaInicial);

// Rotas cart
route.get("/cart", cartController.paginaInicial);

// Rotas pesquisa
route.get("/search", productsSearch.paginaInicial);

// Rotas produto
route.get("/product", productsSearch.product);


module.exports = route;