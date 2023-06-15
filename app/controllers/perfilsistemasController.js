module.exports.cadperfilsistema = function(application, req, res){
	
	res.render('perfil/crudperfilsistemas', {validacao:[],PerfiSistema:[],msg:null});
}
module.exports.listarPerfisSistemas = function(application, req, res){
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
	  	  perfilSistema(application, req, res,Sis,JSON.parse(d));
		})
	  })
		wreq.on('error', error => {
		  console.error(error)
		})
	//wreq.write(data)
	wreq.end()
	}
	function perfilSistema(application, req, res,Sis,Per){
		const http = require('http')
		const options = {
		  hostname: 'localhost',
		  port: 8083,
		  path:'/api/todos/perfilsistema',
		  method: 'GET',
		  headers: {'Accept' : 'application/json'}
		}

		const wreq = http.request(options, wres => {
		 // console.log(`statusCode: ${wres.statusCode}`)

	  wres.on('data', d => {
	  	 var wdata = JSON.parse(d);
	  	 res.render('perfil/crudperfilsistemas', {validacao:[],PerfilSistemas:wdata,Sistemas:Sis,Perfis:Per,msg:null});
		})
	  })
		wreq.on('error', error => {
		  console.error(error)
		})
	//wreq.write(data)
	wreq.end()
	}
}
module.exports.pesquisarperfilsistema = function(application, req, res){
	var dadosForm = req.query
	const data = JSON.stringify(req.query)
	//console.log(req)
	const http = require('http')
	const options = {
	  hostname: 'localhost',
	  port: 8083,
	  path:'/api/pesquisarperfilsistema?perfil='+dadosForm.perfil.replace(" ","%20")+"&status="+dadosForm.status,
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
	  	 res.render('perfil/crudperfilsistemas', {validacao:[],Perfis:wdata,msg:null});
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
	console.log(req.body);
	var wperfilsistema = {
		idperfilsistema:parseInt(req.body.idperfilsistema),
		idperfil:parseInt(req.body.idperfil),
		idsistema : parseInt(req.body.idsistema)
		};
	
	req.assert('idperfil', 'O perfil é um dado obrigatório. Informe por favor!').notEmpty();
	req.assert('idsistema', 'O Sistema é um dado obrigatório. Informe por favor!').notEmpty();

	var erros = req.validationErrors();
	
	if(erros){
		console.log(erros);
		res.render("Perfil/crudperfilsistemas", {validacao:erros,PerfilSistemas:dadosForm,Sistemas:[],Perfis:[],msg:erros});
		return;
	}
	
	const http = require('http')

	const data = JSON.stringify(wperfilsistema)

	const options = {
	  hostname: 'localhost',
	  port: 8083,
	  path: '/api/inc/perfilsistema',
	  method: 'POST',
	  headers: {
	    'Content-Type': 'application/json',
	    'Content-Length': data.length
	  }
	}
	if (dadosForm.idperfilsistema > 0){
		options.path = "/api/atualiza/perfilsistema";
		options.method= "put";
		console.log("vou alterar ")
		console.log(data);
	}else{
		console.log("vou incluir ")
		console.log(data)
	}

	const wreq = http.request(options, wres => {
	 // console.log(`statusCode: ${res.statusCode}`)
	  wres.on('data', d => {
	  	//res.status(200).json({idperfil:dadosForm.idperfil,perfil:dadosForm.perfil,sigla:dadosForm.sigla,versao:dadosForm.versao,url:dadosForm.url,status:dadosForm.status});
	    res.render('perfil/crudperfilsistemas', {validacao:[],PerfilSistemas:dadosForm,msg:'Atualizado com Sucesso!'});
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
module.exports.validarperfilsistema = function(application, req, res){
	//console.log(req.body)
	var dadosForm = req.body;
	
	var wperfilsistema = {
		idperfilsistema:req.body.idperfilsistema,
		idperfil:req.body.idperfil,
		idsistema : req.body.idsistema
		};
	if (wperfilsistema.idsistema == "0"){
		req.body.idsistema= "";
	}
	if(wperfilsistema.idperfil == "0"){
		req.body.idperfil = "";
	}
	console.log(req.body)
	req.assert('idperfil', 'O perfil é um dado obrigatório. Informe por favor!').notEmpty();
	req.assert('idsistema', 'O Sistema é um dado obrigatório. Informe por favor!').notEmpty();

	var erros = req.validationErrors();
	
	if(erros){
		//console.log(erros);
		res.render("perfil/crudperfilsistemas", {validacao:erros,PerfilSistemas:dadosForm,Sistemas:[],Perfis:[],msg:erros});
	}
	
	//var sql = "Insert Into perfil(perfil, sigla, versao, url) values ('"+req.body.perfil+"','"+req.body.sigla+"','"+req.body.versao+"','"+req.body.url+"')";
	const http = require('http')

	const data = JSON.stringify(wperfilsistema)

	const options = {
	  hostname: 'localhost',
	  port: 8083,
	  path: '/api/inc/perfilsistema',
	  method: 'POST',
	  headers: {
	    'Content-Type': 'application/json',
	    'Content-Length': data.length
	  }
	}
	if (parseInt(dadosForm.idperfilsistema) > 0){
		options.path = "/api/atualiza/perfilsistema";
		options.method= "put";
		console.log("vou alterar ")
		console.log(data);
	}else{
		console.log("vou incluir ")
		console.log(data)
	}

	const wreq = http.request(options, wres => {
	 // console.log(`statusCode: ${res.statusCode}`)
	  wres.on('data', d => {
	  	//console.log(d)
	  	res.redirect('/perfilsistema');
	    //res.render('perfil/crudperfilsistemas', {validacao:[],PerfilSistemas:dadosForm,Sistemas:[],Perfis:[],msg:'Inclusao com sucesso!'});
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
	
	var wperfilsistema = {
		idperfilsistema:req.body.idperfilsistema,
		idperfil:req.body.idperfil,
		idsistema : req.body.idsistema
		};
	
	
	req.assert('idperfil', 'O perfil é um dado obrigatório. Informe por favor!').notEmpty();
	req.assert('idsistema', 'O Sistema é um dado obrigatório. Informe por favor!').notEmpty();

	var erros = req.validationErrors();
	
	if(erros){
		//console.log(erros);
		res.render("perfil/crudperfilsistemas", {validacao:erros,PerfilSistemas:dadosForm,Sistemas:[],Perfis:[],msg:erros});
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
	  
	    res.render('perfil/crudperfilsistemas', {validacao:[],PerfilSistemas:dadosForm,msg:'Atualizado com sucesso!'});
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
	req.assert('idperfilsistema', 'O perfil do sistema é um dado obrigatório. Informe por favor!').notEmpty();
	req.assert('idperfil', 'O perfil é um dado obrigatório. Informe por favor!').notEmpty();
	req.assert('idsistema', 'O Sistema é um dado obrigatório. Informe por favor!').notEmpty();

	var erros = req.validationErrors();
	
	if(erros){
		//console.log(erros);
		res.render("perfil/crudperfilsistemas", {validacao:erros,PerfilSistemas:dadosForm,msg:erros});
		return;
	}
	
	const http = require('http')

	const data = JSON.stringify(dadosForm)

	const options = {
	  hostname: 'localhost',
	  port: 8083,
	  path: '/api/exc/perfilsistema',
	  method: 'delete',
	  headers: {
	    'Content-Type': 'application/json',
	    'Content-Length': data.length
	  }
	}
	
	const wreq = http.request(options, wres => {
	 // console.log(`statusCode: ${res.statusCode}`)
	  wres.on('data', d => {
	  	
	    res.render('perfil/crudperfilsistemas', {validacao:[],PerfilSistemas:dadosForm,msg:'Excluido com sucesso!'});
	  })
	})

	wreq.on('error', error => {
	  console.error(error)
	})

	wreq.write(data)
	wreq.end()
};