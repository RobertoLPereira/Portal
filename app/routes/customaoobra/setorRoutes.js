module.exports = function(application){
	
	application.get('/Setores', function(req, res){
		application.app.controllers.customaoobra.setor.listarsetor(application, req, res);
	});
	application.post('/Customaoobraincsetor', function(req, res){
		application.app.controllers.customaoobra.setor.create(application, req, res);
	});
	application.get('/Cmoatualizarsetor', function(req, res){
		application.app.controllers.customaoobra.setor.update(application, req, res);
	});
	application.delete('/Customaoobraexcsetor', function(req, res){
		application.app.controllers.customaoobra.setor.delete(application, req, res);
	});
	application.post('/Customaoobravalidarsetor', function(req, res){
		application.app.controllers.customaoobra.setor.validarsetor(application, req, res);
	});
}