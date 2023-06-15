module.exports = function(application){
	application.get('/Sistemas', function(req, res){
		//application.app.controllers.seguranca.sistemas.sistemasController.cadsistema(application, req, res);
		application.app.controllers.sistemasController.listarsistemas(application, req, res);
	});
	application.post('/incsistema', function(req, res){
		application.app.controllers.sistemasController.create(application, req, res);
	});
//Lista todos os sistemas
	application.get('/todossistema', function(req, res){
		application.app.controllers.sistemasController.listarsistemas(application, req, res);
	});
//Pesquisa sistema pelo id
	application.get('/sistema/idsistema', function(req, res){
		application.app.controllers.sistemasController.findById(application, req, res);
	});
//Atualiza o sistema
	application.put('/atualizasistema', function(req, res){
		application.app.controllers.sistemasController.update(application, req, res);
	});
	application.get('/atualizasistema', function(req, res){
		application.app.controllers.sistemasController.update(application, req, res);
	});
//Exclui um sistema pelo idsistema
	application.delete('/excsistema', function(req, res){
		application.app.controllers.sistemasController.delete(application, req, res);
	});
	application.get('/excsistema', function(req, res){
		application.app.controllers.sistemasController.delete(application, req, res);
	});
	application.post('/validarSistema', function(req, res){
		application.app.controllers.sistemasController.validarSistema(application, req, res);
	});
	application.get('/pesquisarsistema', function(req, res){
		application.app.controllers.sistemasController.pesquisarsistema(application, req, res);
	});
}