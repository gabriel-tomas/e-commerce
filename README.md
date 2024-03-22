# Sobre o projeto
Projeto baseado em um E-commerce onde você pode colocar coisas no carrinho, adicionar coisas aos favoritos, ter uma conta para armazenar suas coisas aos favoritos.

Produtos, categorias são todas requisitados da API **[DummyJSON](https://dummyjson.com/)**.

[Veja o projeto aqui](https://e-commerce-jrt4.onrender.com/)

![home page](https://github.com/gabriel-tomas/e-commerce/blob/master/public/assets/imgs/e-commerce.png?raw=true)

## O projeto possui frontend e backend:
- O frontend foi feito com **EJS**, puro **JavaScript** e puro **CSS**

- O backend foi feito com o **Express** para o gerenciamento das rotas e o banco de dados usado foi **MongoDB** para armazenar os usuários do E-commerce

## Resumo do que foi usado
EJS, JavaScript, CSS, Express, MongoDB e WebPack com Babel.

## Como rodar o projeto localmente
- Primeiro de tudo você precisa setar o .env na pasta raiz do projeto com as seguintes variáveis:
```shell
DEFAULT_PORT="porta_do_projeto"
CONNECTION_STRING="connection_string_mongo_db"
SECRET="secret_da_session"
```
A connection string pode ser obtida seguindo esse guia: https://www.mongodb.com/basics/mongodb-connection-string

- Clone o repositório:
```shell
git clone https://github.com/gabriel-tomas/e-commerce.git
```
Vá para a pasta onde o projeto foi clonado
- Instale os pacotes:
```shell
npm i
```
- Execute o server:
```shell
npm start
```
Adendo: Caso você queira editar os arquivos JS da pasta __frontend__ (pasta essa que se encontra na raiz do projeto) você precisa rodar o comando ``npm run loadwp`` para ele fazer o bundle dos arquivos JS para serem usados no frontend.