module.exports = function(application){
	
	application.get('/Categorias', function(req, res){
		application.app.controllers.customaoobra.categorias.listarcategorias(application, req, res);
	});
	application.post('/Customaoobrainccategoria', function(req, res){
		application.app.controllers.customaoobra.categorias.create(application, req, res);
	});
	application.get('/Cmoatualizarcategoria', function(req, res){
		application.app.controllers.customaoobra.categorias.update(application, req, res);
	});
	application.delete('/Customaoobraexccategoria', function(req, res){
		application.app.controllers.customaoobra.categorias.delete(application, req, res);
	});
	application.post('/Customaoobravalidarcategoria', function(req, res){
		application.app.controllers.customaoobra.categorias.validarcategoria(application, req, res);
	});
}