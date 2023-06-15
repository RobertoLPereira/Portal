module.exports.cadtransacao = function(application, req, res){
	
	res.render('modulomenu/crudtransacoes', {validacao:[],transacaos:[],msg:null});
}
module.exports.listarTransacoes = function(application, req, res){
	//console.log(req)
	//const data = JSON.stringify(req.query)
	
	const http = require('http')
	const options = {
	  hostname: 'localhost',
	  port: 8083,
	  path:'/api/todos/modulomenu',
	  method: 'GET',
	  headers: {'Accept' : 'application/json'}
	}

	const wreq = http.request(options, wres => {
	 // console.log(`statusCode: ${wres.statusCode}`)

	  wres.on('data', d => {
	  	 transacao(application, req, res,JSON.parse(d));
		})
	  })
		wreq.on('error', error => {
		  console.error(error)
		})
	//wreq.write(data)
	wreq.end()

	function transacao(application, req, res,mmnu){
		console.log(mmnu)
		const http = require('http')
		const options = {
		  hostname: 'localhost',
		  port: 8083,
		  path:'/api/todas/transacoes',
		  method: 'GET',
		  headers: {'Accept' : 'application/json'}
		}

		const wreq = http.request(options, wres => {
		 // console.log(`statusCode: ${wres.statusCode}`)

	  wres.on('data', d => {
	  	 var wdata = JSON.parse(d);
	  	 res.render('modulomenu/crudtransacoes', {validacao:[],Transacoes:wdata,ModuloMenu:mmnu,msg:null});
		})
	  })
		wreq.on('error', error => {
		  console.error(error)
		})
	//wreq.write(data)
	wreq.end()
	}
}
module.exports.pesquisartransacao = function(application, req, res){
	var dadosForm = req.query
	const data = JSON.stringify(req.query)
	//console.log(req)
	const http = require('http')
	const options = {
	  hostname: 'localhost',
	  port: 8083,
	  path:'/api/pesquisartransacao?transacao='+dadosForm.denominacao.replace(" ","%20")+"&idmodulomenu="+dadosForm.idmodulomenu,
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
	  	 res.render('modulomenu/crudtransacoes', {validacao:[],Transacoes:wdata,ModuloMenu:null,msg:null});
		})
	  })
		wreq.on('error', error => {
		  console.error(error)
		})
	//wreq.write(data)
	wreq.end()
}
// Post a transacao
module.exports.create = function(application, req, res){	
	// Save to PostgreSQL database
	var dadosForm = req.body;
	
	var wtransacao = {
		idtransacao:req.body.idtransacao,
		idmodulomenu:req.body.idmodulomenu,		
		transacao : req.body.transacao,
		urltransacao : req.body.urltransacao,
		status : req.body.status
		};
	
	req.assert('transacao', 'Nome da transacao é um dado obrigatório. Informe por favor!').notEmpty();
	req.assert('idmodulomenu', 'Menu é um dado obrigatório. Informe por favor!').notEmpty();
	req.assert('status', 'Status é um dado obrigatório. Informe por favor!').notEmpty();

	var erros = req.validationErrors();
	
	if(erros){
		console.log(erros);
		res.render("modulomenu/crudtransacoes", {validacao:erros,Transacoes:[],ModuloMenu:null,msg:null});
		return;
	}
	
	const http = require('http')

	const data = JSON.stringify(dadosForm)

	const options = {
	  hostname: 'localhost',
	  port: 8083,
	  path: '/api/inc/transacao',
	  method: 'POST',
	  headers: {
	    'Content-Type': 'application/json',
	    'Content-Length': data.length
	  }
	}
	if (dadosForm.idtransacao > 0){
		options.path = "/api/atualiza/transacao";
		options.method= "put";
		console.log("vou alterar ")
		console.log(data);
	}else{
		console.log("vou incluir transação")
		console.log(req.body)
	}

	const wreq = http.request(options, wres => {
	 // console.log(`statusCode: ${res.statusCode}`)
	  wres.on('data', d => {
	  	//res.status(200).json({idtransacao:dadosForm.idtransacao,transacao:dadosForm.transacao,sigla:dadosForm.sigla,versao:dadosForm.versao,url:dadosForm.url,status:dadosForm.status});
	    //res.render('modulomenu/crudtransacoes', {validacao:[],Transacoes:[{idtransacao:dadosForm.idtransacao,idmodulomenu:dadosForm.idmodulomenu,transacao:dadosForm.transacao,urltransacao:dadosForm.urltransacao,status:dadosForm.status}],ModuloMenu:[],msg:null});
	    console.log("redirecionndo");
	     res.redirect('/Transacoes');
	  })
	})

	wreq.on('error', error => {
	  console.error(error)
	})

	wreq.write(data)
	wreq.end()

};
// FETCH All transacao
module.exports.findAll = function (application,req, res)  {	
	
};
// Find a transacao by Id
module.exports.findById = function (application,req, res)  {	
		
};
// Update a transacao
// Put a transacao
module.exports.validartransacao = function(application, req, res){
	//console.log(req.body)
	var dadosForm = req.body;
	
	var wtransacao = {
		idtransacao:req.body.idtransacao,
		idmodulomenu:req.body.idmodulomenu,		
		transacao : req.body.transacao,
		urltransacao : req.body.urltransacao,
		status : req.body.status
		};
	
	req.assert('transacao', 'Nome da transacao é um dado obrigatório. Informe por favor!').notEmpty();
	req.assert('idmodulomenu', 'Menu é um dado obrigatório. Informe por favor!').notEmpty();
	req.assert('status', 'Status é um dado obrigatório. Informe por favor!').notEmpty();

	var erros = req.validationErrors();
	
	if(erros){
		//console.log(erros);
		res.render("modulomenu/crudtransacoes", {validacao:erros,transacaos:[],msg:null});
		return;
	}
	
	//var sql = "Insert Into transacao(transacao, sigla, versao, url) values ('"+req.body.transacao+"','"+req.body.sigla+"','"+req.body.versao+"','"+req.body.url+"')";
	const http = require('http')

	const data = JSON.stringify(dadosForm)

	const options = {
	  hostname: 'localhost',
	  port: 8083,
	  path: '/api/inc/transacao',
	  method: 'POST',
	  headers: {
	    'Content-Type': 'application/json',
	    'Content-Length': data.length
	  }
	}
	if (dadosForm.idtransacao > 0){
		options.path = "/api/atualiza/transacao";
		options.method= "put";
		console.log("vou alterar ")
		console.log(data);
	}else{
		console.log("vou incluir agora")
		console.log(req.body)
	}

	const wreq = http.request(options, wres => {
	 // console.log(`statusCode: ${res.statusCode}`)
	  wres.on('data', d => {
	  	//console.log(d)
	  	//res.status(200).json({idtransacao:dadosForm.idtransacao,transacao:dadosForm.transacao,sigla:dadosForm.sigla,versao:dadosForm.versao,url:dadosForm.url,status:dadosForm.status});
	    //res.render('modulomenu/crudtransacoes',  {validacao:[],Transacoes:[{idtransacao:dadosForm.idtransacao,idmodulomenu:dadosForm.idmodulomenu,transacao:dadosForm.transacao,urltransacao:dadosForm.urltransacao,status:dadosForm.status}],msg:'Inclusao com sucesso!'});
	     res.redirect('/Transacoes');
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
	var dadosForm = req.body;
	
	var wtransacao = {
		idtransacao:req.body.idtransacao,
		idmodulomenu:req.body.idmodulomenu,		
		transacao : req.body.transacao,
		urltransacao : req.body.urltransacao,
		status : req.body.status
		};
	
	req.assert('transacao', 'Nome da transacao é um dado obrigatório. Informe por favor!').notEmpty();
	req.assert('idmodulomenu', 'Menu é um dado obrigatório. Informe por favor!').notEmpty();
	req.assert('status', 'Status é um dado obrigatório. Informe por favor!').notEmpty();

	var erros = req.validationErrors();
	
	if(erros){
		console.log(erros);
		res.render("modulomenu/crudtransacoes", {validacao:erros,transacaos:[]});
		return;
	}
	
	const http = require('http')

	const data = JSON.stringify(dadosForm)

	const options = {
	  hostname: 'localhost',
	  port: 8083,
	  path: '/api/inc/transacao',
	  method: 'POST',
	  headers: {
	    'Content-Type': 'application/json',
	    'Content-Length': data.length
	  }
	}
	if (dadosForm.idtransacao > 0){
		options.path = "/api/atualiza/transacao";
		options.method= "put";
		console.log("vou alterar ")
		console.log(data);
	}else{
		console.log("vou incluir ")
		console.log(req.body)
	}

	const wreq = http.request(options, wres => {
	 // console.log(`statusCode: ${res.statusCode}`)
	  wres.on('data', d => {
	  res.redirect('/Transacoes');
	    //res.render('modulomenu/crudtransacoes',  {validacao:[],Transacoes:[{idtransacao:dadosForm.idtransacao,idmodulomenu:dadosForm.idmodulomenu,transacao:dadosForm.transacao,urltransacao:dadosForm.urltransacao,status:dadosForm.status}],msg:'Atualizado com sucesso!'});
	  })
	})

	wreq.on('error', error => {
	  console.error(error)
	})

	wreq.write(data)
	wreq.end()
};

// Delete a transacao by Id
module.exports.delete = function (application,req, res) {
	
	const id = req.query.idtransacao;
	var dadosForm = req.query;
	req.assert('idtransacao', 'Identificador do transacao é um dado obrigatório. Informe por favor!').notEmpty();
	var erros = req.validationErrors();
	
	if(erros){
		console.log(erros);
		res.render("modulomenu/crudtransacoes", {validacao:erros,transacaos:[]});
		return;
	}
	
	
	const http = require('http')

	const data = JSON.stringify(dadosForm)

	const options = {
	  hostname: 'localhost',
	  port: 8083,
	  path: '/api/exc/transacao',
	  method: 'delete',
	  headers: {
	    'Content-Type': 'application/json',
	    'Content-Length': data.length
	  }
	}
	
	const wreq = http.request(options, wres => {
	 // console.log(`statusCode: ${res.statusCode}`)
	  wres.on('data', d => {
	    res.redirect('/Transacoes');//res.render('modulomenu/crudtransacoes',  {validacao:[],Transacoes:[{idtransacao:dadosForm.idtransacao,idmodulomenu:dadosForm.idmodulomenu,transacao:dadosForm.transacao,urltransacao:dadosForm.urltransacao,status:dadosForm.status}],msg:'Excluido com sucesso!'});
	  })
	})

	wreq.on('error', error => {
	  console.error(error)
	})

	wreq.write(data)
	wreq.end()
};