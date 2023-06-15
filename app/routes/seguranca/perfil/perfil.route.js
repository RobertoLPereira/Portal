module.exports = function(application){
	application.get('/Perfil', function(req, res){
		//application.app.controllers.seguranca.perfil.perfisController.cadperfil(application, req, res);
		application.app.controllers.perfisController.listarPerfis(application, req, res);
	});
	application.post('/incperfil', function(req, res){
		application.app.controllers.perfisController.create(application, req, res);
	});
//Lista todos os perfil
	application.get('/todosperfil', function(req, res){
		application.app.controllers.perfisController.listarPerfis(application, req, res);
	});
//Pesquisa perfil pelo id
	application.get('/perfil/idperfil', function(req, res){
		application.app.controllers.perfisController.findById(application, req, res);
	});
//Atualiza o perfil
	application.get('/atualizaperfil', function(req, res){
		application.app.controllers.perfisController.update(application, req, res);
	});
//Exclui um perfil pelo idperfil
	application.delete('/excperfil', function(req, res){
		application.app.controllers.perfisController.delete(application, req, res);
	});
	application.get('/excperfil', function(req, res){
		application.app.controllers.perfisController.delete(application, req, res);
	});
	application.post('/validarperfil', function(req, res){
		application.app.controllers.perfisController.validarperfil(application, req, res);
	});
	application.get('/pesquisarperfil', function(req, res){
		application.app.controllers.perfisController.pesquisarperfil(application, req, res);
	});
}