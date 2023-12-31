const express = require("express");
const route = express.Router();
const homeController = require("./src/controllers/homeController");
const cartController = require("./src/controllers/cartController");
const productsSearch = require("./src/controllers/productsSearch");
const product = require("./src/controllers/product");
const category = require("./src/controllers/category");


// Rotas home
route.get("/", homeController.index);

// Rotas cart
route.get("/cart", cartController.index);

// Rotas pesquisa
route.get("/search", productsSearch.index);

// Rotas produto
route.get("/product", product.index);

// Rotas category
route.get("/category", category.index);


module.exports = route;