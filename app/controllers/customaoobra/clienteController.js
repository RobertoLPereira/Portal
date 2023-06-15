module.exports.cadcliente = function(application, req, res){
	
	res.render('customaoobra/cliente', {validacao:[],Clientes:[],msg:null});
}
module.exports.listarclientes = function(application, req, res){
	//console.log(req)
	//const data = JSON.stringify(req.query)
	const http = require('http')
	const options = {
	  hostname: 'localhost',
	  port: 4040,
	  path:'/Clientes',
	  method: 'GET',
	  headers: {'Accept' : 'application/json'}
	}

	const wreq = http.request(options, wres => {
	 // console.log(`statusCode: ${wres.statusCode}`)

	  wres.on('data', d => {
	  	 var wdata = JSON.parse(d);
	  	 res.render('customaoobra/cliente', {validacao:[],Clientes:wdata,msg:null});
		})
	  })
		wreq.on('error', error => {
		  console.error(error)
		})
	//wreq.write(data)
	wreq.end()
}
module.exports.pesquisarcliente = function(application, req, res){
	var dadosForm = req.query
	const data = JSON.stringify(req.query)
	//console.log(req)
	const http = require('http')
	const options = {
	  hostname: 'localhost',
	  port: 4040,
	  path:'/api/pesquisarcliente?nomecliente='+dadosForm.nomecliente.replace(" ","%20")+"&status="+dadosForm.status,
	  method: 'GET',
	  headers: {'Accept' : 'application/json',
	  			'Content-type' : 'application/json'}
	}
	//console.log(options)
	const wreq = http.request(options, wres => {
	  //console.log(`statusCode: ${wres.statusCode}`)

	  wres.on('data', d => {
	  	 var wdata = JSON.parse(d);
	  	 console.log(wdata)
	  	 res.render('customaoobra/cliente', {validacao:[],clientes:wdata,msg:null});
		})
	  })
		wreq.on('error', error => {
		  console.error(error)
		})
	//wreq.write(data)
	wreq.end()
}
// Post a cliente
module.exports.create = function(application, req, res){	
	// Save to PostgreSQL database
	var dadosForm = req.body;
	console.log(req);
	var clientes = {
			"nomedaempresa": req.body.nomedaempresa,
			"primeironomedocontato": req.body.primeironomedocontato,
			"sobrenomedocontato": req.body.sobrenomedocontato,
			"empresaoudepartamento": req.body.empresaoudepartamento,
			"enderecodecobranca": req.body.enderecodecobranca,
			"cidade": req.body.cidade,
			"estadoouprovincia": req.body.estadoouprovincia,
			"cep": req.body.cep,
			"pais": req.body.pais,
			"titulodocontato": req.body.titulodocontato,
			"ndotelefone": req.body.ndotelefone,
			"ramal": req.body.ramal,
			"fax": req.body.fax,
			"email": req.body.email,
			"observacoes": req.query.observacoes
		}
		//console.log(clientes)
		//req.assert('empresa', 'empresa é um dado obrigatório. Informe por favor!').notEmpty();
		req.assert('nomedaempresa', 'nome da empresa é um dado obrigatório. Informe por favor!').notEmpty();
		req.assert('primeironomedocontato', 'primeiro nome do contato é um dado obrigatório. Informe por favor!').notEmpty();
		req.assert('sobrenomedocontato', 'sobre nome do contato é um dado obrigatório. Informe por favor!').notEmpty();
		req.assert('empresaoudepartamento', 'empresa ou departamento é um dado obrigatório. Informe por favor!').notEmpty();
		req.assert('enderecodecobranca', 'endereco de cobranca é um dado obrigatório. Informe por favor!').notEmpty();
		req.assert('cidade', 'cidade é um dado obrigatório. Informe por favor!').notEmpty();
		req.assert('estadoouprovincia', 'estado ou provincia é um dado obrigatório. Informe por favor!').notEmpty();
		req.assert('cep', 'cep é um dado obrigatório. Informe por favor!').notEmpty();
		req.assert('pais', 'pais é um dado obrigatório. Informe por favor!').notEmpty();
		req.assert('titulodocontato', 'cargo do contato é um dado obrigatório. Informe por favor!').notEmpty();
		req.assert('ndotelefone', 'número do telefone é um dado obrigatório. Informe por favor!').notEmpty();
		//req.assert('ramal', 'ramal é um dado obrigatório. Informe por favor!').notEmpty();
		//req.assert('fax', 'fax é um dado obrigatório. Informe por favor!').notEmpty();
		req.assert('email', 'email é um dado obrigatório. Informe por favor!').notEmpty();
		//req.assert('observacoes', 'observacoes é um dado obrigatório. Informe por favor!').notEmpty();
			
	var erros = req.validationErrors();
	
	if(erros){
		//console.log(erros);
		res.render("customaoobra/cliente", {validacao:erros,Clientes:clientes,msg:null});
		return;
	}
	
	//var sql = "Insert Into cliente(nomecliente, sigla, versao, url) values ('"+req.body.nomecliente+"','"+req.body.sigla+"','"+req.body.versao+"','"+req.body.url+"')";
	const http = require('http')

	const data = JSON.stringify(clientes)
	
	//console.log(req);
	const options = {
	  hostname: 'localhost',
	  port: 4040,
	  path: '/Clientes',
	  method: 'post',
	  headers: {
	    'Content-Type': 'application/json',
	    'Content-Length': data.length
	  }
	}
	
		console.log("vou incluir ")
		console.log(data)
	
	const wreq = http.request(options, wres => {
	 // console.log(`statusCode: ${res.statusCode}`)
	  wres.on('data', d => {
	  	res.redirect('/CustomaoobraClientes');
	    //res.render('customaoobra/cliente', {validacao:[],Clientes:data,msg:'Incluído com sucesso!'});
	  })
	})

	wreq.on('error', error => {
	  console.error(error)
	})

	wreq.write(data)
	wreq.end()
};
// FETCH All cliente
module.exports.findAll = function (application,req, res)  {	
	
};
// Find a cliente by Id
module.exports.findById = function (application,req, res)  {	
		
};
// Update a cliente
// Put a cliente
module.exports.validarcliente = function(application, req, res){
	//console.log(req.body)
	var dadosForm = req.body;
	
	var clientes = {
			empresa: req.body.empresa,
			nomedaempresa: req.body.nomedaempresa,
			primeironomedocontato: req.body.primeironomedocontato,
			sobrenomedocontato: req.body.sobrenomedocontato,
			empresaoudepartamento: req.body.empresaoudepartamento,
			enderecodecobranca: req.body.enderecodecobranca,
			cidade: req.body.cidade,
			estadoouprovincia: req.body.estadoouprovincia,
			cep: req.body.cep,
			pais: req.body.pais,
			titulodocontato: req.body.titulodocontato,
			ndotelefone: req.body.ndotelefone,
			ramal: req.body.ramal,
			fax: req.body.fax,
			email: req.body.email,
			observacoes: req.body.observacoes,
			upsize_ts: req.body.upsize_ts
		}
		req.assert('empresa', 'empresa é um dado obrigatório. Informe por favor!').notEmpty();
		req.assert('nomedaempresa', 'nome da empresa é um dado obrigatório. Informe por favor!').notEmpty();
		req.assert('primeironomedocontato', 'primeiro nome do contato é um dado obrigatório. Informe por favor!').notEmpty();
		req.assert('sobrenomedocontato', 'sobre nome do contato é um dado obrigatório. Informe por favor!').notEmpty();
		req.assert('empresaoudepartamento', 'empresa ou departamento é um dado obrigatório. Informe por favor!').notEmpty();
		req.assert('enderecodecobranca', 'endereco de cobranca é um dado obrigatório. Informe por favor!').notEmpty();
		req.assert('cidade', 'cidade é um dado obrigatório. Informe por favor!').notEmpty();
		req.assert('estadoouprovincia', 'estado ou provincia é um dado obrigatório. Informe por favor!').notEmpty();
		req.assert('cep', 'cep é um dado obrigatório. Informe por favor!').notEmpty();
		req.assert('pais', 'pais é um dado obrigatório. Informe por favor!').notEmpty();
		req.assert('titulodocontato', 'cargo do contato é um dado obrigatório. Informe por favor!').notEmpty();
		req.assert('ndotelefone', 'número do telefone é um dado obrigatório. Informe por favor!').notEmpty();
		//req.assert('ramal', 'ramal é um dado obrigatório. Informe por favor!').notEmpty();
		//req.assert('fax', 'fax é um dado obrigatório. Informe por favor!').notEmpty();
		req.assert('email', 'email é um dado obrigatório. Informe por favor!').notEmpty();
		//req.assert('observacoes', 'observacoes é um dado obrigatório. Informe por favor!').notEmpty();
		//req.assert('upsize_ts', 'upsize_ts é um dado obrigatório. Informe por favor!').notEmpty();
	
	var erros = req.validationErrors();
	
	if(erros){
		//console.log(erros);
		res.render("customaoobra/cliente", {validacao:erros,Clientes:clientes,msg:null});
		return;
	}
	
	//var sql = "Insert Into cliente(nomecliente, sigla, versao, url) values ('"+req.body.nomecliente+"','"+req.body.sigla+"','"+req.body.versao+"','"+req.body.url+"')";
	const http = require('http')

	const data = JSON.stringify(clientes)

	const options = {
	  hostname: 'localhost',
	  port: 4040,
	  path: '/api/inc/cliente',
	  method: 'POST',
	  headers: {
	    'Content-Type': 'application/json',
	    'Content-Length': data.length
	  }
	}
	if (dadosForm.idcliente > 0){
		options.path = "/api/atualiza/cliente";
		options.method= "put";
		console.log("vou alterar ")
		console.log(data);
		console.log(options);
	}else{
		console.log("vou incluir ")
		console.log(data)
	}

	const wreq = http.request(options, wres => {
	 // console.log(`statusCode: ${res.statusCode}`)
	  wres.on('data', d => {
	  	//console.log(d)
	  	res.redirect('/CustomaoobraClientes');
	    //res.render('customaoobra/cliente', {validacao:[],Clientes:clientes,msg:'Inclusao com sucesso!'});
	  })
	})

	wreq.on('error', error => {
	  console.error(error)
	})

	wreq.write(data)
	wreq.end()
}
module.exports.update = function(application, req, res){	
	// Save to PostgreSQL database
	var dadosForm = req.query;
	//console.log(req);
	var clientes = {
			"empresa": parseInt(req.query.empresa),
			"nomedaempresa": req.query.nomedaempresa,
			"primeironomedocontato": req.query.primeironomedocontato,
			"sobrenomedocontato": req.query.sobrenomedocontato,
			"empresaoudepartamento": req.query.empresaoudepartamento,
			"enderecodecobranca": req.query.enderecodecobranca,
			"cidade": req.query.cidade,
			"estadoouprovincia": req.query.estadoouprovincia,
			"cep": req.query.cep,
			"pais": req.query.pais,
			"titulodocontato": req.query.titulodocontato,
			"ndotelefone": req.query.ndotelefone,
			"ramal": req.query.ramal,
			"fax": req.query.fax,
			"email": req.query.email,
			"observacoes": req.query.observacoes
		}
		//console.log(clientes)
		req.assert('empresa', 'empresa é um dado obrigatório. Informe por favor!').notEmpty();
		req.assert('nomedaempresa', 'nome da empresa é um dado obrigatório. Informe por favor!').notEmpty();
		req.assert('primeironomedocontato', 'primeiro nome do contato é um dado obrigatório. Informe por favor!').notEmpty();
		req.assert('sobrenomedocontato', 'sobre nome do contato é um dado obrigatório. Informe por favor!').notEmpty();
		req.assert('empresaoudepartamento', 'empresa ou departamento é um dado obrigatório. Informe por favor!').notEmpty();
		req.assert('enderecodecobranca', 'endereco de cobranca é um dado obrigatório. Informe por favor!').notEmpty();
		req.assert('cidade', 'cidade é um dado obrigatório. Informe por favor!').notEmpty();
		req.assert('estadoouprovincia', 'estado ou provincia é um dado obrigatório. Informe por favor!').notEmpty();
		req.assert('cep', 'cep é um dado obrigatório. Informe por favor!').notEmpty();
		req.assert('pais', 'pais é um dado obrigatório. Informe por favor!').notEmpty();
		req.assert('titulodocontato', 'cargo do contato é um dado obrigatório. Informe por favor!').notEmpty();
		req.assert('ndotelefone', 'número do telefone é um dado obrigatório. Informe por favor!').notEmpty();
		//req.assert('ramal', 'ramal é um dado obrigatório. Informe por favor!').notEmpty();
		//req.assert('fax', 'fax é um dado obrigatório. Informe por favor!').notEmpty();
		req.assert('email', 'email é um dado obrigatório. Informe por favor!').notEmpty();
		//req.assert('observacoes', 'observacoes é um dado obrigatório. Informe por favor!').notEmpty();
			
	var erros = req.validationErrors();
	
	if(erros){
		//console.log(erros);
		res.render("customaoobra/cliente", {validacao:erros,Clientes:clientes,msg:null});
		return;
	}
	
	//var sql = "Insert Into cliente(nomecliente, sigla, versao, url) values ('"+req.body.nomecliente+"','"+req.body.sigla+"','"+req.body.versao+"','"+req.body.url+"')";
	const http = require('http')

	const data = JSON.stringify(clientes)
	
	//console.log(req);
	const options = {
	  hostname: 'localhost',
	  port: 4040,
	  path: '/Cliente',
	  method: 'put',
	  headers: {
	    'Content-Type': 'application/json',
	    'Content-Length': data.length
	  }
	}
	if (clientes.empresa > 0){
		options.path = "/Cliente/"+clientes.empresa;
		options.method= "put";
		console.log("vou alterar ")
		console.log(data);
		console.log(options);
	}else{
		console.log("vou incluir ")
		console.log(data)
	}

	const wreq = http.request(options, wres => {
	 // console.log(`statusCode: ${res.statusCode}`)
	  wres.on('data', d => {
	  	res.redirect('/CustomaoobraClientes');
	    //res.render('customaoobra/cliente', {validacao:[],Clientes:[],msg:'Alterado com sucesso!'});
	  })
	})

	wreq.on('error', error => {
	  console.error(error)
	})

	wreq.write(data)
	wreq.end()
};

// Delete a cliente by Id
module.exports.delete = function (application,req, res) {
	
	const id = req.query.empresa;
	var dadosForm = req.query;
	var clientes = {
			empresa: req.body.empresa,
			nomedaempresa: req.body.nomedaempresa,
			primeironomedocontato: req.body.primeironomedocontato,
			sobrenomedocontato: req.body.sobrenomedocontato,
			empresaoudepartamento: req.body.empresaoudepartamento,
			enderecodecobranca: req.body.enderecodecobranca,
			cidade: req.body.cidade,
			estadoouprovincia: req.body.estadoouprovincia,
			cep: req.body.cep,
			pais: req.body.pais,
			titulodocontato: req.body.titulodocontato,
			ndotelefone: req.body.ndotelefone,
			ramal: req.body.ramal,
			fax: req.body.fax,
			email: req.body.email,
			observacoes: req.body.observacoes
		}
	req.assert('empresa', 'Identificador do cliente é um dado obrigatório. Informe por favor!').notEmpty();
	var erros = req.validationErrors();
	
	if(erros){
		console.log(erros);
		res.render("customaoobra/cliente", {validacao:erros,Clientes:clientes,msg:null});
		return;
	}
	
	//var sql = "Insert Into cliente(nomecliente, sigla, versao, url) values ('"+req.body.nomecliente+"','"+req.body.sigla+"','"+req.body.versao+"','"+req.body.url+"')";
	const http = require('http')

	const data = JSON.stringify(clientes)

	const options = {
	  hostname: 'localhost',
	  port: 4040,
	  path: '/Cliente/'+parseInt(clientes.empresa),
	  method: 'delete',
	  headers: {
	    'Content-Type': 'application/json',
	    'Content-Length': data.length
	  }
	}
	
	const wreq = http.request(options, wres => {
	 // console.log(`statusCode: ${res.statusCode}`)
	  wres.on('data', d => {
	  	res.redirect('/CustomaoobraClientes');
	    //res.render('customaoobra/cliente', {validacao:[],Clientes:clientes,msg:'Exclusao processada com sucesso!'});
	  })
	})

	wreq.on('error', error => {
	  console.error(error)
	})

	wreq.write(data)
	wreq.end()
};