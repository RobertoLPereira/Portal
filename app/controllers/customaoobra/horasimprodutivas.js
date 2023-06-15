module.exports.cadhorasimprodutivas = function(application, req, res){
	
	res.render('customaoobra/horasimprodutivas', {validacao:[],Horasimprodutivas:[],msg:null});
}
module.exports.listarhorasimprodutivas = function(application, req, res){
	//console.log(req)
	//const data = JSON.stringify(req.query)
	const http = require('http')
	const options = {
	  hostname: 'localhost',
	  port: 4040,
	  path:'/horasimprodutivas',
	  method: 'GET',
	  headers: {'Accept' : 'application/json'}
	}

	const wreq = http.request(options, wres => {
	 // console.log(`statusCode: ${wres.statusCode}`)

	  wres.on('data', d => {
	  	 var wdata = JSON.parse(d);
	  	 res.render('customaoobra/horasimprodutivas', {validacao:[],Horasimprodutivas:wdata,msg:null});
		})
	  })
		wreq.on('error', error => {
		  console.error(error)
		})
	//wreq.write(data)
	wreq.end()
}
module.exports.pesquisarhorasimprodutivas = function(application, req, res){
	var dadosForm = req.query
	const data = JSON.stringify(req.query)
	//console.log(req)
	const http = require('http')
	const options = {
	  hostname: 'localhost',
	  port: 4040,
	  path:'/api/pesquisarhorasimprodutivas?nomehorasimprodutivas='+dadosForm.nomehorasimprodutivas.replace(" ","%20")+"&status="+dadosForm.status,
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
	  	 res.render('customaoobra/horasimprodutivas', {validacao:[],Horasimprodutivas:wdata,msg:null});
		})
	  })
		wreq.on('error', error => {
		  console.error(error)
		})
	//wreq.write(data)
	wreq.end()
}
// Post a horasimprodutivas
module.exports.create = function(application, req, res){	
	// Save to PostgreSQL database
	var dadosForm = req.body;
	
	var horasimprodutivas = {
		codigo: req.body.codigo,
		empresa: req.body.empresa,
		codigodahora: req.body.codigodahora,
		descricao: req.body.descricao,
		numerodedias: req.body.numerodedias,
		HorasCentesimais: req.body.HorasCentesimais,
		horasano: req.body.horasano,
		upsize_ts: req.body.upsize_ts,
		}
		req.assert('codigo', 'codigo é um dado obrigatório. Informe por favor!').notEmpty();
		req.assert('empresa', 'empresa é um dado obrigatório. Informe por favor!').notEmpty();
		req.assert('codigodahora', 'codigodahora é um dado obrigatório. Informe por favor!').notEmpty();
		req.assert('descricao', 'descricao é um dado obrigatório. Informe por favor!').notEmpty();
		req.assert('numerodedias', 'numerodedias é um dado obrigatório. Informe por favor!').notEmpty();
		req.assert('HorasCentesimais', 'HorasCentesimais é um dado obrigatório. Informe por favor!').notEmpty();
		req.assert('horasano', 'horasano é um dado obrigatório. Informe por favor!').notEmpty();
		req.assert('upsize_ts', 'upsize_ts é um dado obrigatório. Informe por favor!').notEmpty();
		
	 var erros = req.validationErrors();
	
	if(erros){
		console.log(erros);
		res.render("customaoobra/horasimprodutivas", {validacao:erros,Horasimprodutivas:horasimprodutivas,msg:null});
		return;
	}
	
	const http = require('http')

	const data = JSON.stringify(horasimprodutivas)

	const options = {
	  hostname: 'localhost',
	  port: 4040,
	  path: '/api/inc/horasimprodutivas',
	  method: 'POST',
	  headers: {
	    'Content-Type': 'application/json',
	    'Content-Length': data.length
	  }
	}
	if (dadosForm.codigo > 0){
		options.path = "/api/atualiza/horasimprodutivas";
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
	  	//res.status(200).json({idhorasimprodutivas:dadosForm.idhorasimprodutivas,nomehorasimprodutivas:dadosForm.nomehorasimprodutivas,sigla:dadosForm.sigla,versao:dadosForm.versao,url:dadosForm.url,status:dadosForm.status});
	    res.render('customaoobra/horasimprodutivas', {validacao:[],Horasimprodutivas:horasimprodutivas,msg:null});
	  })
	})

	wreq.on('error', error => {
	  console.error(error)
	})

	wreq.write(data)
	wreq.end()

};
// FETCH All horasimprodutivas
module.exports.findAll = function (application,req, res)  {	
	
};
// Find a horasimprodutivas by Id
module.exports.findById = function (application,req, res)  {	
		
};
// Update a horasimprodutivas
// Put a horasimprodutivas
module.exports.validarhorasimprodutivas = function(application, req, res){
	//console.log(req.body)
	var dadosForm = req.body;
	
	var horasimprodutivas = {
		codigo: req.body.codigo,
		empresa: req.body.empresa,
		codigodahora: req.body.codigodahora,
		descricao: req.body.descricao,
		numerodedias: req.body.numerodedias,
		HorasCentesimais: req.body.HorasCentesimais,
		horasano: req.body.horasano,
		upsize_ts: req.body.upsize_ts,
		}
		req.assert('codigo', 'codigo é um dado obrigatório. Informe por favor!').notEmpty();
		req.assert('empresa', 'empresa é um dado obrigatório. Informe por favor!').notEmpty();
		req.assert('codigodahora', 'codigodahora é um dado obrigatório. Informe por favor!').notEmpty();
		req.assert('descricao', 'descricao é um dado obrigatório. Informe por favor!').notEmpty();
		req.assert('numerodedias', 'numerodedias é um dado obrigatório. Informe por favor!').notEmpty();
		req.assert('HorasCentesimais', 'HorasCentesimais é um dado obrigatório. Informe por favor!').notEmpty();
		req.assert('horasano', 'horasano é um dado obrigatório. Informe por favor!').notEmpty();
		req.assert('upsize_ts', 'upsize_ts é um dado obrigatório. Informe por favor!').notEmpty();
				
	var erros = req.validationErrors();
	
	if(erros){
		//console.log(erros);
		res.render("customaoobra/horasimprodutivas", {validacao:erros,Horasimprodutivas:horasimprodutivas,msg:null});
		return;
	}
	
	//var sql = "Insert Into horasimprodutivas(nomehorasimprodutivas, sigla, versao, url) values ('"+req.body.nomehorasimprodutivas+"','"+req.body.sigla+"','"+req.body.versao+"','"+req.body.url+"')";
	const http = require('http')

	const data = JSON.stringify(horasimprodutivas)

	const options = {
	  hostname: 'localhost',
	  port: 4040,
	  path: '/api/inc/horasimprodutivas',
	  method: 'POST',
	  headers: {
	    'Content-Type': 'application/json',
	    'Content-Length': data.length
	  }
	}
	if (dadosForm.idhorasimprodutivas > 0){
		options.path = "/api/atualiza/horasimprodutivas";
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
	  	//res.status(200).json({idhorasimprodutivas:dadosForm.idhorasimprodutivas,nomehorasimprodutivas:dadosForm.nomehorasimprodutivas,sigla:dadosForm.sigla,versao:dadosForm.versao,url:dadosForm.url,status:dadosForm.status});
	    res.render('customaoobra/horasimprodutivas', {validacao:[],Horasimprodutivas:horasimprodutivas,msg:'Inclusao com sucesso!'});
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
	var horasimprodutivas = {
		codigo: req.body.codigo,
		empresa: req.body.empresa,
		codigodahora: req.body.codigodahora,
		descricao: req.body.descricao,
		numerodedias: req.body.numerodedias,
		HorasCentesimais: req.body.HorasCentesimais,
		horasano: req.body.horasano,
		upsize_ts: req.body.upsize_ts,
		}
		req.assert('codigo', 'codigo é um dado obrigatório. Informe por favor!').notEmpty();
		req.assert('empresa', 'empresa é um dado obrigatório. Informe por favor!').notEmpty();
		req.assert('codigodahora', 'codigodahora é um dado obrigatório. Informe por favor!').notEmpty();
		req.assert('descricao', 'descricao é um dado obrigatório. Informe por favor!').notEmpty();
		req.assert('numerodedias', 'numerodedias é um dado obrigatório. Informe por favor!').notEmpty();
		req.assert('HorasCentesimais', 'HorasCentesimais é um dado obrigatório. Informe por favor!').notEmpty();
		req.assert('horasano', 'horasano é um dado obrigatório. Informe por favor!').notEmpty();
		req.assert('upsize_ts', 'upsize_ts é um dado obrigatório. Informe por favor!').notEmpty();
		
	var erros = req.validationErrors();
	
	if(erros){
		//console.log(erros);
		res.render("customaoobra/horasimprodutivas", {validacao:erros,Horasimprodutivas:horasimprodutivas,msg:null});
		return;
	}
	
	//var sql = "Insert Into horasimprodutivas(nomehorasimprodutivas, sigla, versao, url) values ('"+req.body.nomehorasimprodutivas+"','"+req.body.sigla+"','"+req.body.versao+"','"+req.body.url+"')";
	const http = require('http')

	const data = JSON.stringify(horasimprodutivas)
	
	//console.log(req);
	const options = {
	  hostname: 'localhost',
	  port: 4040,
	  path: '/horasimprodutivas',
	  method: 'post',
	  headers: {
	    'Content-Type': 'application/json',
	    'Content-Length': data.length
	  }
	}
	if (horasimprodutivas.empresa > 0){
		options.path = "/horasimprodutivas/"+horasimprodutivas.empresa;
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
	  	//res.status(200).json({idhorasimprodutivas:dadosForm.idhorasimprodutivas,nomehorasimprodutivas:dadosForm.nomehorasimprodutivas,sigla:dadosForm.sigla,versao:dadosForm.versao,url:dadosForm.url,status:dadosForm.status});
	    res.render('customaoobra/horasimprodutivas', {validacao:[],Horasimprodutivas:horasimprodutivas,msg:'Alterado com sucesso!'});
	  })
	})

	wreq.on('error', error => {
	  console.error(error)
	})

	wreq.write(data)
	wreq.end()
};

// Delete a horasimprodutivas by Id
module.exports.delete = function (application,req, res) {
	
	const id = req.query.codigo;
	var dadosForm = req.query;
	var horasimprodutivas = {
		codigo: req.body.codigo,
		empresa: req.body.empresa,
		codigodahora: req.body.codigodahora,
		descricao: req.body.descricao,
		numerodedias: req.body.numerodedias,
		HorasCentesimais: req.body.HorasCentesimais,
		horasano: req.body.horasano,
		upsize_ts: req.body.upsize_ts,
		}
		req.assert('codigo', 'codigo é um dado obrigatório. Informe por favor!').notEmpty();
		req.assert('empresa', 'empresa é um dado obrigatório. Informe por favor!').notEmpty();
		req.assert('codigodahora', 'codigodahora é um dado obrigatório. Informe por favor!').notEmpty();
		req.assert('descricao', 'descricao é um dado obrigatório. Informe por favor!').notEmpty();
		req.assert('numerodedias', 'numerodedias é um dado obrigatório. Informe por favor!').notEmpty();
		req.assert('HorasCentesimais', 'HorasCentesimais é um dado obrigatório. Informe por favor!').notEmpty();
		req.assert('horasano', 'horasano é um dado obrigatório. Informe por favor!').notEmpty();
		req.assert('upsize_ts', 'upsize_ts é um dado obrigatório. Informe por favor!').notEmpty();
			
	var erros = req.validationErrors();
	
	if(erros){
		console.log(erros);
		res.render("customaoobra/horasimprodutivas", {validacao:erros,Horasimprodutivas:horasimprodutivas,msg:null});
		return;
	}
	
	//var sql = "Insert Into horasimprodutivas(nomehorasimprodutivas, sigla, versao, url) values ('"+req.body.nomehorasimprodutivas+"','"+req.body.sigla+"','"+req.body.versao+"','"+req.body.url+"')";
	const http = require('http')

	const data = JSON.stringify(horasimprodutivas)

	const options = {
	  hostname: 'localhost',
	  port: 4040,
	  path: '/api/exc/horasimprodutivas',
	  method: 'delete',
	  headers: {
	    'Content-Type': 'application/json',
	    'Content-Length': data.length
	  }
	}
	
	const wreq = http.request(options, wres => {
	 // console.log(`statusCode: ${res.statusCode}`)
	  wres.on('data', d => {
	  	//res.status(200).json({idhorasimprodutivas:dadosForm.idhorasimprodutivas,nomehorasimprodutivas:dadosForm.nomehorasimprodutivas,sigla:dadosForm.sigla,versao:dadosForm.versao,url:dadosForm.url,status:dadosForm.status});
	    res.render('customaoobra/horasimprodutivas', {validacao:[],Horasimprodutivas:horasimprodutivas,msg:'Exclusao processada com sucesso!'});
	  })
	})

	wreq.on('error', error => {
	  console.error(error)
	})

	wreq.write(data)
	wreq.end()
};