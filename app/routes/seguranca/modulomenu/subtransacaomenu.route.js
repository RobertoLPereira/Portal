module.exports = function(application){
	application.get('/SubTransacoes', function(req, res){		
		application.app.controllers.subtransacaomenuController.listarSubTransacoes(application, req, res);
	});
	application.post('/incsubtransacao', function(req, res){
		application.app.controllers.subtransacaomenuController.create(application, req, res);
	});
//Lista todos os transacao
	application.get('/todassubtransacao', function(req, res){
		application.app.controllers.subtransacaomenuController.listarSubTransacoes(application, req, res);
	});
//Pesquisa transacao pelo id
	application.get('/subtransacao/idtransacao', function(req, res){
		application.app.controllers.subtransacaomenuController.findById(application, req, res);
	});
//Atualiza o transacao
	application.get('/atualizasubtransacao', function(req, res){
		application.app.controllers.subtransacaomenuController.update(application, req, res);
	});
//Exclui um transacao pelo idtransacao
	application.delete('/excsubtransacao', function(req, res){
		application.app.controllers.subtransacaomenuController.delete(application, req, res);
	});
	application.get('/excsubtransacao', function(req, res){
		application.app.controllers.subtransacaomenuController.delete(application, req, res);
	});
	application.post('/validarsubtransacao', function(req, res){
		application.app.controllers.subtransacaomenuController.validarsubtransacao(application, req, res);
	});
	application.get('/pesquisarsubtransacao', function(req, res){
		application.app.controllers.subtransacaomenuController.pesquisarsubtransacao(application, req, res);
	});
}