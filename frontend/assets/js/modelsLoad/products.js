import ModelLoad from "../modelLoad";

// more generic for products from search, categories, for you > see more
const productLayout = new ModelLoad("product");

// products layout
productLayout.createModel(".products-layout", 10, "productCard");
