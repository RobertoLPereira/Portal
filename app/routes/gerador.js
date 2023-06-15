module.exports = function(application){
	application.get('/gerador', function(req, res){
		application.app.controllers.geradorController.index(application, req, res);
	});
    application.get('/getfindAllDb', function(req, res){
		application.app.controllers.geradorController.getfindAllDb(application, req, res);
	});
}