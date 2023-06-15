module.exports = function(application){
	
	application.get('/HorasImprodutivas', function(req, res){
		application.app.controllers.customaoobra.horasanuaispagas.listarhorasanuaispagas(application, req, res);
	});
	application.post('/Customaoobrainchorasanuaispagas', function(req, res){
		application.app.controllers.customaoobra.horasanuaispagas.create(application, req, res);
	});
	application.get('/Cmoatualizarhorasanuaispagas', function(req, res){
		application.app.controllers.customaoobra.horasanuaispagas.update(application, req, res);
	});
	application.post('/Customaoobraexchorasanuaispagas', function(req, res){
		application.app.controllers.customaoobra.horasanuaispagas.delete(application, req, res);
	});
	application.get('/Customaoobrapesquisarhorasanuaispagas', function(req, res){
		application.app.controllers.customaoobra.horasanuaispagas.pesquisarhorasanuaispagas(application, req, res);
	});
}