import ModelLoad from "../modelLoad";

const forYou = new ModelLoad("for-you");
const topRated = new ModelLoad("top-rated");

// for you
forYou.createModel(".for-you-products", 3, "productCard");
// top rated
topRated.createModel(".container-top-rated-products", 10, "productCard");