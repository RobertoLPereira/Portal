module.exports = function(application){
	application.get('/CheckList', function(req, res){
		//application.app.controllers.seguranca.CheckList.checklistController.cadCheckList(application, req, res);
		application.app.controllers.requisitos.checklistController.listarChecklists(application, req, res);
	});
	application.post('/incCheckList', function(req, res){
		application.app.controllers.requisitos.checklistController.create(application, req, res);
	});
//Lista todos os CheckList
	application.get('/todosCheckList', function(req, res){
		application.app.controllers.requisitos.checklistController.listarChecklists(application, req, res);
	});
//Pesquisa CheckList pelo id
	application.get('/CheckList/idCheckList', function(req, res){
		application.app.controllers.requisitos.checklistController.findById(application, req, res);
	});
//Atualiza o CheckList
	application.get('/atualizaCheckList', function(req, res){
		application.app.controllers.requisitosche.cklistController.update(application, req, res);
	});
//Exclui um CheckList pelo idCheckList
	application.delete('/excCheckList', function(req, res){
		application.app.controllers.requisitos.checklistController.delete(application, req, res);
	});
	application.get('/excCheckList', function(req, res){
		application.app.controllers.requisitos.checklistController.delete(application, req, res);
	});
	application.post('/validarCheckList', function(req, res){
		application.app.controllers.requisitoschecklistController.validarCheckList(application, req, res);
	});
	application.get('/pesquisarCheckList', function(req, res){
		application.app.controllers.requisitos.checklistController.pesquisarCheckList(application, req, res);
	});
}