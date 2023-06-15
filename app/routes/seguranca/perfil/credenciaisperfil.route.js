module.exports = function(application){
	application.get('/Credenciaisperfil', function(req, res){
		//application.app.controllers.seguranca.perfil.credenciaisperfilController.cadperfil(application, req, res);
		application.app.controllers.credenciaisperfilController.listarCredenciaisPerfil(application, req, res);
	});
	application.post('/inccredenciaisperfil', function(req, res){
		application.app.controllers.credenciaisperfilController.create(application, req, res);
	});
//Lista todos os perfil
	application.get('/todoscredenciaisperfil', function(req, res){
		application.app.controllers.credenciaisperfilController.listarCredenciaisPerfil(application, req, res);
	});
//Pesquisa perfil pelo id
	application.get('/perfil/idcredenciaisperfil', function(req, res){
		application.app.controllers.credenciaisperfilController.findById(application, req, res);
	});
//Atualiza o perfil
	application.get('/atualizacredenciaisperfil', function(req, res){
		application.app.controllers.credenciaisperfilController.update(application, req, res);
	});
//Exclui um perfil pelo idperfil
	application.delete('/exccredenciaisperfil', function(req, res){
		application.app.controllers.credenciaisperfilController.delete(application, req, res);
	});
	application.get('/exccredenciaisperfil', function(req, res){
		application.app.controllers.credenciaisperfilController.delete(application, req, res);
	});
	application.post('/validarcredenciaisperfil', function(req, res){
		application.app.controllers.credenciaisperfilController.validarcredenciaisperfil(application, req, res);
	});
	application.get('/pesquisarcredenciaisperfil', function(req, res){
		application.app.controllers.credenciaisperfilController.pesquisarcredenciaisperfil(application, req, res);
	});
}