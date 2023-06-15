module.exports.cadOrdemServicoCiencia = function(application, req, res){

	const http = require('http')
		const options = {
		  hostname: 'localhost',
		  port: 8083,
		  path:'/api/todos/ordemservicociencia',
		  method: 'GET',
		  headers: {'Accept' : 'application/json'}
		}

		const wreq = http.request(options, wres => {
		 // console.log(`statusCode: ${wres.statusCode}`)

	  wres.on('data', d => {
	  	 var wdata = JSON.parse(d);
	  	 res.render('ordemservico/ordemservicociencia', {validacao:[],OrdemServicoCiencia:wdata,msg:null});
		})
	  })
		wreq.on('error', error => {
		  console.error(error)
		})
	//wreq.write(data)
	wreq.end()
}
module.exports.listarOrdemServicoCiencia = function(application, req, res){
	//console.log(process)
	//const data = JSON.stringify(req.query)
	listaordemServico(application,req,res);
	return;
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
	  	 ordemservico(application, req, res,JSON.parse(d));
		})
	  })
		wreq.on('error', error => {
		  console.error(error)
		})
	//wreq.write(data)
	wreq.end()

	function ordemservico(application, req, res,Sis){
		const http = require('http')
		const options = {
		  hostname: 'localhost',
		  port: 8083,
		  path:'/api/todos/ordemservico',
		  method: 'GET',
		  headers: {'Accept' : 'application/json'}
		}

		const wreq = http.request(options, wres => {
		 // console.log(`statusCode: ${wres.statusCode}`)

	  wres.on('data', d => {
	  	 var wdata = JSON.parse(d);
	  	  perordemServico(application, req, res,Sis,JSON.parse(d));
		})
	  })
		wreq.on('error', error => {
		  console.error(error)
		})
	wreq.end()
	} 
	//function perordemServico(application, req, res,Sis,Per)
	function listaordemServico(application, req, res)
	{
		//console.log(process);
		const http = require('http')
		const options = {
		  hostname: 'localhost',
		  port: 8083,
		  path:'/api/todos/ordemservicocorpo',
		  method: 'GET',
		  headers: {'Accept' : 'application/json'}
		}

		const wreq = http.request(options, wres => {

	  wres.on('data', d => {
	  	 var wdata = JSON.parse(d);
	  	 console.log('linha 92',process.env.USERNAME)
	  	 res.render('ordemservico/darcienciaordemservico', {validacao:[],OrdemServicos:wdata,Sistemas:[],Perfil:[],msg:null,Usuario:process.env.USER});
		})
	  })
		wreq.on('error', error => {
		  console.error(error)
		})

	wreq.end()
	}
}
module.exports.pesquisarOrdemServicoCiencia = function(application, req, res){
	var dadosForm = req.query
	const data = JSON.stringify(req.query)
	//console.log(req)
	const http = require('http')
	const options = {
	  hostname: 'localhost',
	  port: 8083,
	  path:'/api/pesquisarOrdemServicoCiencia?OrdemServicoCiencia='+dadosForm.OrdemServicoCiencia.replace(" ","%20")+"&status="+dadosForm.status,
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
	  	 res.render('OrdemServicoCiencia/crudOrdemServicoCiencia', {validacao:[],OrdemServicoCiencia:wdata,msg:null});
		})
	  })
		wreq.on('error', error => {
		  console.error(error)
		})
	//wreq.write(data)
	wreq.end()
}
// Post a OrdemServicoCiencia
module.exports.create = function(application, req, res){	
	// Save to PostgreSQL database
	var dadosForm = req.body;
	
	var wordemservicociencia = {
		idordemservicociencia : req.body.idordemservicociencia,
		idordemservico : req.body.idordemservico,
		idpessoa : req.body.idpessoa,
		codigousuariorede : req.body.codigousuariorede,
		dataciencia : req.body.dataciencia,
		status : req.body.status
		};
	
	//console.log(dadosForm)
	var widpessoa = dadosForm.idpessoa[0];
	var widp = widpessoa.split('-');
	var wordemservicocorpo = {
		idordemservico: parseInt(req.body.idOrdemServico),
		datacadastro:req.body.dataCadastro,
		datainiciovalidade : req.body.dataInicioValidade,
		datafimvalidade : req.body.dataFimValidade,
		idusuario : req.body.idusuario,
		corpo : req.body.corpo,
		status : req.body.status,
		codigousuariorede : req.body.codigousuariorede,
		idpessoa : parseInt(widp[0])
		};
	req.assert('idOrdemServico', 'Ordem de Servico é um dado obrigatório. Informe por favor!').notEmpty();
	req.assert('status', 'Status é um dado obrigatório. Informe por favor!').notEmpty();
	req.assert('codigousuariorede', 'Usuario é um dado obrigatório. Informe por favor!').notEmpty();
	var erros = req.validationErrors();
	
	if(erros){
		console.log(erros);
		res.render("ordemservico/darcienciaordemservico", {validacao:erros,OrdemServicoCiencia:[],msg:null,Usuario:wordemservicocorpo.codigousuariorede});
		return;
	}
	var wordemservicociencia = {
		idordemservicociencia : null,
		idordemservico : wordemservicocorpo.idordemservico,
		idpessoa : wordemservicocorpo.idpessoa,
		codigousuariorede : wordemservicocorpo.codigousuariorede,
		dataciencia : new Date(),
		status : req.body.status
		};
	//console.log(wordemservicocorpo)
	const http = require('http')

	const data = JSON.stringify(wordemservicociencia)

	const options = {
	  hostname: 'localhost',
	  port: 8083,
	  path: '/api/inc/ordemservicociencia',
	  method: 'POST',
	  headers: {
	    'Content-Type': 'application/json',
	    'Content-Length': data.length
	  }
	}
	console.log(options,data)
	const wreq = http.request(options, wres => {
	 console.log(`statusCode: ${wres.statusCode}`)
	  wres.on('data', d => {
	  	//res.status(200).json({idOrdemServicoCiencia:dadosForm.idOrdemServicoCiencia,OrdemServicoCiencia:dadosForm.OrdemServicoCiencia,sigla:dadosForm.sigla,versao:dadosForm.versao,url:dadosForm.url,status:dadosForm.status});
	    res.redirect('/Darciencia')
	  })
	})

	wreq.on('error', error => {
	  console.error(error)
	})

	wreq.write(data)
	wreq.end()

};

// Delete a OrdemServicoCiencia by Id
module.exports.delete = function (application,req, res) {
	var dadosForm = req.body;
	/*
	var wordemservicociencia = {
		idordemservicociencia : req.body.idordemservicociencia,
		idordemservico : req.body.idordemservico,
		idpessoa : req.body.idpessoa,
		codigousuariorede : req.body.codigousuariorede,
		dataciencia : req.body.dataciencia,
		status : req.body.status
		};
	*/
	var wordemservicocorpo = {
		idordemservico: parseInt(req.body.idOrdemServico),
		datacadastro:req.body.dataCadastro,
		datainiciovalidade : req.body.dataInicioValidade,
		datafimvalidade : req.body.dataFimValidade,
		idusuario : req.body.idusuario,
		corpo : dadosForm.corpo,
		status : req.body.status,
		codigousuariorede : req.body.codigousuariorede
		};
	req.assert('idordemservico', 'Ordem de Servico é um dado obrigatório. Informe por favor!').notEmpty();
	req.assert('status', 'Status é um dado obrigatório. Informe por favor!').notEmpty();
	req.assert('codigousuariorede', 'Usuario é um dado obrigatório. Informe por favor!').notEmpty();
	
	var erros = req.validationErrors();
	
	if(erros){
		console.log(erros);
		res.render("ordemservico/darcienciaordemservico", {validacao:erros,OrdemServicoCiencia:[],msg:null});
		return;
	}
	
	const http = require('http')

	const data = JSON.stringify(wordemservicociencia)

	const options = {
	  hostname: 'localhost',
	  port: 8083,
	  path: '/api/inc/ordemservicociencia',
	  method: 'POST',
	  headers: {
	    'Content-Type': 'application/json',
	    'Content-Length': data.length
	  }
	}
	
	const wreq = http.request(options, wres => {
	 // console.log(`statusCode: ${res.statusCode}`)
	  wres.on('data', d => {
	  	//res.status(200).json({idOrdemServicoCiencia:dadosForm.idOrdemServicoCiencia,OrdemServicoCiencia:dadosForm.OrdemServicoCiencia,sigla:dadosForm.sigla,versao:dadosForm.versao,url:dadosForm.url,status:dadosForm.status});
	    res.render('ordemservico/darcienciaordemservico', {validacao:[],OrdemServicoCiencia:[{idsistema:dadosForm.idsistema,idOrdemServicoCiencia:dadosForm.idOrdemServicoCiencia,OrdemServicoCiencia:dadosForm.OrdemServicoCiencia,status:dadosForm.status,objetivo:dadosForm.objetivo}],msg:null});
	  })
	})

	wreq.on('error', error => {
	  console.error(error)
	})

	wreq.write(data)
	wreq.end()

};