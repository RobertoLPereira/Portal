/* importar o módulo do framework express */
var express = require('express');

/* importar o módulo do consign */
var consign = require('consign');

/* importar o módulo do body-parser */
var bodyParser = require('body-parser');

/* importar o módulo do express-validator */
var expressValidator = require('express-validator');

/* importar o módulo do express-session */
var expressSession = require('express-session');

/* iniciar o objeto do express */
var app = express();

/* setar as variáveis 'view engine' e 'views' do express */
app.set('view engine', 'ejs');
app.set('views', './app/views');

/* configurar o middleware express.static */
app.use(express.static('./app/public'));

/* configurar o middleware body-parser */
app.use(bodyParser.urlencoded({extended: true}));

/* configurar o middleware express-validator */
//app.use(expressValidator());

/* configura o middleware express-session */
app.use(expressSession({
	secret: 'portaldenegocios',
	resave: false,
	saveUninitialized: false
}));
// SDK de Mercado Pago
//const mercadopago = require ('mercadopago');
// Agrega credenciales
//mercadopago.configure({
  //  access_token: 'APP_USR-270067533223318-061517-e2f6165884b721d14938ec5436dee7bf-121817330'
  //});

/* efetua o autoload das rotas, dos models e dos controllers para o objeto app */
consign()
	.include('app/routes')
	.then('config/db.config.js')
	.then('app/models')
	.then('app/controllers')
	.into(app);

/* exportar o objeto app */
module.exports = app;