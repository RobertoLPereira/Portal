module.exports = function(application){
	
	application.get('/MaquinasEquipamentos', function(req, res){
		application.app.controllers.customaoobra.maquinasequipamentosferramentas.listarmaquinasequipamentosferramentas(application, req, res);
	});
	application.post('/Customaoobraincmaquinasequipamentosferramentas', function(req, res){
		application.app.controllers.customaoobra.maquinasequipamentosferramentas.create(application, req, res);
	});
	application.get('/Cmoatualizarmaquinasequipamentosferramentas', function(req, res){
		application.app.controllers.customaoobra.maquinasequipamentosferramentas.update(application, req, res);
	});
	application.post('/Customaoobraexcmaquinasequipamentosferramentas', function(req, res){
		application.app.controllers.customaoobra.maquinasequipamentosferramentas.delete(application, req, res);
	});
	application.get('/Customaoobrapesquisarmaquinasequipamentosferramentas', function(req, res){
		application.app.controllers.customaoobra.maquinasequipamentosferramentas.pesquisarmaquinasequipamentosferramentas(application, req, res);
	});
	application.post('/Customaoobrauplmaqequipferramentas', function(req, res){
		application.app.controllers.customaoobra.maquinasequipamentosferramentas.Customaoobrauplmaqequipferramentas(application, req, res);
	});
	application.get('/Importar', function(req, res){
		res.render('customaoobra/importarmaqequipfer');
	});
}