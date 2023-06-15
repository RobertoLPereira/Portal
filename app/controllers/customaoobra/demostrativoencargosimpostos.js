module.exports.caddemonstrativoencargosimpostos = function(application, req, res){
	
	res.render('customaoobra/demonstrativoencargosimpostos', {validacao:[],Demonstrativoencargosimpostos:[],msg:null});
}
module.exports.listardemonstrativoencargosimpostos = function(application, req, res){
	//console.log(req)
	//const data = JSON.stringify(req.query)
	const http = require('http')
	const options = {
	  hostname: 'localhost',
	  port: 4040,
	  path:'/demonstrativoencargosimpostos',
	  method: 'GET',
	  headers: {'Accept' : 'application/json'}
	}

	const wreq = http.request(options, wres => {
	 // console.log(`statusCode: ${wres.statusCode}`)

	  wres.on('data', d => {
	  	 var wdata = JSON.parse(d);
	  	 res.render('customaoobra/demonstrativoencargosimpostos', {validacao:[],Demonstrativoencargosimpostos:wdata,msg:null});
		})
	  })
		wreq.on('error', error => {
		  console.error(error)
		})
	//wreq.write(data)
	wreq.end()
}
module.exports.pesquisardemonstrativoencargosimpostos = function(application, req, res){
	var dadosForm = req.query
	const data = JSON.stringify(req.query)
	//console.log(req)
	const http = require('http')
	const options = {
	  hostname: 'localhost',
	  port: 4040,
	  path:'/api/pesquisardemonstrativoencargosimpostos?nomedemonstrativoencargosimpostos='+dadosForm.nomedemonstrativoencargosimpostos.replace(" ","%20")+"&status="+dadosForm.status,
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
	  	 res.render('customaoobra/demonstrativoencargosimpostos', {validacao:[],Demonstrativoencargosimpostos:wdata,msg:null});
		})
	  })
		wreq.on('error', error => {
		  console.error(error)
		})
	//wreq.write(data)
	wreq.end()
}
// Post a demonstrativoencargosimpostos
module.exports.create = function(application, req, res){	
	// Save to PostgreSQL database

	var demonstrativodeencargoseimpostos = {
		empresa: req.body.empresa,
		idtipodeencargo: req.body.idtipodeencargo,
		idencargoimposto: req.body.idencargoimposto,
		nomeencargo: req.body.nomeencargo,
		taxapercentualmes: req.body.taxapercentualmes,
		upsize_ts: req.body.upsize_ts,
		}
		req.assert('empresa', 'empresa é um dado obrigatório. Informe por favor!').notEmpty();
		req.assert('idtipodeencargo', 'idtipodeencargo é um dado obrigatório. Informe por favor!').notEmpty();
		req.assert('idencargoimposto', 'idencargoimposto é um dado obrigatório. Informe por favor!').notEmpty();
		req.assert('nomeencargo', 'nomeencargo é um dado obrigatório. Informe por favor!').notEmpty();
		req.assert('taxapercentualmes', 'taxapercentualmes é um dado obrigatório. Informe por favor!').notEmpty();
		req.assert('upsize_ts', 'upsize_ts é um dado obrigatório. Informe por favor!').notEmpty();

	 var erros = req.validationErrors();
	
	if(erros){
		console.log(erros);
		res.render("customaoobra/demonstrativoencargosimpostos", {validacao:erros,Demonstrativoencargosimpostos:demonstrativoencargosimpostos,msg:null});
		return;
	}
	
	const http = require('http')

	const data = JSON.stringify(demonstrativodeencargoseimpostos)

	const options = {
	  hostname: 'localhost',
	  port: 4040,
	  path: '/api/inc/demonstrativoencargosimpostos',
	  method: 'POST',
	  headers: {
	    'Content-Type': 'application/json',
	    'Content-Length': data.length
	  }
	}
	if (dadosForm.codigo > 0){
		options.path = "/api/atualiza/demonstrativoencargosimpostos";
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
	  	//res.status(200).json({iddemonstrativoencargosimpostos:dadosForm.iddemonstrativoencargosimpostos,nomedemonstrativoencargosimpostos:dadosForm.nomedemonstrativoencargosimpostos,sigla:dadosForm.sigla,versao:dadosForm.versao,url:dadosForm.url,status:dadosForm.status});
	    res.render('customaoobra/demonstrativoencargosimpostos', {validacao:[],Demonstrativoencargosimpostos:demonstrativoencargosimpostos,msg:null});
	  })
	})

	wreq.on('error', error => {
	  console.error(error)
	})

	wreq.write(data)
	wreq.end()

};
// FETCH All demonstrativoencargosimpostos
module.exports.findAll = function (application,req, res)  {	
	
};
// Find a demonstrativoencargosimpostos by Id
module.exports.findById = function (application,req, res)  {	
		
};
// Update a demonstrativoencargosimpostos
// Put a demonstrativoencargosimpostos
module.exports.validardemonstrativoencargosimpostos = function(application, req, res){
	//console.log(req.body)
	var dadosForm = req.body;
	
	var demonstrativodeencargoseimpostos = {
		empresa: req.body.empresa,
		idtipodeencargo: req.body.idtipodeencargo,
		idencargoimposto: req.body.idencargoimposto,
		nomeencargo: req.body.nomeencargo,
		taxapercentualmes: req.body.taxapercentualmes,
		upsize_ts: req.body.upsize_ts,
		}
		req.assert('empresa', 'empresa é um dado obrigatório. Informe por favor!').notEmpty();
		req.assert('idtipodeencargo', 'idtipodeencargo é um dado obrigatório. Informe por favor!').notEmpty();
		req.assert('idencargoimposto', 'idencargoimposto é um dado obrigatório. Informe por favor!').notEmpty();
		req.assert('nomeencargo', 'nomeencargo é um dado obrigatório. Informe por favor!').notEmpty();
		req.assert('taxapercentualmes', 'taxapercentualmes é um dado obrigatório. Informe por favor!').notEmpty();
		req.assert('upsize_ts', 'upsize_ts é um dado obrigatório. Informe por favor!').notEmpty();

	var erros = req.validationErrors();
	
	if(erros){
		//console.log(erros);
		res.render("customaoobra/demonstrativoencargosimpostos", {validacao:erros,Demonstrativoencargosimpostos:demonstrativoencargosimpostos,msg:null});
		return;
	}
	
	//var sql = "Insert Into demonstrativoencargosimpostos(nomedemonstrativoencargosimpostos, sigla, versao, url) values ('"+req.body.nomedemonstrativoencargosimpostos+"','"+req.body.sigla+"','"+req.body.versao+"','"+req.body.url+"')";
	const http = require('http')

	const data = JSON.stringify(demonstrativodeencargoseimpostos)

	const options = {
	  hostname: 'localhost',
	  port: 4040,
	  path: '/api/inc/demonstrativoencargosimpostos',
	  method: 'POST',
	  headers: {
	    'Content-Type': 'application/json',
	    'Content-Length': data.length
	  }
	}
	if (dadosForm.iddemonstrativoencargosimpostos > 0){
		options.path = "/api/atualiza/demonstrativoencargosimpostos";
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
	  	//res.status(200).json({iddemonstrativoencargosimpostos:dadosForm.iddemonstrativoencargosimpostos,nomedemonstrativoencargosimpostos:dadosForm.nomedemonstrativoencargosimpostos,sigla:dadosForm.sigla,versao:dadosForm.versao,url:dadosForm.url,status:dadosForm.status});
	    res.render('customaoobra/demonstrativoencargosimpostos', {validacao:[],Demonstrativoencargosimpostos:demonstrativoencargosimpostos,msg:'Inclusao com sucesso!'});
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
	var demonstrativodeencargoseimpostos = {
		empresa: req.body.empresa,
		idtipodeencargo: req.body.idtipodeencargo,
		idencargoimposto: req.body.idencargoimposto,
		nomeencargo: req.body.nomeencargo,
		taxapercentualmes: req.body.taxapercentualmes,
		upsize_ts: req.body.upsize_ts,
		}
		req.assert('empresa', 'empresa é um dado obrigatório. Informe por favor!').notEmpty();
		req.assert('idtipodeencargo', 'idtipodeencargo é um dado obrigatório. Informe por favor!').notEmpty();
		req.assert('idencargoimposto', 'idencargoimposto é um dado obrigatório. Informe por favor!').notEmpty();
		req.assert('nomeencargo', 'nomeencargo é um dado obrigatório. Informe por favor!').notEmpty();
		req.assert('taxapercentualmes', 'taxapercentualmes é um dado obrigatório. Informe por favor!').notEmpty();
		req.assert('upsize_ts', 'upsize_ts é um dado obrigatório. Informe por favor!').notEmpty();

	var erros = req.validationErrors();
	
	if(erros){
		//console.log(erros);
		res.render("customaoobra/demonstrativoencargosimpostos", {validacao:erros,Demonstrativoencargosimpostos:demonstrativoencargosimpostos,msg:null});
		return;
	}
	
	//var sql = "Insert Into demonstrativoencargosimpostos(nomedemonstrativoencargosimpostos, sigla, versao, url) values ('"+req.body.nomedemonstrativoencargosimpostos+"','"+req.body.sigla+"','"+req.body.versao+"','"+req.body.url+"')";
	const http = require('http')

	const data = JSON.stringify(demonstrativoencargosimpostos)
	
	//console.log(req);
	const options = {
	  hostname: 'localhost',
	  port: 4040,
	  path: '/demonstrativoencargosimpostos',
	  method: 'post',
	  headers: {
	    'Content-Type': 'application/json',
	    'Content-Length': data.length
	  }
	}
	if (demonstrativoencargosimpostos.empresa > 0){
		options.path = "/demonstrativoencargosimpostos/"+demonstrativoencargosimpostos.empresa;
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
	  	//res.status(200).json({iddemonstrativoencargosimpostos:dadosForm.iddemonstrativoencargosimpostos,nomedemonstrativoencargosimpostos:dadosForm.nomedemonstrativoencargosimpostos,sigla:dadosForm.sigla,versao:dadosForm.versao,url:dadosForm.url,status:dadosForm.status});
	    res.render('customaoobra/demonstrativoencargosimpostos', {validacao:[],Demonstrativoencargosimpostos:demonstrativoencargosimpostos,msg:'Alterado com sucesso!'});
	  })
	})

	wreq.on('error', error => {
	  console.error(error)
	})

	wreq.write(data)
	wreq.end()
};

// Delete a demonstrativoencargosimpostos by Id
module.exports.delete = function (application,req, res) {
	
	const id = req.query.iddespesa;
	var dadosForm = req.query;
	var demonstrativodeencargoseimpostos = {
		empresa: req.body.empresa,
		idtipodeencargo: req.body.idtipodeencargo,
		idencargoimposto: req.body.idencargoimposto,
		nomeencargo: req.body.nomeencargo,
		taxapercentualmes: req.body.taxapercentualmes,
		upsize_ts: req.body.upsize_ts,
		}
		req.assert('empresa', 'empresa é um dado obrigatório. Informe por favor!').notEmpty();
		req.assert('idtipodeencargo', 'idtipodeencargo é um dado obrigatório. Informe por favor!').notEmpty();
		req.assert('idencargoimposto', 'idencargoimposto é um dado obrigatório. Informe por favor!').notEmpty();
		req.assert('nomeencargo', 'nomeencargo é um dado obrigatório. Informe por favor!').notEmpty();
		req.assert('taxapercentualmes', 'taxapercentualmes é um dado obrigatório. Informe por favor!').notEmpty();
		req.assert('upsize_ts', 'upsize_ts é um dado obrigatório. Informe por favor!').notEmpty();

	var erros = req.validationErrors();
	
	if(erros){
		console.log(erros);
		res.render("customaoobra/demonstrativoencargosimpostos", {validacao:erros,Demonstrativoencargosimpostos:demonstrativoencargosimpostos,msg:null});
		return;
	}
	
	//var sql = "Insert Into demonstrativoencargosimpostos(nomedemonstrativoencargosimpostos, sigla, versao, url) values ('"+req.body.nomedemonstrativoencargosimpostos+"','"+req.body.sigla+"','"+req.body.versao+"','"+req.body.url+"')";
	const http = require('http')

	const data = JSON.stringify(demonstrativoencargosimpostos)

	const options = {
	  hostname: 'localhost',
	  port: 4040,
	  path: '/api/exc/demonstrativoencargosimpostos',
	  method: 'delete',
	  headers: {
	    'Content-Type': 'application/json',
	    'Content-Length': data.length
	  }
	}
	
	const wreq = http.request(options, wres => {
	 // console.log(`statusCode: ${res.statusCode}`)
	  wres.on('data', d => {
	  	//res.status(200).json({iddemonstrativoencargosimpostos:dadosForm.iddemonstrativoencargosimpostos,nomedemonstrativoencargosimpostos:dadosForm.nomedemonstrativoencargosimpostos,sigla:dadosForm.sigla,versao:dadosForm.versao,url:dadosForm.url,status:dadosForm.status});
	    res.render('customaoobra/demonstrativoencargosimpostos', {validacao:[],Demonstrativoencargosimpostos:demonstrativoencargosimpostos,msg:'Exclusao processada com sucesso!'});
	  })
	})

	wreq.on('error', error => {
	  console.error(error)
	})

	wreq.write(data)
	wreq.end()
};