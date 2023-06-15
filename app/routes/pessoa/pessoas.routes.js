module.exports = function(application){
	application.get('/Pessoas', function(req, res){
		//application.app.controllers.seguranca.pessoas.pessoasController.cadpessoa(application, req, res);
		application.app.controllers.pessoa.pessoasController.listarpessoas(application, req, res);
	});
	application.get('/Consultarpessoa', function(req, res){
		//application.app.controllers.seguranca.pessoas.pessoasController.cadpessoa(application, req, res);
		application.app.controllers.pessoa.pessoasController.fichapessoa(application, req, res);
	});
	application.post('/incpessoa', function(req, res){
		application.app.controllers.pessoa.pessoasController.create(application, req, res);
	});
//Lista todos os pessoas
	application.get('/todospessoa', function(req, res){
		application.app.controllers.pessoa.pessoasController.listarpessoas(application, req, res);
	});
//Pesquisa pessoa pelo id
	application.get('/pessoa/idpessoa', function(req, res){
		application.app.controllers.pessoa.pessoasController.findById(application, req, res);
	});
//Atualiza o pessoa
	application.put('/atualizapessoa', function(req, res){
		application.app.controllers.pessoasController.update(application, req, res);
	});
	application.get('/atualizapessoa', function(req, res){
		application.app.controllers.pessoa.pessoasController.update(application, req, res);
	});
//Exclui um pessoa pelo idpessoa
	application.delete('/excpessoa', function(req, res){
		application.app.controllers.pessoa.pessoasController.delete(application, req, res);
	});
	application.get('/excpessoa', function(req, res){
		application.app.controllers.pessoa.pessoasController.delete(application, req, res);
	});
	application.post('/validarpessoa', function(req, res){
		application.app.controllers.pessoa.pessoasController.validarpessoa(application, req, res);
	});
	application.get('/pesquisarpessoa', function(req, res){
		application.app.controllers.pessoa.pessoasController.pesquisarpessoa(application, req, res);
	});
}