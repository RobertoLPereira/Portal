module.exports.caddemonstrativoencargosimpostos = function(application, req, res){
	
	res.render('customaoobra/demonstrativoencargosimpostos', {validacao:[],Demonstrativoencargosimpostos:[],msg:null});
}
module.exports.listardemonstrativoencargosimpostos = function(application, req, res){
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
	  	 TipoEncargo(application, req, res,JSON.parse(d));
		})
	  })
		wreq.on('error', error => {
		  console.error(error)
		})
	//wreq.write(data)
	wreq.end()

	function TipoEncargo(application,req,res,cli){
		const http = require('http')
		const options = {
		  hostname: 'localhost',
		  port: 4040,
		  path:'/TipodeEncargo',
		  method: 'GET',
		  headers: {'Accept' : 'application/json'}
		}

		const wreq = http.request(options, wres => {

		  wres.on('data', d => {
		  	 var wdata = JSON.parse(d);
		  	 EncargosImpostos(application,req,res,cli,wdata);
			})
		  })
			wreq.on('error', error => {
			  console.error(error)
			})
		//wreq.write(data)
		wreq.end()
	}

	function EncargosImpostos(application,req,res,cli,tipo){
	const http = require('http')
	const options = {
	  hostname: 'localhost',
	  port: 4040,
	  path:'/DemostrativodeEncargoseImpostos',
	  method: 'GET',
	  headers: {'Accept' : 'application/json'}
	}

	const wreq = http.request(options, wres => {
	 // console.log(`statusCode: ${wres.statusCode}`)

	  wres.on('data', d => {
	  	 var wdata = JSON.parse(d);
	  	 res.render('customaoobra/demonstrativoencargosimpostos', {validacao:[],Demonstrativoencargosimpostos:wdata,Clientes:cli,TipodeEncargo:tipo,msg:null});
		})
	  })
		wreq.on('error', error => {
		  console.error(error)
		})
	//wreq.write(data)
	wreq.end()
}
}
	
module.exports.pesquisardemonstrativoencargosimpostos = function(application, req, res){
	var dadosForm = req.query
	const data = JSON.stringify(req.query)
	//console.log(req)
	const http = require('http')
	const options = {
	  hostname: 'localhost',
	  port: 4040,
	  path:'/DemostrativodeEncargoseImpostos?nomeencargo='+dadosForm.nomeencargo.replace(" ","%20")+"&status="+dadosForm.status,
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
		status: req.body.status,
		}
		req.assert('empresa', 'empresa é um dado obrigatório. Informe por favor!').notEmpty();
		req.assert('idtipodeencargo', 'idtipodeencargo é um dado obrigatório. Informe por favor!').notEmpty();
		req.assert('idencargoimposto', 'idencargoimposto é um dado obrigatório. Informe por favor!').notEmpty();
		req.assert('nomeencargo', 'nomeencargo é um dado obrigatório. Informe por favor!').notEmpty();
		req.assert('taxapercentualmes', 'taxapercentualmes é um dado obrigatório. Informe por favor!').notEmpty();
		req.assert('status', 'status é um dado obrigatório. Informe por favor!').notEmpty();

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
	  path: '/DemostrativodeEncargoseImpostos',
	  method: 'POST',
	  headers: {
	    'Content-Type': 'application/json',
	    'Content-Length': data.length
	  }
	}
	if (dadosForm.codigo > 0){
		options.path = "/DemostrativodeEncargoseImpostos/"+data.idencargoimposto;
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
		status: req.body.status,
		}
		req.assert('empresa', 'empresa é um dado obrigatório. Informe por favor!').notEmpty();
		req.assert('idtipodeencargo', 'idtipodeencargo é um dado obrigatório. Informe por favor!').notEmpty();
		req.assert('idencargoimposto', 'idencargoimposto é um dado obrigatório. Informe por favor!').notEmpty();
		req.assert('nomeencargo', 'nomeencargo é um dado obrigatório. Informe por favor!').notEmpty();
		req.assert('taxapercentualmes', 'taxapercentualmes é um dado obrigatório. Informe por favor!').notEmpty();
		req.assert('status', 'status é um dado obrigatório. Informe por favor!').notEmpty();

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
	  path: '/DemostrativodeEncargoseImpostos',
	  method: 'POST',
	  headers: {
	    'Content-Type': 'application/json',
	    'Content-Length': data.length
	  }
	}
	if (dadosForm.iddemonstrativoencargosimpostos > 0){
		options.path = "/DemostrativodeEncargoseImpostos/"+dadosForm.idencargoimposto;
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
	var encargoseimpostos = {
		empresa: parseInt(req.query.empresa),
		idtipodeencargo: parseInt(req.query.idtipodeencargo),
		idencargoimposto: parseInt(req.query.idencargoimposto),
		nomeencargo: req.query.nomeencargo,
		taxapercentualmes: req.query.taxapercentualmes,
		status: parseInt(req.query.status)
		}
		req.assert('empresa', 'empresa é um dado obrigatório. Informe por favor!').notEmpty();
		req.assert('idtipodeencargo', 'idtipodeencargo é um dado obrigatório. Informe por favor!').notEmpty();
		req.assert('idencargoimposto', 'idencargoimposto é um dado obrigatório. Informe por favor!').notEmpty();
		req.assert('nomeencargo', 'nomeencargo é um dado obrigatório. Informe por favor!').notEmpty();
		req.assert('taxapercentualmes', 'taxapercentualmes é um dado obrigatório. Informe por favor!').notEmpty();
		req.assert('status', 'Status é um dado obrigatório. Informe por favor!').notEmpty();

	var erros = req.validationErrors();
	
	if(erros){
		//console.log(erros);
		res.render("customaoobra/demonstrativoencargosimpostos", {validacao:erros,Demonstrativoencargosimpostos:encargoseimpostos,msg:null});
		return;
	}
	
	//var sql = "Insert Into demonstrativoencargosimpostos(nomedemonstrativoencargosimpostos, sigla, versao, url) values ('"+req.body.nomedemonstrativoencargosimpostos+"','"+req.body.sigla+"','"+req.body.versao+"','"+req.body.url+"')";
	const http = require('http')

	const data = JSON.stringify(encargoseimpostos)
	
	//console.log(req);
	const options = {
	  hostname: 'localhost',
	  port: 4040,
	  path: '/DemostrativodeEncargoseImpostos',
	  method: 'post',
	  headers: {
	    'Content-Type': 'application/json',
	    'Content-Length': data.length
	  }
	}
	console.log(data.idencargoimposto);
	if (parseInt(encargoseimpostos.idencargoimposto) > 0){
		options.path = '/DemostrativodeEncargoseImpostos/'+parseInt(encargoseimpostos.idencargoimposto);
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
	    //res.render('customaoobra/demonstrativoencargosimpostos', {validacao:[],Demonstrativoencargosimpostos:encargoseimpostos,msg:'Alterado com sucesso!'});
	    res.redirect('/DemonstrativoDespesas');
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
	
	const id = req.query.idencargoimposto;
	var dadosForm = req.query;
	var demonstrativodeencargoseimpostos = {
		empresa: req.body.empresa,
		idtipodeencargo: req.body.idtipodeencargo,
		idencargoimposto: req.body.idencargoimposto,
		nomeencargo: req.body.nomeencargo,
		taxapercentualmes: req.body.taxapercentualmes,
		status: req.body.status,
		}
		req.assert('empresa', 'empresa é um dado obrigatório. Informe por favor!').notEmpty();
		req.assert('idtipodeencargo', 'idtipodeencargo é um dado obrigatório. Informe por favor!').notEmpty();
		req.assert('idencargoimposto', 'idencargoimposto é um dado obrigatório. Informe por favor!').notEmpty();
		req.assert('nomeencargo', 'nomeencargo é um dado obrigatório. Informe por favor!').notEmpty();
		req.assert('taxapercentualmes', 'taxapercentualmes é um dado obrigatório. Informe por favor!').notEmpty();
		req.assert('status', 'status é um dado obrigatório. Informe por favor!').notEmpty();

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
	  path: '/DemostrativodeEncargoseImpostos/'+data.idencargoimposto,
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
	    //res.render('customaoobra/demonstrativoencargosimpostos', {validacao:[],Demonstrativoencargosimpostos:demonstrativoencargosimpostos,msg:'Exclusao processada com sucesso!'});
	    res.redirect('/DemonstrativoDespesas');
	  })
	})

	wreq.on('error', error => {
	  console.error(error)
	})

	wreq.write(data)
	wreq.end()
};