module.exports = function(application){
	application.get('/Transacoes', function(req, res){
		//application.app.controllers.seguranca.transacoes.transacoesController.cadtransacao(application, req, res);
		application.app.controllers.transacoesController.listarTransacoes(application, req, res);
	});
	application.post('/inctransacao', function(req, res){
		application.app.controllers.transacoesController.create(application, req, res);
	});
//Lista todos os transacao
	application.get('/todastransacao', function(req, res){
		application.app.controllers.transacoesController.listarTransacoes(application, req, res);
	});
//Pesquisa transacao pelo id
	application.get('/transacao/idtransacao', function(req, res){
		application.app.controllers.transacoesController.findById(application, req, res);
	});
//Atualiza o transacao
	application.post('/atualizatransacao', function(req, res){
		application.app.controllers.transacoesController.update(application, req, res);
	});
//Exclui um transacao pelo idtransacao
	application.delete('/exctransacao', function(req, res){
		application.app.controllers.transacoesController.delete(application, req, res);
	});
	application.get('/exctransacao', function(req, res){
		application.app.controllers.transacoesController.delete(application, req, res);
	});
	application.post('/validartransacao', function(req, res){
		application.app.controllers.transacoesController.validartransacao(application, req, res);
	});
	application.get('/pesquisartransacao', function(req, res){
		application.app.controllers.transacoesController.pesquisartransacao(application, req, res);
	});
}