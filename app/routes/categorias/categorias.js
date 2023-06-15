module.exports = function(application){
	application.get('/Categorias', function(req, res){
		application.app.controllers.compreaki.categorias.categ(application, req, res);
	});
}