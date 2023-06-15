module.exports.cadpessoa = function(application, req, res){
	
	res.render('pessoas/crudpessoas', {validacao:[],pessoas:[],msg:null});
}
module.exports.fichapessoa = function(application, req, res){
	//console.log(req)
	res.render('pessoa/FichaPessoaFisica', {validacao:[],idpessoa:req.query.idpessoa,msg:null});
}
module.exports.listarpessoas = function(application, req, res){
	//console.log(req)
	//const data = JSON.stringify(req.query)
	const http = require('http')
	const options = {
	  hostname: 'localhost',
	  port: 8081,
	  path:'/api/todas/pessoas',
	  method: 'GET',
	  headers: {'Accept' : 'application/json'}
	}

	const wreq = http.request(options, wres => {
	 console.log(`statusCode: ${wres.statusCode}`)

	  wres.on('data', d => {
	  	 var wdata = JSON.parse(d);
	  	 res.render('pessoa/listaPessoas', {validacao:[],Pessoas:wdata,host:'8081',msg:null});
		})
	  })
		wreq.on('error', error => {
		  console.error(error)
		})
	//wreq.write(data)
	wreq.end()
}
module.exports.pesquisarpessoa = function(application, req, res){
	var dadosForm = req.query
	const data = JSON.stringify(req.query)
	console.log(data)
	const http = require('http')
	const options = {
	  hostname: 'localhost',
	  port: 8081,
	  path:'/api/pessoas/nome?nomepessoa='+dadosForm.op.replace(" ","%20")+"&status="+dadosForm.status,
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
	  	 res.render('pessoas', {validacao:[],Pessoas:wdata,msg:null,host:8081});
		})
	  })
		wreq.on('error', error => {
		  console.error(error)
		})
	//wreq.write(data)
	wreq.end()
}
// Post a pessoa
module.exports.create = function(application, req, res){	
	// Save to PostgreSQL database
	var dadosForm = req.body;
	
	var wpessoa = {
		idpessoa:req.body.idpessoa,
		nomepessoa : req.body.nomepessoa,
		sigla : req.body.sigla,
		versao : req.body.versao,
		url : req.body.url,
		status : req.body.status
		};
	
	req.assert('nomepessoa', 'Nome do pessoa é um dado obrigatório. Informe por favor!').notEmpty();
	req.assert('sigla', 'Sigla é um dado obrigatório. Informe por favor!').notEmpty();
	req.assert('versao', 'Versão é um dado obrigatório. Informe por favor!').notEmpty();
	req.assert('status', 'Status é um dado obrigatório. Informe por favor!').notEmpty();

	var erros = req.validationErrors();
	
	if(erros){
		console.log(erros);
		res.render("pessoas/crudpessoas", {validacao:erros,pessoas:[],msg:null});
		return;
	}
	
	const http = require('http')

	const data = JSON.stringify(dadosForm)

	const options = {
	  hostname: 'localhost',
	  port: 8081,
	  path: '/api/inc/pessoa',
	  method: 'POST',
	  headers: {
	    'Content-Type': 'application/json',
	    'Content-Length': data.length
	  }
	}
	if (dadosForm.idpessoa > 0){
		options.path = "/api/atualiza/pessoa";
		options.method= "put";
		console.log("vou alterar ")
		console.log(data);
		console.log(options);
	}else{
		console.log("vou incluir ")
		console.log(req.body)
	}

	const wreq = http.request(options, wres => {
	 // console.log(`statusCode: ${res.statusCode}`)
	  wres.on('data', d => {
	  	//res.status(200).json({idpessoa:dadosForm.idpessoa,nomepessoa:dadosForm.nomepessoa,sigla:dadosForm.sigla,versao:dadosForm.versao,url:dadosForm.url,status:dadosForm.status});
	    res.render('pessoas/crudpessoas', {validacao:[],pessoas:[{idpessoa:dadosForm.idpessoa,nomepessoa:dadosForm.nomepessoa,sigla:dadosForm.sigla,versao:dadosForm.versao,url:dadosForm.url,status:dadosForm.status}],msg:null});
	  })
	})

	wreq.on('error', error => {
	  console.error(error)
	})

	wreq.write(data)
	wreq.end()

};
// FETCH All pessoa
module.exports.findAll = function (application,req, res)  {	
	
};
// Find a pessoa by Id
module.exports.findById = function (application,req, res)  {	
		
};
// Update a pessoa
// Put a pessoa
module.exports.validarpessoa = function(application, req, res){
	//console.log(req.body)
	var dadosForm = req.body;
	
	var wpessoa = {
		idpessoa:req.body.idpessoa,
		nomepessoa : req.body.nomepessoa,
		sigla : req.body.sigla,
		versao : req.body.versao,
		url : req.body.url,
		status : req.body.status
		};
	
	req.assert('nomepessoa', 'Nome do pessoa é um dado obrigatório. Informe por favor!').notEmpty();
	req.assert('sigla', 'Sigla é um dado obrigatório. Informe por favor!').notEmpty();
	req.assert('versao', 'Versão é um dado obrigatório. Informe por favor!').notEmpty();
	req.assert('status', 'Status é um dado obrigatório. Informe por favor!').notEmpty();

	var erros = req.validationErrors();
	
	if(erros){
		//console.log(erros);
		res.render("pessoas/crudpessoas", {validacao:erros,pessoas:[],msg:null});
		return;
	}
	
	//var sql = "Insert Into pessoa(nomepessoa, sigla, versao, url) values ('"+req.body.nomepessoa+"','"+req.body.sigla+"','"+req.body.versao+"','"+req.body.url+"')";
	const http = require('http')

	const data = JSON.stringify(dadosForm)

	const options = {
	  hostname: 'localhost',
	  port: 8081,
	  path: '/api/inc/pessoa',
	  method: 'POST',
	  headers: {
	    'Content-Type': 'application/json',
	    'Content-Length': data.length
	  }
	}
	if (dadosForm.idpessoa > 0){
		options.path = "/api/atualiza/pessoa";
		options.method= "put";
		console.log("vou alterar ")
		console.log(data);
		console.log(options);
	}else{
		console.log("vou incluir ")
		console.log(req.body)
	}

	const wreq = http.request(options, wres => {
	 // console.log(`statusCode: ${res.statusCode}`)
	  wres.on('data', d => {
	  	//console.log(d)
	  	//res.status(200).json({idpessoa:dadosForm.idpessoa,nomepessoa:dadosForm.nomepessoa,sigla:dadosForm.sigla,versao:dadosForm.versao,url:dadosForm.url,status:dadosForm.status});
	    res.render('pessoas/crudpessoas', {validacao:[],pessoas:[{idpessoa:dadosForm.idpessoa,nomepessoa:dadosForm.nomepessoa,sigla:dadosForm.sigla,versao:dadosForm.versao,url:dadosForm.url,status:dadosForm.status}],msg:'Inclusao com sucesso!'});
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
	debugger;
	var dadosForm = req.query;
	console.log(dadosForm);
	var wpessoa = {
		idpessoa:parseInt(req.query.idpessoa),
		nomepessoa : req.query.nomepessoa,
		sigla : req.query.sigla,
		versao : req.query.versao,
		url : req.query.url,
		status :parseInt(req.query.status)
		};
	
	req.assert('nomepessoa', 'Nome do pessoa é um dado obrigatório. Informe por favor!').notEmpty();
	req.assert('sigla', 'Sigla é um dado obrigatório. Informe por favor!').notEmpty();
	req.assert('versao', 'Versão é um dado obrigatório. Informe por favor!').notEmpty();
	req.assert('status', 'Status é um dado obrigatório. Informe por favor!').notEmpty();

	var erros = req.validationErrors();
	
	if(erros){
		console.log(erros);
		res.render("pessoas/crudpessoas", {validacao:erros,pessoas:[]});
		return;
	}
	
	//var sql = "Insert Into pessoa(nomepessoa, sigla, versao, url) values ('"+req.body.nomepessoa+"','"+req.body.sigla+"','"+req.body.versao+"','"+req.body.url+"')";
	const http = require('http')

	const data = JSON.stringify(dadosForm)
	console.log(req);
	const options = {
	  hostname: 'localhost',
	  port: 8081,
	  path: '/api/inc/pessoa',
	  method: 'POST',
	  headers: {
	    'Content-Type': 'application/json',
	    'Content-Length': data.length
	  }
	}
	if (dadosForm.idpessoa > 0){
		options.path = "/api/atualiza/pessoa";
		options.method= "put";
		console.log("vou alterar ")
		console.log(data);
		console.log(options);
	}else{
		console.log("vou incluir ")
		console.log(req.body)
	}

	const wreq = http.request(options, wres => {
	 // console.log(`statusCode: ${res.statusCode}`)
	  wres.on('data', d => {
	  	//res.status(200).json({idpessoa:dadosForm.idpessoa,nomepessoa:dadosForm.nomepessoa,sigla:dadosForm.sigla,versao:dadosForm.versao,url:dadosForm.url,status:dadosForm.status});
	    res.render('pessoas/crudpessoas', {validacao:[],pessoas:[{idpessoa:dadosForm.idpessoa,nomepessoa:dadosForm.nomepessoa,sigla:dadosForm.sigla,versao:dadosForm.versao,url:dadosForm.url,status:dadosForm.status}],msg:'Alterado com sucesso!'});
	  })
	})

	wreq.on('error', error => {
	  console.error(error)
	})

	wreq.write(data)
	wreq.end()
};

// Delete a pessoa by Id
module.exports.delete = function (application,req, res) {
	
	const id = req.query.idpessoa;
	var dadosForm = req.query;
	req.assert('idpessoa', 'Identificador do pessoa é um dado obrigatório. Informe por favor!').notEmpty();
	var erros = req.validationErrors();
	
	if(erros){
		console.log(erros);
		res.render("pessoas/crudpessoas", {validacao:erros,pessoas:[]});
		return;
	}
	
	//var sql = "Insert Into pessoa(nomepessoa, sigla, versao, url) values ('"+req.body.nomepessoa+"','"+req.body.sigla+"','"+req.body.versao+"','"+req.body.url+"')";
	const http = require('http')

	const data = JSON.stringify(dadosForm)

	const options = {
	  hostname: 'localhost',
	  port: 8081,
	  path: '/api/exc/pessoa',
	  method: 'delete',
	  headers: {
	    'Content-Type': 'application/json',
	    'Content-Length': data.length
	  }
	}
	
	const wreq = http.request(options, wres => {
	 // console.log(`statusCode: ${res.statusCode}`)
	  wres.on('data', d => {
	  	//res.status(200).json({idpessoa:dadosForm.idpessoa,nomepessoa:dadosForm.nomepessoa,sigla:dadosForm.sigla,versao:dadosForm.versao,url:dadosForm.url,status:dadosForm.status});
	    res.render('pessoas/crudpessoas', {validacao:[],pessoas:[{idpessoa:dadosForm.idpessoa,nomepessoa:dadosForm.nomepessoa,sigla:dadosForm.sigla,versao:dadosForm.versao,url:dadosForm.url,status:dadosForm.status}],msg:'Excluido com sucesso!'});
	  })
	})

	wreq.on('error', error => {
	  console.error(error)
	})

	wreq.write(data)
	wreq.end()
};