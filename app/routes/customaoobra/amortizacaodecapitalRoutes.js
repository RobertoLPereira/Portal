module.exports = function(application){
	
	application.get('/Amortizacaodecapital', function(req, res){
		application.app.controllers.customaoobra.amortizacaodecapital.listaramortizacoes(application, req, res);
	});
	application.post('/Customaoobraincamortizacao', function(req, res){
		application.app.controllers.customaoobra.amortizacaodecapital.create(application, req, res);
	});
	application.get('/Cmoatualizaramortizacao', function(req, res){
		application.app.controllers.customaoobra.amortizacaodecapital.update(application, req, res);
	});
	application.delete('/Customaoobraexcamortizacao', function(req, res){
		application.app.controllers.customaoobra.amortizacaodecapital.delete(application, req, res);
	});
	application.post('/Customaoobravalidaramortizacao', function(req, res){
		application.app.controllers.customaoobra.amortizacaodecapital.validaramortizacao(application, req, res);
	});
	application.get('/ImporAmortizacaodecapital', function(req, res){
		application.app.controllers.customaoobra.amortizacaodecapital.cadamortizacaodecapital(application, req, res);
	});
}