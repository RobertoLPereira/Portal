module.exports = function(application){ 
	application.get('/Darciencia', function(req, res){
		application.app.controllers.ordemservicocienciaController.listarOrdemServicoCiencia(application, req, res);
	});
	application.post('/incordemservicociencia', function(req, res){
		application.app.controllers.ordemservicocienciaController.create(application, req, res);
	});
//Exclui um ordemservico pelo idordemservico
	application.post('/excordemservicociencia', function(req, res){
		application.app.controllers.ordemservicocienciaController.delete(application, req, res);
	});
} 
