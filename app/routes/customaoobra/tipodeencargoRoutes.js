module.exports = function(application){
	
	application.get('/TipodeEncargo', function(req, res){
		application.app.controllers.customaoobra.tipodeencargo.listartipodeencargo(application, req, res);
	});
	application.post('/Customaoobrainctipodeencargo', function(req, res){
		application.app.controllers.customaoobra.tipodeencargo.create(application, req, res);
	});
	application.get('/Cmoatualizartipodeencargo', function(req, res){
		application.app.controllers.customaoobra.tipodeencargo.update(application, req, res);
	});
	application.delete('/Customaoobraexctipodeencargo', function(req, res){
		application.app.controllers.customaoobra.tipodeencargo.delete(application, req, res);
	});
	application.post('/Customaoobravalidartipodeencargo', function(req, res){
		application.app.controllers.customaoobra.tipodeencargo.validartipodeencargo(application, req, res);
	});
}