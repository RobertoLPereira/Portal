module.exports = function(application){
	
	application.get('/DemonstrativoDespesas', function(req, res){
		application.app.controllers.customaoobra.demonstrativodedespesas.listardemonstrativodedespesas(application, req, res);
	});
	application.post('/Customaoobraincdespesa', function(req, res){
		application.app.controllers.customaoobra.demonstrativodedespesas.create(application, req, res);
	});
	application.get('/Cmoatualizardespesa', function(req, res){
		application.app.controllers.customaoobra.demonstrativodedespesas.update(application, req, res);
	});
	application.post('/Customaoobraexcdespesa', function(req, res){
		application.app.controllers.customaoobra.demonstrativodedespesas.delete(application, req, res);
	});
	application.get('/Customaoobrapesquisardespesa', function(req, res){
		application.app.controllers.customaoobra.demonstrativodedespesas.pesquisardemonstrativodedespesas(application, req, res);
	});
}