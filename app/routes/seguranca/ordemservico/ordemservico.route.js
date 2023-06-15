module.exports = function(application){
	application.get('/ordemservico', function(req, res){
		application.app.controllers.ordemservicoController.listarOrdemServico(application, req, res);
	});
	application.post('/incordemservico', function(req, res){
		application.app.controllers.ordemservicoController.create(application, req, res);
	});
//Lista todos os ordemservico
	application.get('/todosordemservico', function(req, res){
		application.app.controllers.ordemservicoController.listarOrdemServico(application, req, res);
	});
//Pesquisa ordemservico pelo id
	application.get('/ordemservico/idordemservico', function(req, res){
		application.app.controllers.ordemservicoController.findById(application, req, res);
	});
//Atualiza o ordemservico
	application.put('/atualizaordemservico', function(req, res){
		application.app.controllers.ordemservicoController.update(application, req, res);
	});
//Exclui um ordemservico pelo idordemservico
	application.delete('/excordemservico', function(req, res){
		application.app.controllers.ordemservicoController.delete(application, req, res);
	});
	application.post('/validarordemservico', function(req, res){
		application.app.controllers.ordemservicoController.validarordemservico(application, req, res);
	});
	application.get('/pesquisarordemservico', function(req, res){
		application.app.controllers.ordemservicoController.pesquisarordemservico(application, req, res);
	});
}