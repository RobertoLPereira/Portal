module.exports.cadtipodespesa = function(application, req, res){
	
	res.render('customaoobra/tipodespesa', {validacao:[],Tipodespesa:[],msg:null});
}
module.exports.listartipodespesa = function(application, req, res){
	//console.log(req)
	//const data = JSON.stringify(req.query)
	const http = require('http')
	const options = {
	  hostname: 'localhost',
	  port: 4040,
	  path:'/TipoDespesas',
	  method: 'GET',
	  headers: {'Accept' : 'application/json'}
	}

	const wreq = http.request(options, wres => {
	 // console.log(`statusCode: ${wres.statusCode}`)

	  wres.on('data', d => {
	  	 var wdata = JSON.parse(d);
	  	 res.render('customaoobra/tipodespesa', {validacao:[],Tipodespesa:wdata,msg:null});
		})
	  })
		wreq.on('error', error => {
		  console.error(error)
		})
	//wreq.write(data)
	wreq.end()
}
module.exports.pesquisartipodespesa = function(application, req, res){
	var dadosForm = req.query
	const data = JSON.stringify(req.query)
	//console.log(req)
	const http = require('http')
	const options = {
	  hostname: 'localhost',
	  port: 4040,
	  path:'/TipoDespesas?descricao='+dadosForm.descricao.replace(" ","%20"),
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
	  	 res.render('customaoobra/tipodespesa', {validacao:[],Tipodespesa:wdata,msg:null});
		})
	  })
		wreq.on('error', error => {
		  console.error(error)
		})
	//wreq.write(data)
	wreq.end()
}
// Post a tipodespesa
module.exports.create = function(application, req, res){	
	// Save to PostgreSQL database
	var dadosForm = req.body;
	
	var tipodespesa = {
		idtipodespesa: 0,
		descricao: req.body.descricao,
		}
		req.assert('idtipodespesa', 'idtipodespesa é um dado obrigatório. Informe por favor!').notEmpty();
		req.assert('descricao', 'descricao é um dado obrigatório. Informe por favor!').notEmpty();

	 var erros = req.validationErrors();
	
	if(erros){
		console.log(erros);
		res.render("customaoobra/tipodespesa", {validacao:erros,Tipodespesa:tipodespesa,msg:null});
		return;
	}
	
	const http = require('http')

	const data = JSON.stringify(tipodespesa)

	const options = {
	  hostname: 'localhost',
	  port: 4040,
	  path: '/TipoDespesa',
	  method: 'POST',
	  headers: {
	    'Content-Type': 'application/json',
	    'Content-Length': data.length
	  }
	}
	if (dadosForm.idtipodespesa > 0){
		options.path = "/TipoDespesa/"+data.idtipodespesa;
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
	  	res.redirect('/TipoDespesas');
	    //res.render('customaoobra/tipodespesa', {validacao:[],Tipodespesa:tipodespesa,msg:null});
	  })
	})

	wreq.on('error', error => {
	  console.error(error)
	})

	wreq.write(data)
	wreq.end()

};
// FETCH All tipodespesa
module.exports.findAll = function (application,req, res)  {	
	
};
// Find a tipodespesa by Id
module.exports.findById = function (application,req, res)  {	
		
};
// Update a tipodespesa
// Put a tipodespesa
module.exports.validartipodespesa = function(application, req, res){
	//console.log(req.body)
	var dadosForm = req.body;
	
	var tipodespesa = {
		idtipodespesa: req.body.idtipodespesa,
		descricao: req.body.descricao,
		}
		req.assert('idtipodespesa', 'idtipodespesa é um dado obrigatório. Informe por favor!').notEmpty();
		req.assert('descricao', 'descricao é um dado obrigatório. Informe por favor!').notEmpty();

	var erros = req.validationErrors();
	
	if(erros){
		//console.log(erros);
		res.render("customaoobra/tipodespesa", {validacao:erros,Tipodespesa:tipodespesa,msg:null});
		return;
	}
	
	//var sql = "Insert Into tipodespesa(nometipodespesa, sigla, versao, url) values ('"+req.body.nometipodespesa+"','"+req.body.sigla+"','"+req.body.versao+"','"+req.body.url+"')";
	const http = require('http')

	const data = JSON.stringify(tipodespesa)

	const options = {
	  hostname: 'localhost',
	  port: 4040,
	  path: '/TipoDespesa/'+parseInt(tipodespesa.idtipodespesa),
	  method: 'POST',
	  headers: {
	    'Content-Type': 'application/json',
	    'Content-Length': data.length
	  }
	}
	if (dadosForm.idtipodespesa > 0){
		options.path = "/TipoDespesa/"+data.idtipodespesa;
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
	  	//res.status(200).json({idtipodespesa:dadosForm.idtipodespesa,nometipodespesa:dadosForm.nometipodespesa,sigla:dadosForm.sigla,versao:dadosForm.versao,url:dadosForm.url,status:dadosForm.status});
	    res.render('customaoobra/tipodespesa', {validacao:[],Tipodespesa:tipodespesa,msg:'Inclusao com sucesso!'});
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
	var tipodespesa = {
		idtipodespesa: req.query.idtipodespesa,
		descricao: req.query.descricao,
		}
		req.assert('idtipodespesa', 'idtipodespesa é um dado obrigatório. Informe por favor!').notEmpty();
		req.assert('descricao', 'descricao é um dado obrigatório. Informe por favor!').notEmpty();

	var erros = req.validationErrors();
	
	if(erros){
		//console.log(erros);
		res.render("customaoobra/tipodespesa", {validacao:erros,Tipodespesa:tipodespesa,msg:null});
		return;
	}
	
	//var sql = "Insert Into tipodespesa(nometipodespesa, sigla, versao, url) values ('"+req.body.nometipodespesa+"','"+req.body.sigla+"','"+req.body.versao+"','"+req.body.url+"')";
	const http = require('http')

	const data = JSON.stringify(tipodespesa)
	
	//console.log(req);
	const options = {
	  hostname: 'localhost',
	  port: 4040,
	  path: '/TipoDespesa'+parseInt(tipodespesa.idtipodespesa),
	  method: 'post',
	  headers: {
	    'Content-Type': 'application/json',
	    'Content-Length': data.length
	  }
	}
	if (tipodespesa.idtipodespesa > 0){
		options.path = "/TipoDespesa/"+tipodespesa.idtipodespesa;
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
	  	res.redirect('/TipoDespesas');
	    //res.render('customaoobra/tipodespesa', {validacao:[],Tipodespesa:tipodespesa,msg:'Alterado com sucesso!'});
	  })
	})

	wreq.on('error', error => {
	  console.error(error)
	})

	wreq.write(data)
	wreq.end()
};

// Delete a tipodespesa by Id
module.exports.delete = function (application,req, res) {
	
	const id = req.query.codigo;
	var dadosForm = req.query;
	var tipodespesa = {
		idtipodespesa: req.body.idtipodespesa,
		descricao: req.body.descricao,
		}
		req.assert('idtipodespesa', 'idtipodespesa é um dado obrigatório. Informe por favor!').notEmpty();
		req.assert('descricao', 'descricao é um dado obrigatório. Informe por favor!').notEmpty();


	var erros = req.validationErrors();
	
	if(erros){
		console.log(erros);
		res.render("customaoobra/tipodespesa", {validacao:erros,Tipodespesa:tipodespesa,msg:null});
		return;
	}
	
	//var sql = "Insert Into tipodespesa(nometipodespesa, sigla, versao, url) values ('"+req.body.nometipodespesa+"','"+req.body.sigla+"','"+req.body.versao+"','"+req.body.url+"')";
	const http = require('http')

	const data = JSON.stringify(tipodespesa)

	const options = {
	  hostname: 'localhost',
	  port: 4040,
	  path: '/TipoDespesa/'+parseInt(tipodespesa.idtipodespesa),
	  method: 'delete',
	  headers: {
	    'Content-Type': 'application/json',
	    'Content-Length': data.length
	  }
	}
	
	const wreq = http.request(options, wres => {
	 // console.log(`statusCode: ${res.statusCode}`)
	  wres.on('data', d => {
	  	res.redirect('/TipoDespesas');
	    //res.render('customaoobra/tipodespesa', {validacao:[],Tipodespesa:tipodespesa,msg:'Exclusao processada com sucesso!'});
	  })
	})

	wreq.on('error', error => {
	  console.error(error)
	})

	wreq.write(data)
	wreq.end()
};