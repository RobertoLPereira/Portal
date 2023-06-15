module.exports = function(application){
	application.get('/', function(req, res){
		application.app.controllers.index.index(application, req, res);
	});
	application.get('/mercadopago', function(req, res){
		application.app.controllers.index.mp(application, req, res);
	});
	application.get('/Carrinho', function(req, res){
		application.app.controllers.index.carrinho(application, req, res);
	});
	application.get('/portal', function(req, res){
		application.app.controllers.index.index(application, req, res);
	});
	application.get('/conteudo', function(req, res){
		application.app.controllers.index.conteudo(application, req, res);
	});
	application.get('/menu', function(req, res){
		if (req.session.autenticado){
			application.app.controllers.index.menu(application, req, res);
		}else{
			application.app.controllers.index.index(application, req, res);
		}
	});
	application.post('/autenticar', function(req, res){
		application.app.controllers.index.autenticar(application, req, res);
	});
	application.get('/autenticar', function(req, res){
		application.app.controllers.index.autenticar(application, req, res);
	});
	application.post('/recuperasenha', function(req, res){
		application.app.controllers.index.recuperasenha(application, req, res);
	});
	application.get('/login', function(req, res){
		application.app.controllers.index.login(application, req, res);
	});
	application.get('/loginCompreaki', function(req, res){
		var path = require('path');
		var userName = process.env['USERPROFILE'].split(path.sep)[2];
		res.render('logindelivery/login', {validacao: [],usuario:userName});
	});
	application.get('/loginCad', function(req, res){
		var path = require('path');
		var userName = process.env['USERPROFILE'].split(path.sep)[2];
		res.render('logindelivery/cad_login', {validacao: [],Usuario:userName});
	});
	application.get('/altersenha', function(req, res){
		var path = require('path');
		var userName = process.env['USERPROFILE'].split(path.sep)[2];
		res.render('logindelivery/alt_senha', {validacao: [],usuario:userName});
	});
	application.get('/recsenha', function(req, res){
		var path = require('path');
		var userName = process.env['USERPROFILE'].split(path.sep)[2];
		res.render('logindelivery/rec_senha', {validacao: [],usuario:userName});
	});
	application.get('/altsen', function(req, res){
		if (req.session.autenticado){
			application.app.controllers.index.altsen(application, req, res);
		}else{
			application.app.controllers.index.index(application, req, res);
		}
	});
	application.post('/alterarsenha', function(req, res){
		if (req.session.autenticado){
			application.app.controllers.index.alterarSenha(application, req, res);
		}else{
			application.app.controllers.index.index(application, req, res);
		}
	});
	application.post('/checkout', (req, res) => {
// Crea un objeto de preferencia

let preference = {
    items: [
      {
        title:req.body.title,
        unit_price: parseInt(req.body.price),
        quantity: 1,
      }
    ]
  };
  
  mercadopago.preferences.create(preference)
  .then(function(response){
  
    res.redirect(response.body.init_point);
   
  }).catch(function(error){
    console.log(error);
  });
});
	
}