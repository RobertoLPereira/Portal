module.exports.cadperfil = function(application, req, res){
	
	res.render('perfil/crudperfil', {validacao:[],Perfis:[],msg:null});
}
module.exports.listarPerfis = function(application, req, res){
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
	  	 perfil(application, req, res,JSON.parse(d));
		})
	  })
		wreq.on('error', error => {
		  console.error(error)
		})
	//wreq.write(data)
	wreq.end()

	function perfil(application, req, res,Sis){
		const http = require('http')
		const options = {
		  hostname: 'localhost',
		  port: 8083,
		  path:'/api/todos/perfil',
		  method: 'GET',
		  headers: {'Accept' : 'application/json'}
		}

		const wreq = http.request(options, wres => {
		 // console.log(`statusCode: ${wres.statusCode}`)

	  wres.on('data', d => {
	  	 var wdata = JSON.parse(d);
	  	 res.render('perfil/crudperfil', {validacao:[],Perfis:wdata,Sistemas:Sis,msg:null});
		})
	  })
		wreq.on('error', error => {
		  console.error(error)
		})
	//wreq.write(data)
	wreq.end()
	}
}
module.exports.pesquisarperfil = function(application, req, res){
	var dadosForm = req.query
	const data = JSON.stringify(req.query)
	//console.log(req)
	const http = require('http')
	const options = {
	  hostname: 'localhost',
	  port: 8083,
	  path:'/api/pesquisarperfil?perfil='+dadosForm.perfil.replace(" ","%20")+"&status="+dadosForm.status,
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
	  	 res.render('perfil/crudperfil', {validacao:[],Perfis:wdata,msg:null});
		})
	  })
		wreq.on('error', error => {
		  console.error(error)
		})
	//wreq.write(data)
	wreq.end()
}
// Post a perfil
module.exports.create = function(application, req, res){	
	// Save to PostgreSQL database
	var dadosForm = req.body;
	
	var wperfil = {
		idsistema:req.body.idsistema,
		idperfil:req.body.idperfil,
		perfil : req.body.perfil,
		status : req.body.status,
		objetivo : req.body.objetivo
		};
	
	req.assert('perfil', 'Nome do perfil é um dado obrigatório. Informe por favor!').notEmpty();
	req.assert('objetivo', 'Objetivo é um dado obrigatório. Informe por favor!').notEmpty();
	req.assert('status', 'Status é um dado obrigatório. Informe por favor!').notEmpty();

	var erros = req.validationErrors();
	
	if(erros){
		console.log(erros);
		res.render("Perfis/crudPerfis", {validacao:erros,Perfis:[],msg:null});
		return;
	}
	
	const http = require('http')

	const data = JSON.stringify(dadosForm)

	const options = {
	  hostname: 'localhost',
	  port: 8083,
	  path: '/api/inc/perfil',
	  method: 'POST',
	  headers: {
	    'Content-Type': 'application/json',
	    'Content-Length': data.length
	  }
	}
	if (dadosForm.idperfil > 0){
		options.path = "/api/atualiza/perfil";
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
	  	//res.status(200).json({idperfil:dadosForm.idperfil,perfil:dadosForm.perfil,sigla:dadosForm.sigla,versao:dadosForm.versao,url:dadosForm.url,status:dadosForm.status});
	    res.render('perfil/crudperfil', {validacao:[],Perfis:[{idsistema:dadosForm.idsistema,idperfil:dadosForm.idperfil,perfil:dadosForm.perfil,status:dadosForm.status,objetivo:dadosForm.objetivo}],msg:null});
	  })
	})

	wreq.on('error', error => {
	  console.error(error)
	})

	wreq.write(data)
	wreq.end()

};
// FETCH All perfil
module.exports.findAll = function (application,req, res)  {	
	
};
// Find a perfil by Id
module.exports.findById = function (application,req, res)  {	
		
};
// Update a perfil
// Put a perfil
module.exports.validarperfil = function(application, req, res){
	//console.log(req.body)
	var dadosForm = req.body;
	
	var wperfil = {
		idsistema:req.body.idsistema,
		idperfil:req.body.idperfil,
		perfil : req.body.perfil,
		status : req.body.status,
		objetivo : req.body.objetivo
		};
	
	req.assert('perfil', 'Nome do perfil é um dado obrigatório. Informe por favor!').notEmpty();
	req.assert('objetivo', 'Objetivo é um dado obrigatório. Informe por favor!').notEmpty();
	req.assert('status', 'Status é um dado obrigatório. Informe por favor!').notEmpty();

	var erros = req.validationErrors();
	
	if(erros){
		//console.log(erros);
		res.render("perfil/crudperfil", {validacao:erros,Perfis:[],msg:null});
		return;
	}
	
	//var sql = "Insert Into perfil(perfil, sigla, versao, url) values ('"+req.body.perfil+"','"+req.body.sigla+"','"+req.body.versao+"','"+req.body.url+"')";
	const http = require('http')

	const data = JSON.stringify(dadosForm)

	const options = {
	  hostname: 'localhost',
	  port: 8083,
	  path: '/api/inc/perfil',
	  method: 'POST',
	  headers: {
	    'Content-Type': 'application/json',
	    'Content-Length': data.length
	  }
	}
	if (dadosForm.idperfil > 0){
		options.path = "/api/atualiza/perfil";
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
	  	//res.status(200).json({idperfil:dadosForm.idperfil,perfil:dadosForm.perfil,sigla:dadosForm.sigla,versao:dadosForm.versao,url:dadosForm.url,status:dadosForm.status});
	    res.render('perfil/crudperfil', {validacao:[],Perfis:[{idsistema:dadosForm.idsistema,idperfil:dadosForm.idperfil,perfil:dadosForm.perfil,status:dadosForm.status,objetivo:dadosForm.objetivo}],msg:'Inclusao com sucesso!'});
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
	
	var wperfil ={
		idsistema:req.body.idsistema,
		idperfil:req.body.idperfil,
		perfil : req.body.perfil,
		status : req.body.status,
		objetivo : req.body.objetivo
		};
	
	req.assert('perfil', 'Nome do perfil é um dado obrigatório. Informe por favor!').notEmpty();
	req.assert('objetivo', 'Objetivo é um dado obrigatório. Informe por favor!').notEmpty();
	req.assert('status', 'Status é um dado obrigatório. Informe por favor!').notEmpty();


	var erros = req.validationErrors();
	
	if(erros){
		console.log(erros);
		res.render("Perfis/crudPerfis", {validacao:erros,Perfis:[]});
		return;
	}
	
	const http = require('http')

	const data = JSON.stringify(dadosForm)

	const options = {
	  hostname: 'localhost',
	  port: 8083,
	  path: '/api/inc/perfil',
	  method: 'POST',
	  headers: {
	    'Content-Type': 'application/json',
	    'Content-Length': data.length
	  }
	}
	if (dadosForm.idperfil > 0){
		options.path = "/api/atualiza/perfil";
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
	  
	    res.render('perfil/crudperfil', {validacao:[],Perfis:[{idsistema:dadosForm.idsistema,idperfil:dadosForm.idperfil,perfil:dadosForm.perfil,status:dadosForm.status,objetivo:dadosForm.objetivo}],msg:'Atualizado com sucesso!'});
	  })
	})

	wreq.on('error', error => {
	  console.error(error)
	})

	wreq.write(data)
	wreq.end()
};

// Delete a perfil by Id
module.exports.delete = function (application,req, res) {
	
	const id = req.query.idperfil;
	var dadosForm = req.query;
	req.assert('idperfil', 'Identificador do perfil é um dado obrigatório. Informe por favor!').notEmpty();
	var erros = req.validationErrors();
	
	if(erros){
		console.log(erros);
		res.render("Perfis/crudPerfis", {validacao:erros,Perfis:[]});
		return;
	}
	
	
	const http = require('http')

	const data = JSON.stringify(dadosForm)

	const options = {
	  hostname: 'localhost',
	  port: 8083,
	  path: '/api/exc/perfil',
	  method: 'delete',
	  headers: {
	    'Content-Type': 'application/json',
	    'Content-Length': data.length
	  }
	}
	
	const wreq = http.request(options, wres => {
	 // console.log(`statusCode: ${res.statusCode}`)
	  wres.on('data', d => {
	  	
	    res.render('perfil/crudperfil', {validacao:[],Perfis:[{idsistema:dadosForm.idsistema,idperfil:dadosForm.idperfil,perfil:dadosForm.perfil,status:dadosForm.status,objetivo:dadosForm.objetivo}],msg:'Excluido com sucesso!'});
	  })
	})

	wreq.on('error', error => {
	  console.error(error)
	})

	wreq.write(data)
	wreq.end()
};