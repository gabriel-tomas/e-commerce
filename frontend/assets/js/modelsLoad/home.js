import ModelLoad from "../modelLoad";

const forYou = new ModelLoad("for-you");
const topRated = new ModelLoad("top-rated");
const category = new ModelLoad("category");

// for you
forYou.createModel(".for-you-products", 3, "productCard");
// top rated
topRated.createModel(".container-top-rated-products", 10, "productCard");
// category
category.createModel(".container-categories", 10, "categoryCard");
