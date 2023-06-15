module.exports = function(application){
	application.get('/VerPgto', function(req, res){
		application.app.controllers.mercadopago.verificapagamento.Pagto(application, req, res);
	});
	application.get('/PagarMP', function(req, res){
		var path = require('path');
		var userName = process.env['USERPROFILE'].split(path.sep)[2];
		res.render('mercadopago/pagamento_cartao', {validacao: [],usuario:userName});
	});
}