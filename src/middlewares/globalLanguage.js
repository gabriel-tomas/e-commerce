exports.globalLanguages = (req, res, next) => {
    const languages = {
        ptBr: {
            lang: "pt-BR",
            header: {
                menu: {
                    menuHeader: "login ou cadastro",
                    myAccount: "Minha conta",
                    helpSettings: "Ajuda e configurações"
                },
                dropDownMenuText0: {
                    value: "Ajuda e configurações",
                    dropDownOptions: {
                        darkMode: "Modo escuro",
                        language: {
                            value: "Linguagem",
                            options: {
                                option1: "Português",
                                option2: "Inglês",
                            }
                        },
                        info: "Informação"
                    }
                },
                dropDownMenuText1: {
                    value: "Login/Cadastro",
                    dropDownOptions: {
                        myData: "Meus dados",
                        favorites: "Favoritos",
                        logout: "Sair"
                    }
                }
            }
        },
        en: {
            lang: "en",
            header: {
                menu: {
                    menuHeader: "login or sign up",
                    myAccount: "My account",
                    helpSettings: "Help and configuration"
                },
                dropDownMenuText0: {
                    value: "Help and settings",
                    dropDownOptions: {
                        darkMode: "Dark mode",
                        language: {
                            value: "Language",
                            options: {
                                option1: "Portuguese",
                                option2: "English",
                            }
                        },
                        info: "Info"
                    }
                },
                dropDownMenuText1: {
                    value: "Login/Sign up",
                    dropDownOptions: {
                        myData: "My data",
                        favorites: "Favorites",
                        logout: "Logout"
                    }
                }
            }
        }
    }

    if(req.url === "/") {
        // pt-br
        languages.ptBr.sectionCategories = "Categorias"
        languages.ptBr.sectionForYou = {
            value: "Para você",
            link: "Ver mais"
        }
        languages.ptBr.sectionToprated = "Mais bem avaliado";
        languages.ptBr.sectionBestsellers = "Mais vendidos";
        // en
        languages.en.sectionCategories = "Categories"
        languages.en.sectionForYou = {
            value: "For You",
            link: "See more"
        }
        languages.en.sectionToprated = "Top rated";
        languages.en.sectionBestsellers = "Best sellers";
    } else if (req.url.indexOf("/search") !== -1  || req.url.indexOf("/category") !== -1 || req.url === "/foryou" || req.url === "/products") {
        // pt-br
        languages.ptBr.resultsSearch = "resultados para";
        languages.ptBr.filterOrder = {
            option1: "Ordenar por",
            option2: "Menor preço",
            option3: "Maior preço"
        };
        languages.ptBr.filterAditionals = {
            value: "Filtro",
            minPrice: "Preço mínimo",
            maxPrice: "Preço máximo",
            category: "Categorias",
            applyBtn: "Aplicar",
        }
        languages.ptBr.loadMore = "Carregar Mais Produtos";
        // en
        languages.en.resultsSearch = "results for";
        languages.en.filterOrder = {
            option1: "Order by",
            option2: "Lowest price",
            option3: "Biggest price"
        };
        languages.en.filterAditionals = {
            value: "Filter",
            minPrice: "Min price",
            maxPrice: "Max price",
            category: "Categories",
            applyBtn: "Apply",
        }
        languages.en.loadMore = "Load More Products";
    } else if(req.url === "/register" || req.url === "/login") {
        // pt-br
        languages.ptBr.registerTitle = "Cadastre-se";
        languages.ptBr.form = {
            name: "Nome",
            surname: "Sobrenome",
            password: "Senha",
            btnSubmitSignUp: "Criar Conta",
            btnSubmitLogin: "Entrar"
        };
        languages.ptBr.alternative = {
            valueSignUp: "Novo cliente?",
            valueLogin: "Já possui cadastro?",
            linkValueSignUp: "Cadastre-se"
        };
        // en
        languages.en.registerTitle = "Sign up";
        languages.en.form = {
            name: "Name",
            surname: "Surname",
            password: "Password",
            btnSubmitSignUp: "Create Account",
            btnSubmitLogin: "Login"
        };
        languages.en.alternative = {
            valueSignUp: "New user?",
            valueLogin: "Already a customer?",
            linkValueSignUp: "Sign up"
        };
    } else if(req.url.indexOf("/product") !== -1) {
        // pt-br
        languages.ptBr.stock = {
            text1: "Estoque",
            text2: "disponíveis"
        }
        languages.ptBr.buyBox = {
            buy: "Comprar",
            cart: "Adicionar ao carrinho"
        }
        // en
        languages.en.stock = {
            text1: "Stock",
            text2: "available"
        }
        languages.en.buyBox = {
            buy: "Buy",
            cart: "Add to cart"
        }
    } else if(req.url === "/cart") {
        // pt-br
        languages.ptBr.titleCart = "Meu carrinho";
        languages.ptBr.summary = {
            value: "Sumário",
            otherPayments: {
                inCash: {
                    value: "à vista",
                    textInfo: "com 15% de desconto"
                },
                inCard: {
                    text1: "em até 12x de",
                    text2: "sem juros no cartão"
                }
            },
            finalizeBtn: "Finalizar pedido"
        }
        languages.ptBr.titleShippingDelivery = "Envio e entrega";
        languages.ptBr.formShippingDelivery = {
            zipCode: "CEP"
        }
        languages.ptBr.cleanCart = "Limpar carrinho";
        // en
        languages.en.titleCart = "My cart";
        languages.en.summary = {
            value: "Summary",
            otherPayments: {
                inCash: {
                    value: "in cash",
                    textInfo: "with 15% discount"
                },
                inCard: {
                    text1: "in up to 12x of",
                    text2: "no interest on the card"
                }
            },
            finalizeBtn: "Finalize order"
        }
        languages.en.titleShippingDelivery = "Shipping and delivery";
        languages.en.formShippingDelivery = {
            zipCode: "Zip code"
        }
        languages.en.cleanCart = "Clean cart";
    } else if(req.url === "/favorites") {
        // ptBr
        languages.ptBr.titleFavorites = "Favoritos";
        // en
        languages.en.titleFavorites = "Favorites";
    }

    let language;

    if(req.session.lang) {
        if(req.session.lang === "ptBr") {
            language = {...languages.ptBr};
        } else if(req.session.lang === "en") {
            language = {...languages.en};
        }
    } else {
        language = {...languages.en};
    }

    res.locals.language = {...language};
    
    next();
}