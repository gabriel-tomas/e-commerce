class ProductsRoutes {
    constructor() {
        Object.defineProperty(this, "mainRoute", {
            enumerable: true,
            writable: false,
            configurable: false,
            value: 'https://dummyjson.com'
        })
        Object.defineProperty(this, "allProductsRoute", {
            enumerable: true,
            writable: false,
            configurable:false,
            value: `${this.mainRoute}/products`
        })
        let searchLink = null;
        Object.defineProperty(this, "setSearchRoute", {
            get: function() {
                return searchLink;
            },
            set: function(value) {
                if(typeof value !== "string") return;
                if(!value) return;
                searchLink = `${this.mainRoute}/products/search?q=${value}`;
            }
        })
        let singleId = null;
        Object.defineProperty(this, "setSingleRoute", {
            enumerable: true,
            configurable: false,
            get: function() {
                return singleId;
            },
            set: function(id) { // https://dummyjson.com/products/2
                if(typeof id !== "string") return;
                if(!id) return;
                singleId = `${this.mainRoute}/products/${id}`;
            }
        })
        Object.defineProperty(this, "allCategoriesRoute", {
            enumerable: true,
            writable: false,
            configurable:false,
            value: `${this.mainRoute}/products/categories`
        })
        let searchCategory = null;
        Object.defineProperty(this, "setCategoryRoute", {
            get: function() {
                return searchCategory;
            },
            set: function(value) {
                if(typeof value !== "string") return;
                if(!value) return;
                searchCategory = `${this.mainRoute}/products/category/${value}`;
            }
        })
        let comments = null;
        Object.defineProperty(this, "setCommentsRoute", {
            get: function() {
                return comments;
            },
            set: function(limit) {
                if(typeof limit !== "string") return;
                if(!limit) return;
                comments = `${this.mainRoute}/comments?limit=${limit}`;
            }
        })
    }

    static fetchRoute(route, callback) {
        try {
            fetch(route).then(res => {
                res.json().then(data => {
                    if(callback) callback(data);
                });
            });
        } catch(err) {
            throw new Error(err);
        }
    }

    getAllProducts(skip=0, limit=30, callback) {
        ProductsRoutes.fetchRoute(`${this.allProductsRoute}?skip=${skip}&limit=${limit}`, callback);
    }

    setSearchProducts(input, callback) {
        this.setSearchRoute = input;
        ProductsRoutes.fetchRoute(this.setSearchRoute, callback);
    }
    
    getAllCategories(callback) {
        ProductsRoutes.fetchRoute(this.allCategoriesRoute, callback);
    }

    setCategoryProducts(input, callback) {
        this.setCategoryRoute = input;
        ProductsRoutes.fetchRoute(this.setCategoryRoute, callback);
    }

    getSingleProduct(id, callback) {
        this.setSingleRoute = id;
        ProductsRoutes.fetchRoute(this.setSingleRoute, callback);
    }

    getComments(limit, callback) {
        this.setCommentsRoute = limit;
        ProductsRoutes.fetchRoute(this.setCommentsRoute, callback);
    }
}

const productsMethods = new ProductsRoutes();
export default productsMethods;
