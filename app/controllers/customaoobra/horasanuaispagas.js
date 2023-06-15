module.exports.cadhorasanuaispagas = function(application, req, res){
	
	res.render('customaoobra/horasanuaispagas', {validacao:[],Horasanuaispagas:[],msg:null});
}
module.exports.listarhorasanuaispagas = function(application, req, res){
	//console.log(req)
	//const data = JSON.stringify(req.query)
	const http = require('http')
	const options = {
	  hostname: 'localhost',
	  port: 4040,
	  path:'/horasanuaispagas',
	  method: 'GET',
	  headers: {'Accept' : 'application/json'}
	}

	const wreq = http.request(options, wres => {
	 // console.log(`statusCode: ${wres.statusCode}`)

	  wres.on('data', d => {
	  	 var wdata = JSON.parse(d);
	  	 res.render('customaoobra/horasanuaispagas', {validacao:[],Horasanuaispagas:wdata,msg:null});
		})
	  })
		wreq.on('error', error => {
		  console.error(error)
		})
	//wreq.write(data)
	wreq.end()
}
module.exports.pesquisarhorasanuaispagas = function(application, req, res){
	var dadosForm = req.query
	const data = JSON.stringify(req.query)
	//console.log(req)
	const http = require('http')
	const options = {
	  hostname: 'localhost',
	  port: 4040,
	  path:'/api/pesquisarhorasanuaispagas?nomehorasanuaispagas='+dadosForm.nomehorasanuaispagas.replace(" ","%20")+"&status="+dadosForm.status,
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
	  	 res.render('customaoobra/horasanuaispagas', {validacao:[],Horasanuaispagas:wdata,msg:null});
		})
	  })
		wreq.on('error', error => {
		  console.error(error)
		})
	//wreq.write(data)
	wreq.end()
}
// Post a horasanuaispagas
module.exports.create = function(application, req, res){	
	// Save to PostgreSQL database
	var dadosForm = req.body;
	
	var horasefetivamentepagasanuais = {
		codigo: req.body.codigo,
		empresa: req.body.empresa,
		codigodahora: req.body.codigodahora,
		descricao: req.body.descricao,
		numerodedias: req.body.numerodedias,
		horascentesimais: req.body.horascentesimais,
		horasano: req.body.horasano,
		upsize_ts: req.body.upsize_ts,
		}
		req.assert('codigo', 'codigo é um dado obrigatório. Informe por favor!').notEmpty();
		req.assert('empresa', 'empresa é um dado obrigatório. Informe por favor!').notEmpty();
		req.assert('codigodahora', 'codigodahora é um dado obrigatório. Informe por favor!').notEmpty();
		req.assert('descricao', 'descricao é um dado obrigatório. Informe por favor!').notEmpty();
		req.assert('numerodedias', 'numerodedias é um dado obrigatório. Informe por favor!').notEmpty();
		req.assert('horascentesimais', 'horascentesimais é um dado obrigatório. Informe por favor!').notEmpty();
		req.assert('horasano', 'horasano é um dado obrigatório. Informe por favor!').notEmpty();
		req.assert('upsize_ts', 'upsize_ts é um dado obrigatório. Informe por favor!').notEmpty();
		
	 var erros = req.validationErrors();
	
	if(erros){
		console.log(erros);
		res.render("customaoobra/horasanuaispagas", {validacao:erros,Horasanuaispagas:horasefetivamentepagasanuais,msg:null});
		return;
	}
	
	const http = require('http')

	const data = JSON.stringify(horasanuaispagas)

	const options = {
	  hostname: 'localhost',
	  port: 4040,
	  path: '/api/inc/horasanuaispagas',
	  method: 'POST',
	  headers: {
	    'Content-Type': 'application/json',
	    'Content-Length': data.length
	  }
	}
	if (dadosForm.codigo > 0){
		options.path = "/api/atualiza/horasanuaispagas";
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
	  	//res.status(200).json({idhorasanuaispagas:dadosForm.idhorasanuaispagas,nomehorasanuaispagas:dadosForm.nomehorasanuaispagas,sigla:dadosForm.sigla,versao:dadosForm.versao,url:dadosForm.url,status:dadosForm.status});
	    res.render('customaoobra/horasanuaispagas', {validacao:[],Horasanuaispagas:horasefetivamentepagasanuais,msg:null});
	  })
	})

	wreq.on('error', error => {
	  console.error(error)
	})

	wreq.write(data)
	wreq.end()

};
// FETCH All horasanuaispagas
module.exports.findAll = function (application,req, res)  {	
	
};
// Find a horasanuaispagas by Id
module.exports.findById = function (application,req, res)  {	
		
};
// Update a horasanuaispagas
// Put a horasanuaispagas
module.exports.validarhorasanuaispagas = function(application, req, res){
	//console.log(req.body)
	var dadosForm = req.body;
	
	var horasefetivamentepagasanuais = {
		codigo: req.body.codigo,
		empresa: req.body.empresa,
		codigodahora: req.body.codigodahora,
		descricao: req.body.descricao,
		numerodedias: req.body.numerodedias,
		horascentesimais: req.body.horascentesimais,
		horasano: req.body.horasano,
		upsize_ts: req.body.upsize_ts,
		}
		req.assert('codigo', 'codigo é um dado obrigatório. Informe por favor!').notEmpty();
		req.assert('empresa', 'empresa é um dado obrigatório. Informe por favor!').notEmpty();
		req.assert('codigodahora', 'codigodahora é um dado obrigatório. Informe por favor!').notEmpty();
		req.assert('descricao', 'descricao é um dado obrigatório. Informe por favor!').notEmpty();
		req.assert('numerodedias', 'numerodedias é um dado obrigatório. Informe por favor!').notEmpty();
		req.assert('horascentesimais', 'horascentesimais é um dado obrigatório. Informe por favor!').notEmpty();
		req.assert('horasano', 'horasano é um dado obrigatório. Informe por favor!').notEmpty();
		req.assert('upsize_ts', 'upsize_ts é um dado obrigatório. Informe por favor!').notEmpty();
		
	var erros = req.validationErrors();
	
	if(erros){
		//console.log(erros);
		res.render("customaoobra/horasanuaispagas", {validacao:erros,Horasanuaispagas:horasefetivamentepagasanuais,msg:null});
		return;
	}
	
	//var sql = "Insert Into horasanuaispagas(nomehorasanuaispagas, sigla, versao, url) values ('"+req.body.nomehorasanuaispagas+"','"+req.body.sigla+"','"+req.body.versao+"','"+req.body.url+"')";
	const http = require('http')

	const data = JSON.stringify(horasanuaispagas)

	const options = {
	  hostname: 'localhost',
	  port: 4040,
	  path: '/api/inc/horasanuaispagas',
	  method: 'POST',
	  headers: {
	    'Content-Type': 'application/json',
	    'Content-Length': data.length
	  }
	}
	if (dadosForm.idhorasanuaispagas > 0){
		options.path = "/api/atualiza/horasanuaispagas";
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
	  	//res.status(200).json({idhorasanuaispagas:dadosForm.idhorasanuaispagas,nomehorasanuaispagas:dadosForm.nomehorasanuaispagas,sigla:dadosForm.sigla,versao:dadosForm.versao,url:dadosForm.url,status:dadosForm.status});
	    res.render('customaoobra/horasanuaispagas', {validacao:[],Horasanuaispagas:horasefetivamentepagasanuais,msg:'Inclusao com sucesso!'});
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
	var horasefetivamentepagasanuais = {
		codigo: req.body.codigo,
		empresa: req.body.empresa,
		codigodahora: req.body.codigodahora,
		descricao: req.body.descricao,
		numerodedias: req.body.numerodedias,
		horascentesimais: req.body.horascentesimais,
		horasano: req.body.horasano,
		upsize_ts: req.body.upsize_ts,
		}
		req.assert('codigo', 'codigo é um dado obrigatório. Informe por favor!').notEmpty();
		req.assert('empresa', 'empresa é um dado obrigatório. Informe por favor!').notEmpty();
		req.assert('codigodahora', 'codigodahora é um dado obrigatório. Informe por favor!').notEmpty();
		req.assert('descricao', 'descricao é um dado obrigatório. Informe por favor!').notEmpty();
		req.assert('numerodedias', 'numerodedias é um dado obrigatório. Informe por favor!').notEmpty();
		req.assert('horascentesimais', 'horascentesimais é um dado obrigatório. Informe por favor!').notEmpty();
		req.assert('horasano', 'horasano é um dado obrigatório. Informe por favor!').notEmpty();
		req.assert('upsize_ts', 'upsize_ts é um dado obrigatório. Informe por favor!').notEmpty();
			
	var erros = req.validationErrors();
	
	if(erros){
		//console.log(erros);
		res.render("customaoobra/horasanuaispagas", {validacao:erros,Horasanuaispagas:horasefetivamentepagasanuais,msg:null});
		return;
	}
	
	//var sql = "Insert Into horasanuaispagas(nomehorasanuaispagas, sigla, versao, url) values ('"+req.body.nomehorasanuaispagas+"','"+req.body.sigla+"','"+req.body.versao+"','"+req.body.url+"')";
	const http = require('http')

	const data = JSON.stringify(horasanuaispagas)
	
	//console.log(req);
	const options = {
	  hostname: 'localhost',
	  port: 4040,
	  path: '/horasanuaispagas',
	  method: 'post',
	  headers: {
	    'Content-Type': 'application/json',
	    'Content-Length': data.length
	  }
	}
	if (horasanuaispagas.empresa > 0){
		options.path = "/horasanuaispagas/"+horasanuaispagas.empresa;
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
	  	//res.status(200).json({idhorasanuaispagas:dadosForm.idhorasanuaispagas,nomehorasanuaispagas:dadosForm.nomehorasanuaispagas,sigla:dadosForm.sigla,versao:dadosForm.versao,url:dadosForm.url,status:dadosForm.status});
	    res.render('customaoobra/horasanuaispagas', {validacao:[],Horasanuaispagas:horasefetivamentepagasanuais,msg:'Alterado com sucesso!'});
	  })
	})

	wreq.on('error', error => {
	  console.error(error)
	})

	wreq.write(data)
	wreq.end()
};

// Delete a horasanuaispagas by Id
module.exports.delete = function (application,req, res) {
	
	const id = req.query.codigo;
	var dadosForm = req.query;
	var horasefetivamentepagasanuais = {
		codigo: req.body.codigo,
		empresa: req.body.empresa,
		codigodahora: req.body.codigodahora,
		descricao: req.body.descricao,
		numerodedias: req.body.numerodedias,
		horascentesimais: req.body.horascentesimais,
		horasano: req.body.horasano,
		upsize_ts: req.body.upsize_ts,
		}
		req.assert('codigo', 'codigo é um dado obrigatório. Informe por favor!').notEmpty();
		req.assert('empresa', 'empresa é um dado obrigatório. Informe por favor!').notEmpty();
		req.assert('codigodahora', 'codigodahora é um dado obrigatório. Informe por favor!').notEmpty();
		req.assert('descricao', 'descricao é um dado obrigatório. Informe por favor!').notEmpty();
		req.assert('numerodedias', 'numerodedias é um dado obrigatório. Informe por favor!').notEmpty();
		req.assert('horascentesimais', 'horascentesimais é um dado obrigatório. Informe por favor!').notEmpty();
		req.assert('horasano', 'horasano é um dado obrigatório. Informe por favor!').notEmpty();
		req.assert('upsize_ts', 'upsize_ts é um dado obrigatório. Informe por favor!').notEmpty();
			
	var erros = req.validationErrors();
	
	if(erros){
		console.log(erros);
		res.render("customaoobra/horasanuaispagas", {validacao:erros,Horasanuaispagas:horasefetivamentepagasanuais,msg:null});
		return;
	}
	
	//var sql = "Insert Into horasanuaispagas(nomehorasanuaispagas, sigla, versao, url) values ('"+req.body.nomehorasanuaispagas+"','"+req.body.sigla+"','"+req.body.versao+"','"+req.body.url+"')";
	const http = require('http')

	const data = JSON.stringify(horasanuaispagas)

	const options = {
	  hostname: 'localhost',
	  port: 4040,
	  path: '/api/exc/horasanuaispagas',
	  method: 'delete',
	  headers: {
	    'Content-Type': 'application/json',
	    'Content-Length': data.length
	  }
	}
	
	const wreq = http.request(options, wres => {
	 // console.log(`statusCode: ${res.statusCode}`)
	  wres.on('data', d => {
	  	//res.status(200).json({idhorasanuaispagas:dadosForm.idhorasanuaispagas,nomehorasanuaispagas:dadosForm.nomehorasanuaispagas,sigla:dadosForm.sigla,versao:dadosForm.versao,url:dadosForm.url,status:dadosForm.status});
	    res.render('customaoobra/horasanuaispagas', {validacao:[],Horasanuaispagas:horasefetivamentepagasanuais,msg:'Exclusao processada com sucesso!'});
	  })
	})

	wreq.on('error', error => {
	  console.error(error)
	})

	wreq.write(data)
	wreq.end()
};