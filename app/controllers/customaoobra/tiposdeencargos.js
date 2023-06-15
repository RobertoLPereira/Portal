module.exports.cadtiposdeencargos = function(application, req, res){
	
	res.render('customaoobra/tiposdeencargos', {validacao:[],Tiposdeencargos:[],msg:null});
}
module.exports.listartiposdeencargos = function(application, req, res){
	//console.log(req)
	//const data = JSON.stringify(req.query)
	const http = require('http')
	const options = {
	  hostname: 'localhost',
	  port: 4040,
	  path:'/tiposdeencargos',
	  method: 'GET',
	  headers: {'Accept' : 'application/json'}
	}

	const wreq = http.request(options, wres => {
	 // console.log(`statusCode: ${wres.statusCode}`)

	  wres.on('data', d => {
	  	 var wdata = JSON.parse(d);
	  	 res.render('customaoobra/tiposdeencargos', {validacao:[],Tiposdeencargos:wdata,msg:null});
		})
	  })
		wreq.on('error', error => {
		  console.error(error)
		})
	//wreq.write(data)
	wreq.end()
}
module.exports.pesquisartiposdeencargos = function(application, req, res){
	var dadosForm = req.query
	const data = JSON.stringify(req.query)
	//console.log(req)
	const http = require('http')
	const options = {
	  hostname: 'localhost',
	  port: 4040,
	  path:'/api/pesquisartiposdeencargos?nometiposdeencargos='+dadosForm.nometiposdeencargos.replace(" ","%20")+"&status="+dadosForm.status,
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
	  	 res.render('customaoobra/tiposdeencargos', {validacao:[],Tiposdeencargos:wdata,msg:null});
		})
	  })
		wreq.on('error', error => {
		  console.error(error)
		})
	//wreq.write(data)
	wreq.end()
}
// Post a tiposdeencargos
module.exports.create = function(application, req, res){	
	// Save to PostgreSQL database
	var dadosForm = req.body;
	
	var tiposdeencargo = {
		idtipodeencargo: req.body.idtipodeencargo,
		descricao: req.body.descricao,
		}
		req.assert('idtipodeencargo', 'idtipodeencargo é um dado obrigatório. Informe por favor!').notEmpty();
		req.assert('descricao', 'descricao é um dado obrigatório. Informe por favor!').notEmpty();

	 var erros = req.validationErrors();
	
	if(erros){
		console.log(erros);
		res.render("customaoobra/tiposdeencargos", {validacao:erros,Tiposdeencargos:tiposdeencargos,msg:null});
		return;
	}
	
	const http = require('http')

	const data = JSON.stringify(tiposdeencargos)

	const options = {
	  hostname: 'localhost',
	  port: 4040,
	  path: '/api/inc/tiposdeencargos',
	  method: 'POST',
	  headers: {
	    'Content-Type': 'application/json',
	    'Content-Length': data.length
	  }
	}
	if (dadosForm.codigo > 0){
		options.path = "/api/atualiza/tiposdeencargos";
		options.method= "put";
		console.log("vou alterar ")
		console.log(data);
		console.log(options);
	}else{
		console.log("vou incluir ")
		console.log(datay)
	}

	const wreq = http.request(options, wres => {
	 // console.log(`statusCode: ${res.statusCode}`)
	  wres.on('data', d => {
	  	//res.status(200).json({idtiposdeencargos:dadosForm.idtiposdeencargos,nometiposdeencargos:dadosForm.nometiposdeencargos,sigla:dadosForm.sigla,versao:dadosForm.versao,url:dadosForm.url,status:dadosForm.status});
	    res.render('customaoobra/tiposdeencargos', {validacao:[],Tiposdeencargos:tiposdeencargos,msg:null});
	  })
	})

	wreq.on('error', error => {
	  console.error(error)
	})

	wreq.write(data)
	wreq.end()

};
// FETCH All tiposdeencargos
module.exports.findAll = function (application,req, res)  {	
	
};
// Find a tiposdeencargos by Id
module.exports.findById = function (application,req, res)  {	
		
};
// Update a tiposdeencargos
// Put a tiposdeencargos
module.exports.validartiposdeencargos = function(application, req, res){
	//console.log(req.body)
	var dadosForm = req.body;
	
	var tiposdeencargo = {
		idtipodeencargo: req.body.idtipodeencargo,
		descricao: req.body.descricao,
		}
		req.assert('idtipodeencargo', 'idtipodeencargo é um dado obrigatório. Informe por favor!').notEmpty();
		req.assert('descricao', 'descricao é um dado obrigatório. Informe por favor!').notEmpty();

	var erros = req.validationErrors();
	
	if(erros){
		//console.log(erros);
		res.render("customaoobra/tiposdeencargos", {validacao:erros,Tiposdeencargos:tiposdeencargos,msg:null});
		return;
	}
	
	//var sql = "Insert Into tiposdeencargos(nometiposdeencargos, sigla, versao, url) values ('"+req.body.nometiposdeencargos+"','"+req.body.sigla+"','"+req.body.versao+"','"+req.body.url+"')";
	const http = require('http')

	const data = JSON.stringify(tiposdeencargos)

	const options = {
	  hostname: 'localhost',
	  port: 4040,
	  path: '/api/inc/tiposdeencargos',
	  method: 'POST',
	  headers: {
	    'Content-Type': 'application/json',
	    'Content-Length': data.length
	  }
	}
	if (dadosForm.idtiposdeencargos > 0){
		options.path = "/api/atualiza/tiposdeencargos";
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
	  	//res.status(200).json({idtiposdeencargos:dadosForm.idtiposdeencargos,nometiposdeencargos:dadosForm.nometiposdeencargos,sigla:dadosForm.sigla,versao:dadosForm.versao,url:dadosForm.url,status:dadosForm.status});
	    res.render('customaoobra/tiposdeencargos', {validacao:[],Tiposdeencargos:tiposdeencargos,msg:'Inclusao com sucesso!'});
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
	console.log(req);
	var tiposdeencargo = {
		idtipodeencargo: req.body.idtipodeencargo,
		descricao: req.body.descricao,
		}
		req.assert('idtipodeencargo', 'idtipodeencargo é um dado obrigatório. Informe por favor!').notEmpty();
		req.assert('descricao', 'descricao é um dado obrigatório. Informe por favor!').notEmpty();

	var erros = req.validationErrors();
	
	if(erros){
		//console.log(erros);
		res.render("customaoobra/tiposdeencargos", {validacao:erros,Tiposdeencargos:tiposdeencargos,msg:null});
		return;
	}
	
	//var sql = "Insert Into tiposdeencargos(nometiposdeencargos, sigla, versao, url) values ('"+req.body.nometiposdeencargos+"','"+req.body.sigla+"','"+req.body.versao+"','"+req.body.url+"')";
	const http = require('http')

	const data = JSON.stringify(tiposdeencargos)
	
	//console.log(req);
	const options = {
	  hostname: 'localhost',
	  port: 4040,
	  path: '/tiposdeencargos',
	  method: 'post',
	  headers: {
	    'Content-Type': 'application/json',
	    'Content-Length': data.length
	  }
	}
	if (tiposdeencargos.empresa > 0){
		options.path = "/tiposdeencargos/"+tiposdeencargos.empresa;
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
	  	//res.status(200).json({idtiposdeencargos:dadosForm.idtiposdeencargos,nometiposdeencargos:dadosForm.nometiposdeencargos,sigla:dadosForm.sigla,versao:dadosForm.versao,url:dadosForm.url,status:dadosForm.status});
	    res.render('customaoobra/tiposdeencargos', {validacao:[],Tiposdeencargos:tiposdeencargos,msg:'Alterado com sucesso!'});
	  })
	})

	wreq.on('error', error => {
	  console.error(error)
	})

	wreq.write(data)
	wreq.end()
};

// Delete a tiposdeencargos by Id
module.exports.delete = function (application,req, res) {
	
	const id = req.query.codigo;
	var dadosForm = req.query;
	var tiposdeencargo = {
		idtipodeencargo: req.body.idtipodeencargo,
		descricao: req.body.descricao,
		}
		req.assert('idtipodeencargo', 'idtipodeencargo é um dado obrigatório. Informe por favor!').notEmpty();
		req.assert('descricao', 'descricao é um dado obrigatório. Informe por favor!').notEmpty();

	var erros = req.validationErrors();
	
	if(erros){
		console.log(erros);
		res.render("customaoobra/tiposdeencargos", {validacao:erros,Tiposdeencargos:tiposdeencargos,msg:null});
		return;
	}
	
	//var sql = "Insert Into tiposdeencargos(nometiposdeencargos, sigla, versao, url) values ('"+req.body.nometiposdeencargos+"','"+req.body.sigla+"','"+req.body.versao+"','"+req.body.url+"')";
	const http = require('http')

	const data = JSON.stringify(tiposdeencargos)

	const options = {
	  hostname: 'localhost',
	  port: 4040,
	  path: '/api/exc/tiposdeencargos',
	  method: 'delete',
	  headers: {
	    'Content-Type': 'application/json',
	    'Content-Length': data.length
	  }
	}
	
	const wreq = http.request(options, wres => {
	 // console.log(`statusCode: ${res.statusCode}`)
	  wres.on('data', d => {
	  	//res.status(200).json({idtiposdeencargos:dadosForm.idtiposdeencargos,nometiposdeencargos:dadosForm.nometiposdeencargos,sigla:dadosForm.sigla,versao:dadosForm.versao,url:dadosForm.url,status:dadosForm.status});
	    res.render('customaoobra/tiposdeencargos', {validacao:[],Tiposdeencargos:tiposdeencargos,msg:'Exclusao processada com sucesso!'});
	  })
	})

	wreq.on('error', error => {
	  console.error(error)
	})

	wreq.write(data)
	wreq.end()
};