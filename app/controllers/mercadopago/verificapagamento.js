module.exports.Pagto = function(application, req, res){
	res.render("compreaki/verificapagamentos");
}

module.exports.sair = function(application, req, res){

	req.session.destroy( function(err){
		res.render("index", {validacao: {}});
	});
}