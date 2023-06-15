module.exports = function(application){
	
	application.get('/EncargosBasicos', function(req, res){
		application.app.controllers.customaoobra.encargossociaisbasicos.listarencargossociaisbasicos(application, req, res);
	});
	application.post('/Customaoobraincencargosbasicos', function(req, res){
		application.app.controllers.customaoobra.encargossociaisbasicos.create(application, req, res);
	});
	application.get('/Cmoatualizarencargosbasicos', function(req, res){
		application.app.controllers.customaoobra.encargossociaisbasicos.update(application, req, res);
	});
	application.post('/Customaoobraexcencargosbasicos', function(req, res){
		application.app.controllers.customaoobra.encargossociaisbasicos.delete(application, req, res);
	});
	application.get('/Customaoobrapesquisarencargosbasicos', function(req, res){
		application.app.controllers.customaoobra.encargossociaisbasicos.pesquisarencargossociaisbasicos(application, req, res);
	});
}