// Post a pessoa
module.exports.pfdeliverycreate = function(application, req, res){	
	// Save to PostgreSQL database
	var dadosForm = req.body;
	
	var wpessoa = {
		idpessoa:0,
		nome : req.body.nomeusuario,
		identificacaofiscal : req.body.identificacaofiscal,
		email : req.body.usuario,
		idnatrelacnegocio : req.body.idnatrelacnegocio,
		status : 0,
		senha : req.body.senha
		};
	
	req.assert('nomeusuario', 'Nome completo é um dado obrigatório. Informe por favor!').notEmpty();
	req.assert('usuario', 'Codigo de Usuario é um dado obrigatório. Informe por favor!').notEmpty();
	req.assert('identificacaofiscal', 'Cpf/CNPJ é um dado obrigatório. Informe por favor!').notEmpty();
	req.assert('senha', 'Senha é um dado obrigatório. Informe por favor!').notEmpty();
	req.assert('senha2', 'Confirmação da senha é um dado obrigatório. Informe por favor!').notEmpty();
	if(req.body.senha.notEmpty && req.body.senha != req.body.senha2){
		req.assert('senha3', 'Confirmação da senha não confere com a senha. Informe igual a senha por favor!').notEmpty();
	}

	var erros = req.validationErrors();
	
	if(erros){
		console.log(erros);
		res.render("logindelivery/cad_login", {validacao:erros,Usuario:wpessoa,msg:null});
		return;
	}
	
	const http = require('http')

	const data = JSON.stringify(wpessoa)

	const options = {
	  hostname: 'localhost',
	  port: 8081,
	  path: '/api/inc/pfdelivery',
	  method: 'POST',
	  headers: {
	    'Content-Type': 'application/json',
	    'Content-Length': data.length
	  }
	}
	if (dadosForm.idpessoa > 0){
		options.path = "/api/alt/pfdelivery";
		options.method= "put";
		console.log("vou alterar ")
		console.log(data);
		console.log(options);
	}else{
		console.log("vou incluir usuario")
		console.log(req.body)
	}

	const wreq = http.request(options, wres => {
	 // console.log(`statusCode: ${res.statusCode}`)
	  wres.on('data', d => {
	  	 var wdata = JSON.parse(d);
	  	console.log(wdata);
	  	//res.status(200).json({idpessoa:dadosForm.idpessoa,nomepessoa:dadosForm.nomepessoa,sigla:dadosForm.sigla,versao:dadosForm.versao,url:dadosForm.url,status:dadosForm.status});
	    res.render('logindelivery/cad_login', {validacao:[],Usuario:{idpessoa:wdata.idpessoa,nomeusuario:dadosForm.nomeusuario,usuario:dadosForm.usuario,identificacaofiscal:dadosForm.identificacaofiscal},msg:"Usuario cadastrado com sucesso"});
	  })
	})

	wreq.on('error', error => {
	  console.error(error)
	})

	wreq.write(data)
	wreq.end()

};