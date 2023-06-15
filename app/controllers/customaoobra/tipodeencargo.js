module.exports.cadtipodeencargo = function(application, req, res){
	
	res.render('customaoobra/tipodeencargo', {validacao:[],Tiposdeencargo:[],msg:null});
}
module.exports.listartipodeencargo = function(application, req, res){
	//console.log(req)
	//const data = JSON.stringify(req.query)
	const http = require('http')
	const options = {
	  hostname: 'localhost',
	  port: 4040,
	  path:'/TipodeEncargo',
	  method: 'GET',
	  headers: {'Accept' : 'application/json'}
	}

	const wreq = http.request(options, wres => {
	 // console.log(`statusCode: ${wres.statusCode}`)

	  wres.on('data', d => {
	  	 var wdata = JSON.parse(d);
	  	 res.render('customaoobra/tiposdeencargo', {validacao:[],Tiposdeencargo:wdata,msg:null});
		})
	  })
		wreq.on('error', error => {
		  console.error(error)
		})
	//wreq.write(data)
	wreq.end()
}
module.exports.pesquisartipodeencargo = function(application, req, res){
	var dadosForm = req.query
	const data = JSON.stringify(req.query)
	//console.log(req)
	const http = require('http')
	const options = {
	  hostname: 'localhost',
	  port: 4040,
	  path:'/api/pesquisartipodeencargo?nometipodeencargo='+dadosForm.nometipodeencargo.replace(" ","%20")+"&status="+dadosForm.status,
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
	  	 res.render('customaoobra/tipodeencargo', {validacao:[],Tiposdeencargo:wdata,msg:null});
		})
	  })
		wreq.on('error', error => {
		  console.error(error)
		})
	//wreq.write(data)
	wreq.end()
}
// Post a tipodeencargo
module.exports.create = function(application, req, res){	
	// Save to PostgreSQL database
	var dadosForm = req.body;
	
	var tipodeencargo = {
		idTiposdeencargo: req.body.idtipodeencargo,
		descricao: req.body.descricao,
		}
		req.assert('idtipodeencargo', 'idtipodeencargo é um dado obrigatório. Informe por favor!').notEmpty();
		req.assert('descricao', 'descricao é um dado obrigatório. Informe por favor!').notEmpty();

	 var erros = req.validationErrors();
	
	if(erros){
		console.log(erros);
		res.render("customaoobra/tipodeencargo", {validacao:erros,Tiposdeencargo:tipodeencargo,msg:null});
		return;
	}
	
	const http = require('http')

	const data = JSON.stringify(tipodeencargo)

	const options = {
	  hostname: 'localhost',
	  port: 4040,
	  path: '/TipodeEncargo',
	  method: 'POST',
	  headers: {
	    'Content-Type': 'application/json',
	    'Content-Length': data.length
	  }
	}
	if (dadosForm.idtipodeencargo > 0){
		options.path = "/TipodeEncargo/"+dadosForm.idtipodeencargo;
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
	  	res.redirect('/TipodeEncargo');
	    //res.render('customaoobra/tipodeencargo', {validacao:[],Tiposdeencargo:tipodeencargo,msg:null});
	  })
	})

	wreq.on('error', error => {
	  console.error(error)
	})

	wreq.write(data)
	wreq.end()

};
// FETCH All tipodeencargo
module.exports.findAll = function (application,req, res)  {	
	
};
// Find a tipodeencargo by Id
module.exports.findById = function (application,req, res)  {	
		
};
// Update a tipodeencargo
// Put a tipodeencargo
module.exports.validartipodeencargo = function(application, req, res){
	//console.log(req.body)
	var dadosForm = req.body;
	
	var tipodeencargo = {
		idTiposdeencargo: req.body.idtipodeencargo,
		descricao: req.body.descricao,
		}
		req.assert('idtipodeencargo', 'idtipodeencargo é um dado obrigatório. Informe por favor!').notEmpty();
		req.assert('descricao', 'descricao é um dado obrigatório. Informe por favor!').notEmpty();

	var erros = req.validationErrors();
	
	if(erros){
		//console.log(erros);
		res.render("customaoobra/tipodeencargo", {validacao:erros,Tiposdeencargo:tipodeencargo,msg:null});
		return;
	}
	
	//var sql = "Insert Into tipodeencargo(nometipodeencargo, sigla, versao, url) values ('"+req.body.nometipodeencargo+"','"+req.body.sigla+"','"+req.body.versao+"','"+req.body.url+"')";
	const http = require('http')

	const data = JSON.stringify(tipodeencargo)

	const options = {
	  hostname: 'localhost',
	  port: 4040,
	  path: '/TipodeEncargo',
	  method: 'POST',
	  headers: {
	    'Content-Type': 'application/json',
	    'Content-Length': data.length
	  }
	}
	if (dadosForm.idtipodeencargo > 0){
		options.path = "/TipodeEncargo/"+dadosForm.idtipodeencargo;
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
	  	res.redirect('/TipodeEncargo');
	    //res.render('customaoobra/tipodeencargo', {validacao:[],Tiposdeencargo:tipodeencargo,msg:'Inclusao com sucesso!'});
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
	var tipodeencargo = {
		idTiposdeencargo: req.body.idtipodeencargo,
		descricao: req.body.descricao,
		}
		req.assert('idtipodeencargo', 'idtipodeencargo é um dado obrigatório. Informe por favor!').notEmpty();
		req.assert('descricao', 'descricao é um dado obrigatório. Informe por favor!').notEmpty();

	var erros = req.validationErrors();
	
	if(erros){
		//console.log(erros);
		res.render("customaoobra/tipodeencargo", {validacao:erros,Tiposdeencargo:tipodeencargo,msg:null});
		return;
	}
	
	//var sql = "Insert Into tipodeencargo(nometipodeencargo, sigla, versao, url) values ('"+req.body.nometipodeencargo+"','"+req.body.sigla+"','"+req.body.versao+"','"+req.body.url+"')";
	const http = require('http')

	const data = JSON.stringify(tipodeencargo)
	
	//console.log(req);
	const options = {
	  hostname: 'localhost',
	  port: 4040,
	  path: '/TipodeEncargo/',
	  method: 'post',
	  headers: {
	    'Content-Type': 'application/json',
	    'Content-Length': data.length
	  }
	}
	if (tipodeencargo.idtipodeencargo > 0){
		options.path = "/TipodeEncargo/"+data.idtipodeencargo;
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
	  	res.redirect('/TipodeEncargo');
	    //res.render('customaoobra/tipodeencargo', {validacao:[],Tiposdeencargo:tipodeencargo,msg:'Alterado com sucesso!'});
	  })
	})

	wreq.on('error', error => {
	  console.error(error)
	})

	wreq.write(data)
	wreq.end()
};

// Delete a tipodeencargo by Id
module.exports.delete = function (application,req, res) {
	
	const id = req.query.codigo;
	var dadosForm = req.query;
	var tipodeencargo = {
		idTiposdeencargo: req.body.idtipodeencargo,
		descricao: req.body.descricao,
		}
		req.assert('idtipodeencargo', 'idtipodeencargo é um dado obrigatório. Informe por favor!').notEmpty();
		req.assert('descricao', 'descricao é um dado obrigatório. Informe por favor!').notEmpty();


	var erros = req.validationErrors();
	
	if(erros){
		console.log(erros);
		res.render("customaoobra/tipodeencargo", {validacao:erros,Tiposdeencargo:tipodeencargo,msg:null});
		return;
	}
	
	//var sql = "Insert Into tipodeencargo(nometipodeencargo, sigla, versao, url) values ('"+req.body.nometipodeencargo+"','"+req.body.sigla+"','"+req.body.versao+"','"+req.body.url+"')";
	const http = require('http')

	const data = JSON.stringify(tipodeencargo)

	const options = {
	  hostname: 'localhost',
	  port: 4040,
	  path: '/TipodeEncargo/'+data.idtipodeencargo,
	  method: 'delete',
	  headers: {
	    'Content-Type': 'application/json',
	    'Content-Length': data.length
	  }
	}
	
	const wreq = http.request(options, wres => {
	 // console.log(`statusCode: ${res.statusCode}`)
	  wres.on('data', d => {
	  	res.redirect('/TipodeEncargo');
	    //res.render('customaoobra/tipodeencargo', {validacao:[],Tiposdeencargo:tipodeencargo,msg:'Exclusao processada com sucesso!'});
	  })
	})

	wreq.on('error', error => {
	  console.error(error)
	})

	wreq.write(data)
	wreq.end()
};