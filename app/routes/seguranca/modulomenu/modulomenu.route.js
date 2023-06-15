module.exports = function(application){
	application.get('/Menus', function(req, res){
		//application.app.controllers.seguranca.modulomenu.modulomenuController.cadmodulomenu(application, req, res);
		application.app.controllers.modulomenuController.listarModuloMenus(application, req, res);
	});
	application.post('/incmodulomenu', function(req, res){
		application.app.controllers.modulomenuController.create(application, req, res);
	});
//Lista todos os modulomenu
	application.get('/todosmodulomenu', function(req, res){
		application.app.controllers.modulomenuController.listarModuloMenus(application, req, res);
	});
//Pesquisa modulomenu pelo id
	application.get('/modulomenu/idmodulomenu', function(req, res){
		application.app.controllers.modulomenuController.findById(application, req, res);
	});
//Atualiza o modulomenu
	application.get('/atualizamodulomenu', function(req, res){
		application.app.controllers.modulomenuController.update(application, req, res);
	});
//Exclui um modulomenu pelo idmodulomenu
	application.delete('/excmodulomenu', function(req, res){
		application.app.controllers.modulomenuController.delete(application, req, res);
	});
	application.get('/excmodulomenu', function(req, res){
		application.app.controllers.modulomenuController.delete(application, req, res);
	});
	application.post('/validarmodulomenu', function(req, res){
		application.app.controllers.modulomenuController.validarmodulomenu(application, req, res);
	});
	application.get('/pesquisarmodulomenu', function(req, res){
		application.app.controllers.modulomenuController.pesquisarmodulomenu(application, req, res);
	});
}