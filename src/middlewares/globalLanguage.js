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
            },
            projectInfo: {
                title: "Sobre o projeto",
                paragraphs: {
                    p1: "Projeto baseado em um E-commerce onde você pode colocar coisas no carrinho, adicionar coisas aos favoritos, ter uma conta para armazenar suas coisas aos favoritos.",
                    p2: `Produtos, categorias são todas requisitados da API <strong><a href="https://dummyjson.com/" target="_blank">DummyJSON</a></strong>.`,
                },
                h2: "O projeto possui frontend e backend:",
                ul: {
                    li1: `O frontend foi feito com <strong>EJS</strong>, puro <strong>JavaScript</strong> e puro <strong>CSS</strong>`,
                    li2: `O backend foi feito com o <strong>Express</strong> para o gerenciamento das rotas e o banco de dados usado foi <strong>MongoDB</strong> para armazenar os usuários do E-commerce`
                },
                resume: "Resumo do que foi usado: EJS, JavaScript, CSS, Express, MongoDB e WebPack com Babel."
            },
            footer: "Criado por",
            errorPage: {
                title: "Erro",
                paragraph: "Houve algum erro ao tentar se conectar"
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
            },
            projectInfo: {
                title: "About the project",
                paragraphs: {
                    p1: "Project based on an E-commerce where you can add things to the cart, add things to favorites, have an account to store your favorite things.",
                    p2: `Products, categories are all requested from the API <strong><a href="https://dummyjson.com/" target="_blank">DummyJSON</a></strong>.`,
                },
                h2: "The project has a frontend and backend:",
                ul: {
                    li1: `The frontend was made with <strong>EJS</strong>, pure <strong>JavaScript</strong> and pure <strong>CSS</strong>`,
                    li2: `The backend was made with <strong>Express</strong> for route management and the database used was <strong>MongoDB</strong> to store E-commerce users`
                },
                resume: "Summary of what was used: EJS, JavaScript, CSS, Express, MongoDB and WebPack with Babel."
            },
            footer: "Made by",
            errorPage: {
                title: "Error",
                paragraph: "There was an error trying to connect"
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
    } else if (req.url.indexOf("/search") !== -1  || req.url.indexOf("/category") !== -1 || req.url === "/foryou") {
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
        languages.ptBr.notFound = "Nenhum item foi encontrado";
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
        languages.en.notFound = "No items were found";
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
        languages.ptBr.emptyCart = "Carrinho vazio";
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
        languages.en.emptyCart = "Empty cart";
    } else if(req.url === "/favorites") {
        // ptBr
        languages.ptBr.titleFavorites = "Favoritos";
        // en
        languages.en.titleFavorites = "Favorites";
    } else if(req.url === "/myData") {
        // ptBr
        languages.ptBr.titleMyData = "Meus dados";
        languages.ptBr.formMyData = {
            name: "Nome",
            surname: "Sobrenome",
            password: "Senha",
            btnSubmit: "Salvar alterações",
            btnCancelEdit: "Cancelar alterações",
            btnEdit: "Editar informações da conta"
        };
        // en
        languages.en.titleMyData = "My data";
        languages.en.formMyData = {
            name: "Name",
            surname: "Surname",
            password: "Password",
            btnSubmit: "Save changes",
            btnCancelEdit: "Cancel changes",
            btnEdit: "Edit account information"
        };
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