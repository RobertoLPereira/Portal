module.exports.cadtipodeinvestimento = function(application, req, res){
	
	res.render('customaoobra/tipodeinvestimento', {validacao:[],Tipodeinvestimento:[],msg:null});
}
module.exports.listartipodeinvestimento = function(application, req, res){
	//console.log(req)
	//const data = JSON.stringify(req.query)
	const http = require('http')
	const options = {
	  hostname: 'localhost',
	  port: 4040,
	  path:'/tipodeinvestimento',
	  method: 'GET',
	  headers: {'Accept' : 'application/json'}
	}

	const wreq = http.request(options, wres => {
	 // console.log(`statusCode: ${wres.statusCode}`)

	  wres.on('data', d => {
	  	 var wdata = JSON.parse(d);
	  	 res.render('customaoobra/tipodeinvestimento', {validacao:[],Tipodeinvestimento:wdata,msg:null});
		})
	  })
		wreq.on('error', error => {
		  console.error(error)
		})
	//wreq.write(data)
	wreq.end()
}
module.exports.pesquisartipodeinvestimento = function(application, req, res){
	var dadosForm = req.query
	const data = JSON.stringify(req.query)
	//console.log(req)
	const http = require('http')
	const options = {
	  hostname: 'localhost',
	  port: 4040,
	  path:'/TipodeInvestimento?nometipodeinvestimento='+dadosForm.nometipodeinvestimento.replace(" ","%20")+"&status="+dadosForm.status,
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
	  	 res.redirect('/TipodeInvestimento');
	  	 //res.render('customaoobra/tipodeinvestimento', {validacao:[],Tipodeinvestimento:wdata,msg:null});
		})
	  })
		wreq.on('error', error => {
		  console.error(error)
		})
	//wreq.write(data)
	wreq.end()
}
// Post a tipodeinvestimento
module.exports.create = function(application, req, res){	
	// Save to PostgreSQL database
	var dadosForm = req.body;
	
	var tipodeinvestimento = {
		idtipoinvestimento: req.body.idtipoinvestimento,
		descricao: req.body.descricao,
		}
		req.assert('idtipoinvestimento', 'idtipoinvestimento é um dado obrigatório. Informe por favor!').notEmpty();
		req.assert('descricao', 'descricao é um dado obrigatório. Informe por favor!').notEmpty();

	 var erros = req.validationErrors();
	
	if(erros){
		console.log(erros);
		res.render("customaoobra/tipodeinvestimento", {validacao:erros,Tipodeinvestimento:tipodeinvestimento,msg:null});
		return;
	}
	
	const http = require('http')

	const data = JSON.stringify(tipodeinvestimento)

	const options = {
	  hostname: 'localhost',
	  port: 4040,
	  path: '/api/inc/tipodeinvestimento',
	  method: 'POST',
	  headers: {
	    'Content-Type': 'application/json',
	    'Content-Length': data.length
	  }
	}
	if (dadosForm.codigo > 0){
		options.path = "/api/atualiza/tipodeinvestimento";
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
	  	res.redirect('/TipodeInvestimento');
	    //res.render('customaoobra/tipodeinvestimento', {validacao:[],Tipodeinvestimento:tipodeinvestimento,msg:null});
	  })
	})

	wreq.on('error', error => {
	  console.error(error)
	})

	wreq.write(data)
	wreq.end()

};
// FETCH All tipodeinvestimento
module.exports.findAll = function (application,req, res)  {	
	
};
// Find a tipodeinvestimento by Id
module.exports.findById = function (application,req, res)  {	
		
};
// Update a tipodeinvestimento
// Put a tipodeinvestimento
module.exports.validartipodeinvestimento = function(application, req, res){
	//console.log(req.body)
	var dadosForm = req.body;
	
	var tipodeinvestimento = {
		idtipoinvestimento: req.body.idtipoinvestimento,
		descricao: req.body.descricao,
		}
		req.assert('idtipoinvestimento', 'idtipoinvestimento é um dado obrigatório. Informe por favor!').notEmpty();
		req.assert('descricao', 'descricao é um dado obrigatório. Informe por favor!').notEmpty();

	var erros = req.validationErrors();
	
	if(erros){
		//console.log(erros);
		res.render("customaoobra/tipodeinvestimento", {validacao:erros,Tipodeinvestimento:tipodeinvestimento,msg:null});
		return;
	}
	
	//var sql = "Insert Into tipodeinvestimento(nometipodeinvestimento, sigla, versao, url) values ('"+req.body.nometipodeinvestimento+"','"+req.body.sigla+"','"+req.body.versao+"','"+req.body.url+"')";
	const http = require('http')

	const data = JSON.stringify(tipodeinvestimento)

	const options = {
	  hostname: 'localhost',
	  port: 4040,
	  path: '/api/inc/tipodeinvestimento',
	  method: 'POST',
	  headers: {
	    'Content-Type': 'application/json',
	    'Content-Length': data.length
	  }
	}
	if (dadosForm.idtipodeinvestimento > 0){
		options.path = "/api/atualiza/tipodeinvestimento";
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
	  	res.redirect('/TipodeInvestimento');
	    //res.render('customaoobra/tipodeinvestimento', {validacao:[],Tipodeinvestimento:tipodeinvestimento,msg:'Inclusao com sucesso!'});
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
	var tipodeinvestimento = {
		idtipoinvestimento: req.body.idtipoinvestimento,
		descricao: req.body.descricao,
		}
		req.assert('idtipoinvestimento', 'idtipoinvestimento é um dado obrigatório. Informe por favor!').notEmpty();
		req.assert('descricao', 'descricao é um dado obrigatório. Informe por favor!').notEmpty();

	var erros = req.validationErrors();
	
	if(erros){
		//console.log(erros);
		res.render("customaoobra/tipodeinvestimento", {validacao:erros,Tipodeinvestimento:tipodeinvestimento,msg:null});
		return;
	}
	
	//var sql = "Insert Into tipodeinvestimento(nometipodeinvestimento, sigla, versao, url) values ('"+req.body.nometipodeinvestimento+"','"+req.body.sigla+"','"+req.body.versao+"','"+req.body.url+"')";
	const http = require('http')

	const data = JSON.stringify(tipodeinvestimento)
	
	//console.log(req);
	const options = {
	  hostname: 'localhost',
	  port: 4040,
	  path: '/tipodeinvestimento',
	  method: 'post',
	  headers: {
	    'Content-Type': 'application/json',
	    'Content-Length': data.length
	  }
	}
	if (tipodeinvestimento.empresa > 0){
		options.path = "/tipodeinvestimento/"+tipodeinvestimento.empresa;
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
	  	res.redirect('/TipodeInvestimento');
	    //res.render('customaoobra/tipodeinvestimento', {validacao:[],Tipodeinvestimento:tipodeinvestimento,msg:'Alterado com sucesso!'});
	  })
	})

	wreq.on('error', error => {
	  console.error(error)
	})

	wreq.write(data)
	wreq.end()
};

// Delete a tipodeinvestimento by Id
module.exports.delete = function (application,req, res) {
	
	const id = req.query.codigo;
	var dadosForm = req.query;
	var tipodeinvestimento = {
		idtipoinvestimento: req.body.idtipoinvestimento,
		descricao: req.body.descricao,
		}
		req.assert('idtipoinvestimento', 'idtipoinvestimento é um dado obrigatório. Informe por favor!').notEmpty();
		req.assert('descricao', 'descricao é um dado obrigatório. Informe por favor!').notEmpty();


	var erros = req.validationErrors();
	
	if(erros){
		console.log(erros);
		res.render("customaoobra/tipodeinvestimento", {validacao:erros,Tipodeinvestimento:tipodeinvestimento,msg:null});
		return;
	}
	
	//var sql = "Insert Into tipodeinvestimento(nometipodeinvestimento, sigla, versao, url) values ('"+req.body.nometipodeinvestimento+"','"+req.body.sigla+"','"+req.body.versao+"','"+req.body.url+"')";
	const http = require('http')

	const data = JSON.stringify(tipodeinvestimento)

	const options = {
	  hostname: 'localhost',
	  port: 4040,
	  path: '/api/exc/tipodeinvestimento',
	  method: 'delete',
	  headers: {
	    'Content-Type': 'application/json',
	    'Content-Length': data.length
	  }
	}
	
	const wreq = http.request(options, wres => {
	 // console.log(`statusCode: ${res.statusCode}`)
	  wres.on('data', d => {
	  	res.redirect('/TipodeInvestimento');
	    //res.render('customaoobra/tipodeinvestimento', {validacao:[],Tipodeinvestimento:tipodeinvestimento,msg:'Exclusao processada com sucesso!'});
	  })
	})

	wreq.on('error', error => {
	  console.error(error)
	})

	wreq.write(data)
	wreq.end()
};