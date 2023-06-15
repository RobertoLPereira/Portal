module.exports = function(application){
	
	application.get('/TipodeInvestimento', function(req, res){
		application.app.controllers.customaoobra.tipodeinvestimento.listartipodeinvestimento(application, req, res);
	});
	application.post('/Customaoobrainctipodeinvestimento', function(req, res){
		application.app.controllers.customaoobra.tipodeinvestimento.create(application, req, res);
	});
	application.get('/Cmoatualizartipodeinvestimento', function(req, res){
		application.app.controllers.customaoobra.tipodeinvestimento.update(application, req, res);
	});
	application.delete('/Customaoobraexctipodeinvestimento', function(req, res){
		application.app.controllers.customaoobra.tipodeinvestimento.delete(application, req, res);
	});
	application.post('/Customaoobravalidartipodeinvestimento', function(req, res){
		application.app.controllers.customaoobra.tipodeinvestimento.validartipodeinvestimento(application, req, res);
	});
}