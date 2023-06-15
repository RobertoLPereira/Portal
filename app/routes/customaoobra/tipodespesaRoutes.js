module.exports = function(application){
	
	application.get('/TipoDespesas', function(req, res){
		application.app.controllers.customaoobra.tipodespesa.listartipodespesa(application, req, res);
	});
	application.post('/Customaoobrainctipodespesa', function(req, res){
		application.app.controllers.customaoobra.tipodespesa.create(application, req, res);
	});
	application.get('/Cmoatualizartipodespesa', function(req, res){
		application.app.controllers.customaoobra.tipodespesa.update(application, req, res);
	});
	application.delete('/Customaoobraexctipodespesa', function(req, res){
		application.app.controllers.customaoobra.tipodespesa.delete(application, req, res);
	});
	application.post('/Customaoobravalidartipodespesa', function(req, res){
		application.app.controllers.customaoobra.tipodespesa.validartipodespesa(application, req, res);
	});
}