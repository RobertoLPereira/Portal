module.exports.categ = function(application, req, res){
	res.render("categorias/categoria");
	if(req.session.autorizado){
		res.render("categorias/categoria");
	} else {
		res.send('Usuário precisa fazer login');
	}
}

module.exports.sair = function(application, req, res){

	req.session.destroy( function(err){
		res.render("index", {validacao: {}});
	});
}