const express = require("express");
const route = express.Router();
const homeController = require("./src/controllers/home");
const cartController = require("./src/controllers/cart");
const products = require("./src/controllers/products");
const product = require("./src/controllers/product");
const category = require("./src/controllers/category");
const forYou = require("./src/controllers/forYou");
const register = require("./src/controllers/register");


// Rotas home
route.get("/", homeController.index);

// Rotas cart
route.get("/cart", cartController.index);

// Rotas pesquisa
route.get("/search", products.index);

// Rotas produto
route.get("/product", product.index);

// Rotas category
route.get("/category", category.index);

// Rotas forYou
route.get("/foryou", forYou.index);

// Rotas register
route.get("/register", register.index);


module.exports = route;