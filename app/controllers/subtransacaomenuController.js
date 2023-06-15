module.exports.cadsubtransacao = function(application, req, res){
	
	res.render('modulomenu/crudsubtransacaomenu', {validacao:[],SubTransacaoMenu:[],msg:null});
}
module.exports.listarSubTransacoes = function(application, req, res){
	//console.log(req)
	//const data = JSON.stringify(req.query)
	
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
	  	 subtransacao(application, req, res,JSON.parse(d));
		})
	  })
		wreq.on('error', error => {
		  console.error(error)
		})
	//wreq.write(data)
	wreq.end()

	function subtransacao(application, req, res,tran){
		console.log(tran)
		const http = require('http')
		const options = {
		  hostname: 'localhost',
		  port: 8083,
		  path:'/api/todas/subtransacoes',
		  method: 'GET',
		  headers: {'Accept' : 'application/json'}
		}

		const wreq = http.request(options, wres => {
		 // console.log(`statusCode: ${wres.statusCode}`)

	  wres.on('data', d => {
	  	 var wdata = JSON.parse(d);
	  	 res.render('modulomenu/crudsubtransacaomenu', {validacao:[],SubTransacaoMenu:wdata,Transacoes:tran,msg:null});
		})
	  })
		wreq.on('error', error => {
		  console.error(error)
		})
	//wreq.write(data)
	wreq.end()
	}
}
module.exports.pesquisarsubtransacao = function(application, req, res){
	var dadosForm = req.query
	const data = JSON.stringify(req.query)
	//console.log(req)
	const http = require('http')
	const options = {
	  hostname: 'localhost',
	  port: 8083,
	  path:'/api/pesquisarsubtransacao?subtransacao='+dadosForm.subtransacao.replace(" ","%20")+"'&idtransacoes="+dadosForm.idtransacoes,
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
	  	 res.render('modulomenu/crudsubtransacaomenu', {validacao:[],SubTransacaoMenu:wdata,msg:null});
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
	
	var wsubtransacao = {
		idsubtransacaomenu:req.body.idsubtransacaomenu,
		idtransacoes:req.body.idtransacoes,		
		subtransacao : req.body.transacao,
		rota : req.body.rota,
		status : req.body.status
		};
	
	req.assert('subtransacao', 'Nome da transacao é um dado obrigatório. Informe por favor!').notEmpty();
	req.assert('idtransacoes', 'Transacão do Menu é um dado obrigatório. Informe por favor!').notEmpty();
	req.assert('status', 'Status é um dado obrigatório. Informe por favor!').notEmpty();
	req.assert('rota', 'Rota é um dado obrigatório. Informe por favor!').notEmpty();

	var erros = req.validationErrors();
	
	if(erros){
		console.log(erros);
		res.render("modulomenu/crudsubtransacaomenu", {validacao:erros,SubTransacaoMenu:[],msg:null});
		return;
	}
	
	const http = require('http')

	const data = JSON.stringify(dadosForm)

	const options = {
	  hostname: 'localhost',
	  port: 8083,
	  path: '/api/inc/subtransacao',
	  method: 'POST',
	  headers: {
	    'Content-Type': 'application/json',
	    'Content-Length': data.length
	  }
	}
	if (dadosForm.idtransacao > 0){
		options.path = "/api/atualiza/subtransacao";
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
	  	//res.status(200).json({idtransacao:dadosForm.idtransacao,transacao:dadosForm.transacao,sigla:dadosForm.sigla,versao:dadosForm.versao,url:dadosForm.url,status:dadosForm.status});
	    res.render('modulomenu/crudsubtransacaomenu', {validacao:[],SubTransacaoMenu:[{idsubtransacaomenu:dadosForm.idsubtransacaomenu,idtransacoes:dadosForm.idtransacoes,subtransacao:dadosFormsubtransacao,rota:dadosForm.rota,status:dadosForm.status}],msg:null});
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
module.exports.validarsubtransacao = function(application, req, res){
	//console.log(req.body)
	var dadosForm = req.body;
	
	var wsubtransacao = {
		idsubtransacao:req.body.idsubtransacao,
		idtransacoes:req.body.idtransacoes,		
		subtransacao : req.body.subtransacao,
		rota : req.body.rota,
		status : req.body.status
		};
	
	req.assert('subtransacao', 'Nome da subtransacao é um dado obrigatório. Informe por favor!').notEmpty();
	req.assert('idtransacoes', 'Transação do Menu é um dado obrigatório. Informe por favor!').notEmpty();
	req.assert('rota', 'Rota é um dado obrigatório. Informe por favor!').notEmpty();
	req.assert('status', 'Status é um dado obrigatório. Informe por favor!').notEmpty();

	var erros = req.validationErrors();
	
	if(erros){
		//console.log(erros);
		res.render("modulomenu/crudsubtransacaomenu", {validacao:erros,SubTransacaoMenu:[],msg:null});
		return;
	}
	
	//var sql = "Insert Into transacao(transacao, sigla, versao, url) values ('"+req.body.transacao+"','"+req.body.sigla+"','"+req.body.versao+"','"+req.body.url+"')";
	const http = require('http')

	const data = JSON.stringify(dadosForm)

	const options = {
	  hostname: 'localhost',
	  port: 8083,
	  path: '/api/inc/subtransacao',
	  method: 'POST',
	  headers: {
	    'Content-Type': 'application/json',
	    'Content-Length': data.length
	  }
	}
	if (dadosForm.idtransacao > 0){
		options.path = "/api/atualiza/subtransacao";
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
	  	//console.log(d)	 
	    res.render('modulomenu/crudsubtransacaomenu',  {validacao:[],SubTransacaoMenu:[{idsubtransacaomenu:dadosForm.idsubtransacaomenu,idtransacoes:dadosForm.idtransacoes,subtransacao:dadosFormsubtransacao,rota:dadosForm.rota,status:dadosForm.status}],msg:'Inclusao com sucesso!'});
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
		idsubtransacao:req.body.idsubtransacao,
		idtransacoes:req.body.idtransacoes,		
		subtransacao : req.body.subtransacao,
		rota : req.body.rota,
		status : req.body.status
		};
	
	req.assert('subtransacao', 'Nome da subtransacao é um dado obrigatório. Informe por favor!').notEmpty();
	req.assert('idtransacoes', 'Transação do Menu é um dado obrigatório. Informe por favor!').notEmpty();
	req.assert('rota', 'Rota é um dado obrigatório. Informe por favor!').notEmpty();
	req.assert('status', 'Status é um dado obrigatório. Informe por favor!').notEmpty();

	var erros = req.validationErrors();
	
	if(erros){
		console.log(erros);
		res.render("modulomenu/crudsubtransacaomenu", {validacao:erros,SubTransacaoMenu:[]});
		return;
	}
	
	const http = require('http')

	const data = JSON.stringify(dadosForm)

	const options = {
	  hostname: 'localhost',
	  port: 8083,
	  path: '/api/inc/subtransacao',
	  method: 'POST',
	  headers: {
	    'Content-Type': 'application/json',
	    'Content-Length': data.length
	  }
	}
	if (dadosForm.idtransacao > 0){
		options.path = "/api/atualiza/subtransacao";
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
	  
	    res.render('modulomenu/crudsubtransacaomenu',  {validacao:[],SubTransacaoMenu:[{idsubtransacaomenu:dadosForm.idsubtransacaomenu,idtransacoes:dadosForm.idtransacoes,subtransacao:dadosFormsubtransacao,rota:dadosForm.rota,status:dadosForm.status}],msg:'Atualizado com sucesso!'});
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
	req.assert('idtransacao', 'Identificador da Sub Transacao é um dado obrigatório. Informe por favor!').notEmpty();
	var erros = req.validationErrors();
	
	if(erros){
		console.log(erros);
		res.render("modulomenu/crudsubtransacaomenu", {validacao:erros,SubTransacaoMenu:[]});
		return;
	}
	
	
	const http = require('http')

	const data = JSON.stringify(dadosForm)

	const options = {
	  hostname: 'localhost',
	  port: 8083,
	  path: '/api/exc/subtransacao',
	  method: 'delete',
	  headers: {
	    'Content-Type': 'application/json',
	    'Content-Length': data.length
	  }
	}
	
	const wreq = http.request(options, wres => {
	 // console.log(`statusCode: ${res.statusCode}`)
	  wres.on('data', d => {
	  	
	    res.render('modulomenu/crudsubtransacaomenu',  {validacao:[],SubTransacaoMenu:[{idsubtransacaomenu:dadosForm.idsubtransacaomenu,idtransacoes:dadosForm.idtransacoes,subtransacao:dadosFormsubtransacao,rota:dadosForm.rota,status:dadosForm.status}],msg:'Excluido com sucesso!'});
	  })
	})

	wreq.on('error', error => {
	  console.error(error)
	})

	wreq.write(data)
	wreq.end()
};