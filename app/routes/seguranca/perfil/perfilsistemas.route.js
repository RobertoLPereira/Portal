module.exports = function(application){
	application.get('/PerfilSistema', function(req, res){
		//application.app.controllers.seguranca.perfil.perfilsistemasController.cadperfil(application, req, res);
		application.app.controllers.perfilsistemasController.listarPerfisSistemas(application, req, res);
	});
	application.post('/incperfilsistema', function(req, res){
		application.app.controllers.perfilsistemasController.create(application, req, res);
	});
//Lista todos os perfil
	application.get('/todosperfilsistema', function(req, res){
		application.app.controllers.perfilsistemasController.listarPerfisSistemas(application, req, res);
	});
//Pesquisa perfil pelo id
	application.get('/perfil/idperfilsistema', function(req, res){
		application.app.controllers.perfilsistemasController.findById(application, req, res);
	});
//Atualiza o perfil
	application.get('/atualizaperfilsistema', function(req, res){
		application.app.controllers.perfilsistemasController.update(application, req, res);
	});
//Exclui um perfil pelo idperfil
	application.delete('/excperfilsistema', function(req, res){
		application.app.controllers.perfilsistemasController.delete(application, req, res);
	});
	application.get('/excperfilsistema', function(req, res){
		application.app.controllers.perfilsistemasController.delete(application, req, res);
	});
	application.post('/validarperfilsistema', function(req, res){
		application.app.controllers.perfilsistemasController.validarperfilsistema(application,req,res);
	});
	application.get('/pesquisarperfilsistema', function(req, res){
		application.app.controllers.perfilsistemasController.pesquisarperfilsistema(application, req, res);
	});
}