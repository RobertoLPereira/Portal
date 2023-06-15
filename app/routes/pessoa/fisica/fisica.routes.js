module.exports = function(application){
	application.post('/incpfdelivery', function(req, res){
		application.app.controllers.pessoa.fisica.fisicaController.pfdeliverycreate(application, req, res);
	});
}