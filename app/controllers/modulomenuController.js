module.exports.cadmodulomenu = function(application, req, res){
	
	res.render('modulomenu/crudmodulomenu', {validacao:[],ModuloMenus:[],msg:null});
}
module.exports.listarModuloMenus = function(application, req, res){
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
	  	 modulomenu(application, req, res,JSON.parse(d));
		})
	  })
		wreq.on('error', error => {
		  console.error(error)
		})
	//wreq.write(data)
	wreq.end()

	function modulomenu(application, req, res,Sis){
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
	  	 var wdata = JSON.parse(d);
	  	 res.render('modulomenu/crudmodulomenu', {validacao:[],ModuloMenus:wdata,Sistemas:Sis,msg:null});
		})
	  })
		wreq.on('error', error => {
		  console.error(error)
		})
	//wreq.write(data)
	wreq.end()
	}
}
module.exports.pesquisarmodulomenu = function(application, req, res){
	var dadosForm = req.query
	const data = JSON.stringify(req.query)
	//console.log(req)
	const http = require('http')
	const options = {
	  hostname: 'localhost',
	  port: 8083,
	  path:'/api/pesquisarmodulomenu?denominacao='+dadosForm.denominacao.replace(" ","%20")+"&idsistema="+dadosForm.idsistema,
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
	  	 res.render('modulomenu/crudmodulomenu', {validacao:[],ModuloMenus:wdata,msg:null});
		})
	  })
		wreq.on('error', error => {
		  console.error(error)
		})
	//wreq.write(data)
	wreq.end()
}
// Post a modulomenu
module.exports.create = function(application, req, res){	
	// Save to PostgreSQL database
	var dadosForm = req.body;
	
	var wmodulomenu = {
		idmodulomenu:req.body.idmodulomenu,
		idsistema:req.body.idsistema,		
		denominacao : req.body.denominacao,
		urlmenu : req.body.urlmenu,
		urlservico : req.body.urlservico
		};
	
	req.assert('denominacao', 'Nome do modulomenu é um dado obrigatório. Informe por favor!').notEmpty();
	req.assert('idsistema', 'Sistema é um dado obrigatório. Informe por favor!').notEmpty();

	var erros = req.validationErrors();
	
	if(erros){
		console.log(erros);
		res.render("modulomenu/crudmodulomenu", {validacao:erros,ModuloMenus:[],msg:null});
		return;
	}
	
	const http = require('http')

	const data = JSON.stringify(dadosForm)

	const options = {
	  hostname: 'localhost',
	  port: 8083,
	  path: '/api/inc/modulomenu',
	  method: 'POST',
	  headers: {
	    'Content-Type': 'application/json',
	    'Content-Length': data.length
	  }
	}
	if (dadosForm.idmodulomenu > 0){
		options.path = "/api/atualiza/modulomenu";
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
	  	//res.status(200).json({idmodulomenu:dadosForm.idmodulomenu,modulomenu:dadosForm.modulomenu,sigla:dadosForm.sigla,versao:dadosForm.versao,url:dadosForm.url,status:dadosForm.status});
	    //res.render('modulomenu/crudmodulomenu', {validacao:[],ModuloMenus:[{idsistema:dadosForm.idsistema,idmodulomenu:dadosForm.idmodulomenu,modulomenu:dadosForm.modulomenu,status:dadosForm.status,objetivo:dadosForm.objetivo}],msg:null});
	    //listarModuloMenus(application,req, res);
	    res.redirect('/Menus');
	  })
	})

	wreq.on('error', error => {
	  console.error(error)
	})

	wreq.write(data)
	wreq.end()

};
// FETCH All modulomenu
module.exports.findAll = function (application,req, res)  {	
	
};
// Find a modulomenu by Id
module.exports.findById = function (application,req, res)  {	
		
};
// Update a modulomenu
// Put a modulomenu
module.exports.validarmodulomenu = function(application, req, res){
	//console.log(req.body)
	var dadosForm = req.body;
	
	var wmodulomenu = {
		idmodulomenu:req.body.idmodulomenu,
		idsistema:req.body.idsistema,		
		denominacao : req.body.denominacao,
		urlmenu : req.body.urlmenu,
		urlservico : req.body.urlservico
		};
	
	req.assert('denominacao', 'Nome do modulomenu é um dado obrigatório. Informe por favor!').notEmpty();
	req.assert('idsistema', 'Sistema é um dado obrigatório. Informe por favor!').notEmpty();

	var erros = req.validationErrors();
	
	if(erros){
		//console.log(erros);
		res.render("modulomenu/crudmodulomenu", {validacao:erros,ModuloMenus:[],msg:null});
		return;
	}
	
	//var sql = "Insert Into modulomenu(modulomenu, sigla, versao, url) values ('"+req.body.modulomenu+"','"+req.body.sigla+"','"+req.body.versao+"','"+req.body.url+"')";
	const http = require('http')

	const data = JSON.stringify(dadosForm)

	const options = {
	  hostname: 'localhost',
	  port: 8083,
	  path: '/api/inc/modulomenu',
	  method: 'POST',
	  headers: {
	    'Content-Type': 'application/json',
	    'Content-Length': data.length
	  }
	}
	if (dadosForm.idmodulomenu > 0){
		options.path = "/api/atualiza/modulomenu";
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
	  	//res.status(200).json({idmodulomenu:dadosForm.idmodulomenu,modulomenu:dadosForm.modulomenu,sigla:dadosForm.sigla,versao:dadosForm.versao,url:dadosForm.url,status:dadosForm.status});
	    //res.render('modulomenu/crudmodulomenu', {validacao:[],ModuloMenus:[{idsistema:dadosForm.idsistema,idmodulomenu:dadosForm.idmodulomenu,modulomenu:dadosForm.modulomenu,status:dadosForm.status,objetivo:dadosForm.objetivo}],msg:'Inclusao com sucesso!'});
	    res.redirect('/Menus');
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
	
	var wmodulomenu = {
		idmodulomenu:req.body.idmodulomenu,
		idsistema:req.body.idsistema,		
		denominacao : req.body.denominacao,
		urlmenu : req.body.urlmenu,
		urlservico : req.body.urlservico
		};
	
	req.assert('denominacao', 'Nome do modulomenu é um dado obrigatório. Informe por favor!').notEmpty();
	req.assert('idsistema', 'Sistema é um dado obrigatório. Informe por favor!').notEmpty();

	var erros = req.validationErrors();
	
	if(erros){
		console.log(erros);
		res.render("modulomenu/crudmodulomenu", {validacao:erros,ModuloMenus:[]});
		return;
	}
	
	const http = require('http')

	const data = JSON.stringify(dadosForm)

	const options = {
	  hostname: 'localhost',
	  port: 8083,
	  path: '/api/inc/modulomenu',
	  method: 'POST',
	  headers: {
	    'Content-Type': 'application/json',
	    'Content-Length': data.length
	  }
	}
	if (dadosForm.idmodulomenu > 0){
		options.path = "/api/atualiza/modulomenu";
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
	  
	    res.render('modulomenu/crudmodulomenu', {validacao:[],ModuloMenus:[{idsistema:dadosForm.idsistema,idmodulomenu:dadosForm.idmodulomenu,modulomenu:dadosForm.modulomenu,status:dadosForm.status,objetivo:dadosForm.objetivo}],msg:'Atualizado com sucesso!'});
	  })
	})

	wreq.on('error', error => {
	  console.error(error)
	})

	wreq.write(data)
	wreq.end()
};

// Delete a modulomenu by Id
module.exports.delete = function (application,req, res) {
	
	const id = req.query.idmodulomenu;
	var dadosForm = req.query;
	req.assert('idmodulomenu', 'Identificador do modulomenu é um dado obrigatório. Informe por favor!').notEmpty();
	var erros = req.validationErrors();
	
	if(erros){
		console.log(erros);
		res.render("ModuloMenus/crudModuloMenus", {validacao:erros,ModuloMenus:[]});
		return;
	}
	
	
	const http = require('http')

	const data = JSON.stringify(dadosForm)

	const options = {
	  hostname: 'localhost',
	  port: 8083,
	  path: '/api/exc/modulomenu',
	  method: 'delete',
	  headers: {
	    'Content-Type': 'application/json',
	    'Content-Length': data.length
	  }
	}
	
	const wreq = http.request(options, wres => {
	 // console.log(`statusCode: ${res.statusCode}`)
	  wres.on('data', d => {
	  	
	    res.render('modulomenu/crudmodulomenu', {validacao:[],ModuloMenus:[{idsistema:dadosForm.idsistema,idmodulomenu:dadosForm.idmodulomenu,modulomenu:dadosForm.modulomenu,status:dadosForm.status,objetivo:dadosForm.objetivo}],msg:'Excluido com sucesso!'});
	  })
	})

	wreq.on('error', error => {
	  console.error(error)
	})

	wreq.write(data)
	wreq.end()
};