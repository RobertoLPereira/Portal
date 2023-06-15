module.exports.cadencargossociaisbasicos = function(application, req, res){
	
	res.render('customaoobra/encargossociaisbasicos', {validacao:[],EncargosSociais:[],msg:null});
}
module.exports.listarencargossociaisbasicos = function(application, req, res){
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
		  	 Encargos(application,req,res,cli,wdata);
			})
		  })
			wreq.on('error', error => {
			  console.error(error)
			})
		//wreq.write(data)
		wreq.end()
	}

	function Encargos(application,req,res,cli,tipo){
	const http = require('http')
	const options = {
	  hostname: 'localhost',
	  port: 4040,
	  path:'/EncargosSociaisBasicos',
	  method: 'GET',
	  headers: {'Accept' : 'application/json'}
	}

	const wreq = http.request(options, wres => {
	  console.log(`statusCode: ${wres.statusCode}`)

	  wres.on('data', d => {
	  	 var wdata = JSON.parse(d);
	  	 res.render('customaoobra/encargossociaisbasicos', {validacao:[],EncargosSociais:wdata,Clientes:cli,TipodeEncargo:tipo,msg:null});
		})
	  })
		wreq.on('error', error => {
		  console.error(error)
		})
	//wreq.write(data)
	wreq.end()
}
}
module.exports.pesquisarencargossociaisbasicos = function(application, req, res){
	var dadosForm = req.query
	const data = JSON.stringify(req.query)
	//console.log(req)
	const http = require('http')
	const options = {
	  hostname: 'localhost',
	  port: 4040,
	  path:'/EncargosSociaisBasicos?nomeencargossociaisbasicos='+dadosForm.nomeencargossociaisbasicos.replace(" ","%20")+"&status="+dadosForm.status,
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
	  	 res.render('customaoobra/encargossociaisbasicos', {validacao:[],EncargosSociais:wdata,msg:null});
		})
	  })
		wreq.on('error', error => {
		  console.error(error)
		})
	//wreq.write(data)
	wreq.end()
}
// Post a encargossociaisbasicos
module.exports.create = function(application, req, res){	
	// Save to PostgreSQL database
	var dadosForm = req.body;
	
	var encargossociaisbasicos = {
		empresa: req.body.empresa,
		idtipodeencargo: req.body.idtipodeencargo,
		codigoencargo: req.body.codigoencargo,
		nomeencargo: req.body.nomeencargo,
		quantdias: req.body.quantdias,
		taxapercentualmes: req.body.taxapercentualmes,
		codigocliente: req.body.codigocliente,
		status: req.body.status
		}
		req.assert('empresa', 'empresa é um dado obrigatório. Informe por favor!').notEmpty();
		req.assert('idtipodeencargo', 'idtipodeencargo é um dado obrigatório. Informe por favor!').notEmpty();
		req.assert('codigoencargo', 'codigoencargo é um dado obrigatório. Informe por favor!').notEmpty();
		req.assert('nomeencargo', 'nomeencargo é um dado obrigatório. Informe por favor!').notEmpty();
		req.assert('quantdias', 'quantdias é um dado obrigatório. Informe por favor!').notEmpty();
		req.assert('taxapercentualmes', 'taxapercentualmes é um dado obrigatório. Informe por favor!').notEmpty();
		req.assert('codigocliente', 'codigocliente é um dado obrigatório. Informe por favor!').notEmpty();
		req.assert('status', 'Status é um dado obrigatório. Informe por favor!').notEmpty();
	
	 var erros = req.validationErrors();
	
	if(erros){
		console.log(erros);
		res.render("customaoobra/encargossociaisbasicos", {validacao:erros,Encargossociaisbasicos:encargossociaisbasicos,Clientes:[],TipodeEncargo:[],msg:null});
		return;
	}
	
	const http = require('http')

	const data = JSON.stringify(encargossociaisbasicos)

	const options = {
	  hostname: 'localhost',
	  port: 4040,
	  path: '/EncargosSociaisBasico',
	  method: 'POST',
	  headers: {
	    'Content-Type': 'application/json',
	    'Content-Length': data.length
	  }
	}
	if (dadosForm.codigo > 0){
		options.path = '/EncargosSociaisBasico/'+data.empresa+"/"+data.idtipodeencargo+"/"+data.codigoencargo;
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
	  	//res.status(200).json({idencargossociaisbasicos:dadosForm.idencargossociaisbasicos,nomeencargossociaisbasicos:dadosForm.nomeencargossociaisbasicos,sigla:dadosForm.sigla,versao:dadosForm.versao,url:dadosForm.url,status:dadosForm.status});
	    res.render('customaoobra/encargossociaisbasicos', {validacao:[],EncargosSociais:encargossociaisbasicos,msg:null});
	  })
	})

	wreq.on('error', error => {
	  console.error(error)
	})

	wreq.write(data)
	wreq.end()

};
// FETCH All encargossociaisbasicos
module.exports.findAll = function (application,req, res)  {	
	
};
// Find a encargossociaisbasicos by Id
module.exports.findById = function (application,req, res)  {	
		
};
// Update a encargossociaisbasicos
// Put a encargossociaisbasicos
module.exports.validarencargossociaisbasicos = function(application, req, res){
	//console.log(req.body)
	var dadosForm = req.body;
	
	var encargossociaisbasicos = {
		empresa: req.body.empresa,
		idtipodeencargo: req.body.idtipodeencargo,
		codigoencargo: req.body.codigoencargo,
		nomeencargo: req.body.nomeencargo,
		quantdias: req.body.quantdias,
		taxapercentualmes: req.body.taxapercentualmes,
		codigocliente: req.body.codigocliente,
		//upsize_ts: req.body.upsize_ts
		}
		req.assert('empresa', 'empresa é um dado obrigatório. Informe por favor!').notEmpty();
		req.assert('idtipodeencargo', 'idtipodeencargo é um dado obrigatório. Informe por favor!').notEmpty();
		req.assert('codigoencargo', 'codigoencargo é um dado obrigatório. Informe por favor!').notEmpty();
		req.assert('nomeencargo', 'nomeencargo é um dado obrigatório. Informe por favor!').notEmpty();
		req.assert('quantdias', 'quantdias é um dado obrigatório. Informe por favor!').notEmpty();
		req.assert('taxapercentualmes', 'taxapercentualmes é um dado obrigatório. Informe por favor!').notEmpty();
		req.assert('codigocliente', 'codigocliente é um dado obrigatório. Informe por favor!').notEmpty();
		req.assert('status', 'Status é um dado obrigatório. Informe por favor!').notEmpty();
			
	var erros = req.validationErrors();
	
	if(erros){
		//console.log(erros);
		res.render("customaoobra/encargossociaisbasicos", {validacao:erros,Encargossociaisbasicos:encargossociaisbasicos,Clientes:[],TipodeEncargo:[],msg:null});
		return;
	}
	
	//var sql = "Insert Into encargossociaisbasicos(nomeencargossociaisbasicos, sigla, versao, url) values ('"+req.body.nomeencargossociaisbasicos+"','"+req.body.sigla+"','"+req.body.versao+"','"+req.body.url+"')";
	const http = require('http')

	const data = JSON.stringify(encargossociaisbasicos)

	const options = {
	  hostname: 'localhost',
	  port: 4040,
	  path: '/EncargosSociaisBasico',
	  method: 'POST',
	  headers: {
	    'Content-Type': 'application/json',
	    'Content-Length': data.length
	  }
	}
	if (dadosForm.idencargossociaisbasicos > 0){
		options.path = '/EncargosSociaisBasico/'+data.empresa+"/"+data.idtipodeencargo+"/"+data.codigoencargo;
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
	  	//res.status(200).json({idencargossociaisbasicos:dadosForm.idencargossociaisbasicos,nomeencargossociaisbasicos:dadosForm.nomeencargossociaisbasicos,sigla:dadosForm.sigla,versao:dadosForm.versao,url:dadosForm.url,status:dadosForm.status});
	    res.render('customaoobra/encargossociaisbasicos', {validacao:[],EncargosSociais:encargossociaisbasicos,Clientes:[],TipodeEncargo:[],msg:'Inclusao com sucesso!'});
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
	var encargossociaisbasicos = {
		empresa: req.query.empresa,
		idtipodeencargo: req.query.idtipodeencargo,
		codigoencargo: req.query.codigoencargo,
		nomeencargo: req.query.nomeencargo,
		quantdias: req.query.quantdias,
		taxapercentualmes: req.query.taxapercentualmes,
		codigocliente: req.query.codigocliente,
		status: req.query.status
		}
		req.assert('empresa', 'empresa é um dado obrigatório. Informe por favor!').notEmpty();
		req.assert('idtipodeencargo', 'idtipodeencargo é um dado obrigatório. Informe por favor!').notEmpty();
		req.assert('codigoencargo', 'codigoencargo é um dado obrigatório. Informe por favor!').notEmpty();
		req.assert('nomeencargo', 'nomeencargo é um dado obrigatório. Informe por favor!').notEmpty();
		req.assert('quantdias', 'quantdias é um dado obrigatório. Informe por favor!').notEmpty();
		req.assert('taxapercentualmes', 'taxapercentualmes é um dado obrigatório. Informe por favor!').notEmpty();
		req.assert('codigocliente', 'codigocliente é um dado obrigatório. Informe por favor!').notEmpty();
		req.assert('status', 'status é um dado obrigatório. Informe por favor!').notEmpty();
			
	var erros = req.validationErrors();
	
	if(erros){
		//console.log(erros);
		res.render("customaoobra/encargossociaisbasicos", {validacao:erros,Encargossociaisbasicos:encargossociaisbasicos,Clientes:[],TipodeEncargo:[],msg:null});
		return;
	}
	
	//var sql = "Insert Into encargossociaisbasicos(nomeencargossociaisbasicos, sigla, versao, url) values ('"+req.body.nomeencargossociaisbasicos+"','"+req.body.sigla+"','"+req.body.versao+"','"+req.body.url+"')";
	const http = require('http')

	const data = JSON.stringify(encargossociaisbasicos)
	
	//console.log(req);
	const options = {
	  hostname: 'localhost',
	  port: 4040,
	  path: '/EncargosSociaisBasico',
	  method: 'post',
	  headers: {
	    'Content-Type': 'application/json',
	    'Content-Length': data.length
	  }
	}
	if (encargossociaisbasicos.codigoencargo > 0){
		options.path = '/EncargosSociaisBasico/'+data.empresa+"/"+data.idtipodeencargo+"/"+data.codigoencargo;
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
	  	//res.status(200).json({idencargossociaisbasicos:dadosForm.idencargossociaisbasicos,nomeencargossociaisbasicos:dadosForm.nomeencargossociaisbasicos,sigla:dadosForm.sigla,versao:dadosForm.versao,url:dadosForm.url,status:dadosForm.status});
	    res.render('customaoobra/encargossociaisbasicos', {validacao:[],EncargosSociais:encargossociaisbasicos,Clientes:[],TipodeEncargo:[],msg:'Alterado com sucesso!'});
	  })
	})

	wreq.on('error', error => {
	  console.error(error)
	})

	wreq.write(data)
	wreq.end()
};

// Delete a encargossociaisbasicos by Id
module.exports.delete = function (application,req, res) {
	
	const id = req.query.codigo;
	var dadosForm = req.query;
	var encargossociaisbasicos = {
		empresa: req.body.empresa,
		idtipodeencargo: req.body.idtipodeencargo,
		codigoencargo: req.body.codigoencargo,
		nomeencargo: req.body.nomeencargo,
		quantdias: req.body.quantdias,
		taxapercentualmes: req.body.taxapercentualmes,
		codigocliente: req.body.codigocliente,
		status: req.body.status
		}
		req.assert('empresa', 'empresa é um dado obrigatório. Informe por favor!').notEmpty();
		req.assert('idtipodeencargo', 'idtipodeencargo é um dado obrigatório. Informe por favor!').notEmpty();
		req.assert('codigoencargo', 'codigoencargo é um dado obrigatório. Informe por favor!').notEmpty();
		/*req.assert('nomeencargo', 'nomeencargo é um dado obrigatório. Informe por favor!').notEmpty();
		req.assert('quantdias', 'quantdias é um dado obrigatório. Informe por favor!').notEmpty();
		req.assert('taxapercentualmes', 'taxapercentualmes é um dado obrigatório. Informe por favor!').notEmpty();
		req.assert('codigocliente', 'codigocliente é um dado obrigatório. Informe por favor!').notEmpty();
		*/
		
	var erros = req.validationErrors();
	
	if(erros){
		console.log(erros);
		res.render("customaoobra/encargossociaisbasicos", {validacao:erros,Encargossociaisbasicos:encargossociaisbasicos,Clientes:[],TipodeEncargo:[],msg:null});
		return;
	}
	
	//var sql = "Insert Into encargossociaisbasicos(nomeencargossociaisbasicos, sigla, versao, url) values ('"+req.body.nomeencargossociaisbasicos+"','"+req.body.sigla+"','"+req.body.versao+"','"+req.body.url+"')";
	const http = require('http')

	const data = JSON.stringify(dadosForm)

	const options = {
	  hostname: 'localhost',
	  port: 4040,
	  path: '/EncargosSociaisBasico/'+data.empresa+"/"+data.idtipodeencargo+"/"+data.codigoencargo,
	  method: 'delete',
	  headers: {
	    'Content-Type': 'application/json',
	    'Content-Length': data.length
	  }
	}
	
	const wreq = http.request(options, wres => {
	 // console.log(`statusCode: ${res.statusCode}`)
	  wres.on('data', d => {
	  	//res.status(200).json({idencargossociaisbasicos:dadosForm.idencargossociaisbasicos,nomeencargossociaisbasicos:dadosForm.nomeencargossociaisbasicos,sigla:dadosForm.sigla,versao:dadosForm.versao,url:dadosForm.url,status:dadosForm.status});
	    res.render('customaoobra/encargossociaisbasicos', {validacao:[],EncargosSociais:encargossociaisbasicos,Clientes:[],TipodeEncargo:[],msg:'Exclusao processada com sucesso!'});
	  })
	})

	wreq.on('error', error => {
	  console.error(error)
	})

	wreq.write(data)
	wreq.end()
};