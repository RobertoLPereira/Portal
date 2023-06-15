module.exports = function(application){
	
	application.get('/Demonstrativos', function(req, res){
		application.app.controllers.customaoobra.demonstrativos.listar(application, req, res);
	});
	application.post('/Quadro1', function(req, res){
		application.app.controllers.customaoobra.demonstrativos.mostrarQuadro(application, req, res);
	});/*
	application.get('/Cmoatualizarcategoria', function(req, res){
		application.app.controllers.customaoobra.categorias.update(application, req, res);
	});
	application.delete('/Customaoobraexccategoria', function(req, res){
		application.app.controllers.customaoobra.categorias.delete(application, req, res);
	});
	application.post('/Customaoobravalidarcategoria', function(req, res){
		application.app.controllers.customaoobra.categorias.validarcategoria(application, req, res);
	});*/
}