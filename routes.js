const express = require("express");
const route = express.Router();
const homeController = require("./src/controllers/home");
const cartController = require("./src/controllers/cart");
const products = require("./src/controllers/products");
const product = require("./src/controllers/product");
const category = require("./src/controllers/category");
const forYou = require("./src/controllers/forYou");
const register = require("./src/controllers/register");
const login = require("./src/controllers/login");
const logout = require("./src/controllers/logout");
const loginCheck = require("./src/middlewares/loginCheck");


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
route.get("/register", loginCheck.checkLogin, register.index);
route.post("/register", loginCheck.checkLogin, register.create);

// Rotas login
route.get("/login", loginCheck.checkLogin, login.index);
route.post("/login", loginCheck.checkLogin, login.login);

// Rotas logout
route.get("/logout", loginCheck.loginRequired, logout.logout);


module.exports = route;