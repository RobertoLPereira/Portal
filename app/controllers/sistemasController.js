module.exports.cadsistema = function(application, req, res){
	
	res.render('sistemas/crudSistemas', {validacao:[],Sistemas:[],msg:null});
}
module.exports.listarsistemas = function(application, req, res){
	//console.log(req)
	//const data = JSON.stringify(req.query)
	const http = require('http')
	const options = {
	  hostname: 'localhost',
	  port: 8083,
	  path:'/api/todos/sistema',
	  method: 'GET',
	  headers: {'Accept' : 'application/json'}
	}

	const wreq = http.request(options, wres => {
	 // console.log(`statusCode: ${wres.statusCode}`)

	  wres.on('data', d => {
	  	 var wdata = JSON.parse(d);
	  	 res.render('sistemas/crudSistemas', {validacao:[],Sistemas:wdata,msg:null});
		})
	  })
		wreq.on('error', error => {
		  console.error(error)
		})
	//wreq.write(data)
	wreq.end()
}
module.exports.pesquisarsistema = function(application, req, res){
	var dadosForm = req.query
	const data = JSON.stringify(req.query)
	//console.log(req)
	const http = require('http')
	const options = {
	  hostname: 'localhost',
	  port: 8083,
	  path:'/api/pesquisarsisema?nomesistema='+dadosForm.nomesistema.replace(" ","%20")+"&status="+dadosForm.status,
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
	  	 res.render('sistemas/crudSistemas', {validacao:[],Sistemas:wdata,msg:null});
		})
	  })
		wreq.on('error', error => {
		  console.error(error)
		})
	//wreq.write(data)
	wreq.end()
}
// Post a Sistema
module.exports.create = function(application, req, res){	
	// Save to PostgreSQL database
	var dadosForm = req.body;
	
	var wsistema = {
		idsistema:req.body.idsistema,
		nomesistema : req.body.nomesistema,
		sigla : req.body.sigla,
		versao : req.body.versao,
		url : req.body.url,
		status : req.body.status
		};
	
	req.assert('nomesistema', 'Nome do Sistema é um dado obrigatório. Informe por favor!').notEmpty();
	req.assert('sigla', 'Sigla é um dado obrigatório. Informe por favor!').notEmpty();
	req.assert('versao', 'Versão é um dado obrigatório. Informe por favor!').notEmpty();
	req.assert('status', 'Status é um dado obrigatório. Informe por favor!').notEmpty();

	var erros = req.validationErrors();
	
	if(erros){
		console.log(erros);
		res.render("sistemas/crudSistemas", {validacao:erros,Sistemas:[],msg:null});
		return;
	}
	
	const http = require('http')

	const data = JSON.stringify(dadosForm)

	const options = {
	  hostname: 'localhost',
	  port: 8083,
	  path: '/api/inc/sistema',
	  method: 'POST',
	  headers: {
	    'Content-Type': 'application/json',
	    'Content-Length': data.length
	  }
	}
	if (dadosForm.idsistema > 0){
		options.path = "/api/atualiza/sistema";
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
	  	//res.status(200).json({idsistema:dadosForm.idsistema,nomesistema:dadosForm.nomesistema,sigla:dadosForm.sigla,versao:dadosForm.versao,url:dadosForm.url,status:dadosForm.status});
	    res.render('sistemas/crudSistemas', {validacao:[],Sistemas:[{idsistema:dadosForm.idsistema,nomesistema:dadosForm.nomesistema,sigla:dadosForm.sigla,versao:dadosForm.versao,url:dadosForm.url,status:dadosForm.status}],msg:null});
	  })
	})

	wreq.on('error', error => {
	  console.error(error)
	})

	wreq.write(data)
	wreq.end()

};
// FETCH All Sistema
module.exports.findAll = function (application,req, res)  {	
	
};
// Find a Sistema by Id
module.exports.findById = function (application,req, res)  {	
		
};
// Update a Sistema
// Put a Sistema
module.exports.validarSistema = function(application, req, res){
	//console.log(req.body)
	var dadosForm = req.body;
	
	var wsistema = {
		idsistema:req.body.idsistema,
		nomesistema : req.body.nomesistema,
		sigla : req.body.sigla,
		versao : req.body.versao,
		url : req.body.url,
		status : req.body.status
		};
	
	req.assert('nomesistema', 'Nome do Sistema é um dado obrigatório. Informe por favor!').notEmpty();
	req.assert('sigla', 'Sigla é um dado obrigatório. Informe por favor!').notEmpty();
	req.assert('versao', 'Versão é um dado obrigatório. Informe por favor!').notEmpty();
	req.assert('status', 'Status é um dado obrigatório. Informe por favor!').notEmpty();

	var erros = req.validationErrors();
	
	if(erros){
		//console.log(erros);
		res.render("sistemas/crudSistemas", {validacao:erros,Sistemas:[],msg:null});
		return;
	}
	
	//var sql = "Insert Into sistema(nomesistema, sigla, versao, url) values ('"+req.body.nomesistema+"','"+req.body.sigla+"','"+req.body.versao+"','"+req.body.url+"')";
	const http = require('http')

	const data = JSON.stringify(dadosForm)

	const options = {
	  hostname: 'localhost',
	  port: 8083,
	  path: '/api/inc/sistema',
	  method: 'POST',
	  headers: {
	    'Content-Type': 'application/json',
	    'Content-Length': data.length
	  }
	}
	if (dadosForm.idsistema > 0){
		options.path = "/api/atualiza/sistema";
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
	  	//res.status(200).json({idsistema:dadosForm.idsistema,nomesistema:dadosForm.nomesistema,sigla:dadosForm.sigla,versao:dadosForm.versao,url:dadosForm.url,status:dadosForm.status});
	    res.render('sistemas/crudSistemas', {validacao:[],Sistemas:[{idsistema:dadosForm.idsistema,nomesistema:dadosForm.nomesistema,sigla:dadosForm.sigla,versao:dadosForm.versao,url:dadosForm.url,status:dadosForm.status}],msg:'Inclusao com sucesso!'});
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
	var wsistema = {
		idsistema:parseInt(req.query.idsistema),
		nomesistema : req.query.nomesistema,
		sigla : req.query.sigla,
		versao : req.query.versao,
		url : req.query.url,
		status :parseInt(req.query.status)
		};
	
	req.assert('nomesistema', 'Nome do Sistema é um dado obrigatório. Informe por favor!').notEmpty();
	req.assert('sigla', 'Sigla é um dado obrigatório. Informe por favor!').notEmpty();
	req.assert('versao', 'Versão é um dado obrigatório. Informe por favor!').notEmpty();
	req.assert('status', 'Status é um dado obrigatório. Informe por favor!').notEmpty();

	var erros = req.validationErrors();
	
	if(erros){
		console.log(erros);
		res.render("sistemas/crudSistemas", {validacao:erros,Sistemas:[]});
		return;
	}
	
	//var sql = "Insert Into sistema(nomesistema, sigla, versao, url) values ('"+req.body.nomesistema+"','"+req.body.sigla+"','"+req.body.versao+"','"+req.body.url+"')";
	const http = require('http')

	const data = JSON.stringify(dadosForm)
	console.log(req);
	const options = {
	  hostname: 'localhost',
	  port: 8083,
	  path: '/api/inc/sistema',
	  method: 'POST',
	  headers: {
	    'Content-Type': 'application/json',
	    'Content-Length': data.length
	  }
	}
	if (dadosForm.idsistema > 0){
		options.path = "/api/atualiza/sistema";
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
	  	//res.status(200).json({idsistema:dadosForm.idsistema,nomesistema:dadosForm.nomesistema,sigla:dadosForm.sigla,versao:dadosForm.versao,url:dadosForm.url,status:dadosForm.status});
	    res.render('sistemas/crudSistemas', {validacao:[],Sistemas:[{idsistema:dadosForm.idsistema,nomesistema:dadosForm.nomesistema,sigla:dadosForm.sigla,versao:dadosForm.versao,url:dadosForm.url,status:dadosForm.status}],msg:'Alterado com sucesso!'});
	  })
	})

	wreq.on('error', error => {
	  console.error(error)
	})

	wreq.write(data)
	wreq.end()
};

// Delete a Sistema by Id
module.exports.delete = function (application,req, res) {
	
	const id = req.query.idsistema;
	var dadosForm = req.query;
	req.assert('idsistema', 'Identificador do Sistema é um dado obrigatório. Informe por favor!').notEmpty();
	var erros = req.validationErrors();
	
	if(erros){
		console.log(erros);
		res.render("sistemas/crudSistemas", {validacao:erros,Sistemas:[]});
		return;
	}
	
	//var sql = "Insert Into sistema(nomesistema, sigla, versao, url) values ('"+req.body.nomesistema+"','"+req.body.sigla+"','"+req.body.versao+"','"+req.body.url+"')";
	const http = require('http')

	const data = JSON.stringify(dadosForm)

	const options = {
	  hostname: 'localhost',
	  port: 8083,
	  path: '/api/exc/sistema',
	  method: 'delete',
	  headers: {
	    'Content-Type': 'application/json',
	    'Content-Length': data.length
	  }
	}
	
	const wreq = http.request(options, wres => {
	 // console.log(`statusCode: ${res.statusCode}`)
	  wres.on('data', d => {
	  	//res.status(200).json({idsistema:dadosForm.idsistema,nomesistema:dadosForm.nomesistema,sigla:dadosForm.sigla,versao:dadosForm.versao,url:dadosForm.url,status:dadosForm.status});
	    res.render('sistemas/crudSistemas', {validacao:[],Sistemas:[{idsistema:dadosForm.idsistema,nomesistema:dadosForm.nomesistema,sigla:dadosForm.sigla,versao:dadosForm.versao,url:dadosForm.url,status:dadosForm.status}],msg:'Excluido com sucesso!'});
	  })
	})

	wreq.on('error', error => {
	  console.error(error)
	})

	wreq.write(data)
	wreq.end()
};