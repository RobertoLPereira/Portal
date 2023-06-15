module.exports = function(application){
	
	application.get('/EncargosImpostos', function(req, res){
		application.app.controllers.customaoobra.demonstrativoencargosimpostos.listardemonstrativoencargosimpostos(application, req, res);
	});
	application.post('/Customaoobraincencargosimpostos', function(req, res){
		application.app.controllers.customaoobra.demonstrativoencargosimpostos.create(application, req, res);
	});
	application.get('/Cmoatualizarencargosimpostos', function(req, res){
		application.app.controllers.customaoobra.demonstrativoencargosimpostos.update(application, req, res);
	});
	application.post('/Customaoobraexcencargosimpostos', function(req, res){
		application.app.controllers.customaoobra.demonstrativoencargosimpostos.delete(application, req, res);
	});
	application.get('/Customaoobrapesquisarencargosimpostos', function(req, res){
		application.app.controllers.customaoobra.demonstrativoencargosimpostos.pesquisardemonstrativoencargosimpostos(application, req, res);
	});
}