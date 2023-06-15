module.exports.caddemonstrativodedespesas = function(application, req, res){
	
	res.render('customaoobra/demonstrativodedespesas', {validacao:[],Demonstrativodedespesas:[],msg:null});
}
module.exports.listardemonstrativodedespesas = function(application, req, res){
	const http = require('http')
	const options = {
	  hostname: 'localhost',
	  port: 4040,
	  path:'/Clientes',
	  method: 'GET',
	  headers: {'Accept' : 'application/json'}
	}

	const wreq = http.request(options, wres => {
	 // console.log(`statusCode: ${wres.statusCode}`)

	  wres.on('data', d => {
	  	 var wdata = JSON.parse(d);
	  	 TipoDespesas(application, req, res,JSON.parse(d));
		})
	  })
		wreq.on('error', error => {
		  console.error(error)
		})
	//wreq.write(data)
	wreq.end()

	function TipoDespesas(application,req,res,cli){
		const http = require('http')
		const options = {
		  hostname: 'localhost',
		  port: 4040,
		  path:'/TipoDespesas',
		  method: 'GET',
		  headers: {'Accept' : 'application/json'}
		}

		const wreq = http.request(options, wres => {

		  wres.on('data', d => {
		  	 var wdata = JSON.parse(d);
		  	 DemenstrativosDesp(application,req,res,cli,wdata);
			})
		  })
			wreq.on('error', error => {
			  console.error(error)
			})
		//wreq.write(data)
		wreq.end()
	}

	function DemenstrativosDesp(application,req,res,cli,tipo){
	const http = require('http')
	const options = {
	  hostname: 'localhost',
	  port: 4040,
	  path:'/DemonstrativoDespesas',
	  method: 'GET',
	  headers: {'Accept' : 'application/json'}
	}

	const wreq = http.request(options, wres => {

	  wres.on('data', d => {
	  	 var wdata = JSON.parse(d);
	  	 res.render('customaoobra/demonstrativodedespesas', {validacao:[],Demonstrativodedespesas:wdata,Clientes:cli,TipoDespesas:tipo,msg:null});
		})
	  })
		wreq.on('error', error => {
		  console.error(error)
		})
	//wreq.write(data)
	wreq.end()
};
}
module.exports.pesquisardemonstrativodedespesas = function(application, req, res){
	var dadosForm = req.query
	const data = JSON.stringify(req.query)
	console.log(dadosForm)
	const http = require('http')
	const options = {
	  hostname: 'localhost',
	  port: 4040,
	  path:'/Pesquisar/DemonstrativoDespesas/'+dadosForm.despmediasmensais.replace(" ","%20"),//+",empresa="+dadosForm.empresa+",idtipodespesa="+parseInt(dadosForm.idtipodespesa)+",dataevento="+dadosForm.dataevento+",idsubtipodespesa="+parseInt(dadosForm.idsubtipodespesa)+",valor="+dadosForm.valor,
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
			Clientes(application,req,res,wdata)	  	
		})
	  })
		wreq.on('error', error => {
		  console.error(error)
		})
	
	wreq.end()

	function Clientes(application,req,res,Desp){
		const http = require('http')
		const options = {
		  hostname: 'localhost',
		  port: 4040,
		  path:'/Clientes',
		  method: 'GET',
		  headers: {'Accept' : 'application/json'}
		}

	const wreq = http.request(options, wres => {
	 // console.log(`statusCode: ${wres.statusCode}`)

	  wres.on('data', d => {
	  	 var wdata = JSON.parse(d);
	  	 TipoDespesas(application, req, res,Desp,JSON.parse(d));
		})
	  })
		wreq.on('error', error => {
		  console.error(error)
		})
	//wreq.write(data)
	wreq.end()
}
	function TipoDespesas(application,req,res,Desp,cli){
		const http = require('http')
		const options = {
		  hostname: 'localhost',
		  port: 4040,
		  path:'/TipoDespesas',
		  method: 'GET',
		  headers: {'Accept' : 'application/json'}
		}

		const wreq = http.request(options, wres => {

		  wres.on('data', d => {
		  	 var wdata = JSON.parse(d);
		  	 console.log(Desp,cli,wdata)
		  	  res.render('customaoobra/demonstrativodedespesas', {validacao:[],Demonstrativodedespesas:Desp,Clientes:cli,TipoDespesas:wdata,msg:null});
			})
		  })
			wreq.on('error', error => {
			  console.error(error)
			})
		//wreq.write(data)
		wreq.end()
	}
}
// Post a demonstrativodedespesas
module.exports.create = function(application, req, res){	
	// Save to PostgreSQL database
	console.log(req)
	var dadosForm = req.body;
	var demonstrativodedespesas = {
		iddespesa: 0,
		empresa: parseInt(req.body.empresa),
		despmediasmensais: req.body.despmediasmensais,
		valor2: req.body.valor,
		idtipodespesa: parseInt(req.body.idtipodespesa),
		dataevento: req.body.dataevento,
		idsubtipodespesa: parseInt(req.body.idsubtipodespesa),
		valor: parseFloat(req.body.valor)
		}
		req.assert('iddespesa', 'iddespesa é um dado obrigatório. Informe por favor!').notEmpty();
		req.assert('empresa', 'empresa é um dado obrigatório. Informe por favor!').notEmpty();
		req.assert('despmediasmensais', 'despmediasmensais é um dado obrigatório. Informe por favor!').notEmpty();
		//req.assert('valor2', 'valor2 é um dado obrigatório. Informe por favor!').notEmpty();
		req.assert('idtipodespesa', 'idtipodespesa é um dado obrigatório. Informe por favor!').notEmpty();
		req.assert('dataevento', 'dataevento é um dado obrigatório. Informe por favor!').notEmpty();
		req.assert('idsubtipodespesa', 'idsubtipodespesa é um dado obrigatório. Informe por favor!').notEmpty();
		req.assert('valor', 'valor é um dado obrigatório. Informe por favor!').notEmpty();

	 var erros = req.validationErrors();
	
	if(erros){
		console.log(erros);
		res.render("customaoobra/demonstrativodedespesas", {validacao:erros,Demonstrativodedespesas:demonstrativodedespesas,msg:null});
		return;
	}
	
	const http = require('http')
	if (demonstrativodedespesas.dataevento.length < 10){
			if(demonstrativodedespesas.dataevento.length < 9){
				demonstrativodedespesas.dataevento=demonstrativodedespesas.dataevento.substr(6, 4)+"-0"+demonstrativodedespesas.dataevento.substr(3, 1)+"-0"+demonstrativodedespesas.dataevento.substr(0, 1);
			}else{
				demonstrativodedespesas.dataevento=demonstrativodedespesas.dataevento.substr(6, 4)+"-"+demonstrativodedespesas.dataevento.substr(3, 1)+"-0"+demonstrativodedespesas.dataevento.substr(0, 2);
			}
		}else{
			demonstrativodedespesas.dataevento=demonstrativodedespesas.dataevento.substr(6, 4)+"-"+demonstrativodedespesas.dataevento.substr(3,2)+"-"+demonstrativodedespesas.dataevento.substr(0,2);
		}

	const data = JSON.stringify(demonstrativodedespesas)

	const options = {
	  hostname: 'localhost',
	  port: 4040,
	  path: '/DemonstrativoDespesas',
	  method: 'POST',
	  headers: {
	    'Content-Type': 'application/json',
	    'Content-Length': data.length
	  }
	}
	if (dadosForm.iddespesa > 0){
		options.path = "/DemonstrativoDespesa";
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
	  	res.redirect('/DemonstrativoDespesas');
	  })
	})

	wreq.on('error', error => {
	  console.error(error)
	})

	wreq.write(data)
	wreq.end()

};
// FETCH All demonstrativodedespesas
module.exports.findAll = function (application,req, res)  {	
	
};
// Find a demonstrativodedespesas by Id
module.exports.findById = function (application,req, res)  {	
		
};
// Update a demonstrativodedespesas
// Put a demonstrativodedespesas
module.exports.validardemonstrativodedespesas = function(application, req, res){
	//console.log(req.body)
	var dadosForm = req.body;
	
	var demonstrativodedespesas = {
		iddespesa: req.body.iddespesa,
		empresa: req.body.empresa,
		despmediasmensais: req.body.despmediasmensais,
		valor2: req.body.valor2,
		idtipodespesa: req.body.idtipodespesa,
		dataevento: req.body.dataevento,
		idsubtipodespesa: req.body.idsubtipodespesa,
		valor: req.body.valor,
		}
		req.assert('iddespesa', 'iddespesa é um dado obrigatório. Informe por favor!').notEmpty();
		req.assert('empresa', 'empresa é um dado obrigatório. Informe por favor!').notEmpty();
		req.assert('despmediasmensais', 'despmediasmensais é um dado obrigatório. Informe por favor!').notEmpty();
		req.assert('valor2', 'valor2 é um dado obrigatório. Informe por favor!').notEmpty();
		req.assert('idtipodespesa', 'idtipodespesa é um dado obrigatório. Informe por favor!').notEmpty();
		req.assert('dataevento', 'dataevento é um dado obrigatório. Informe por favor!').notEmpty();
		req.assert('idsubtipodespesa', 'idsubtipodespesa é um dado obrigatório. Informe por favor!').notEmpty();
		req.assert('valor', 'valor é um dado obrigatório. Informe por favor!').notEmpty();
	
	var erros = req.validationErrors();
	
	if(erros){
		//console.log(erros);
		res.render("customaoobra/demonstrativodedespesas", {validacao:erros,Demonstrativodedespesas:demonstrativodedespesas,msg:null});
		return;
	}
	
	//var sql = "Insert Into demonstrativodedespesas(nomedemonstrativodedespesas, sigla, versao, url) values ('"+req.body.nomedemonstrativodedespesas+"','"+req.body.sigla+"','"+req.body.versao+"','"+req.body.url+"')";
	const http = require('http')

	const data = JSON.stringify(demonstrativodedespesas)

	const options = {
	  hostname: 'localhost',
	  port: 4040,
	  path: '/api/inc/demonstrativodedespesas',
	  method: 'POST',
	  headers: {
	    'Content-Type': 'application/json',
	    'Content-Length': data.length
	  }
	}
	if (dadosForm.iddespesa > 0){
		options.path = "/api/atualiza/demonstrativodedespesas";
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
	  	res.redirect('/Demonstrativodedespesas');
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
	var demonstrativodedespesas = {
		iddespesa: parseInt(req.query.iddespesa),
		empresa: parseInt(req.query.empresa),
		despmediasmensais: req.query.despmediasmensais,
		valor2: parseFloat(req.query.valor),
		idtipodespesa: parseInt(req.query.idtipodespesa),
		dataevento: req.query.dataevento,
		idsubtipodespesa: parseInt(req.query.idsubtipodespesa),
		valor: parseFloat(req.query.valor)
		}
		req.assert('iddespesa', 'iddespesa é um dado obrigatório. Informe por favor!').notEmpty();
		req.assert('empresa', 'empresa é um dado obrigatório. Informe por favor!').notEmpty();
		req.assert('despmediasmensais', 'despmediasmensais é um dado obrigatório. Informe por favor!').notEmpty();
		//req.assert('valor2', 'valor2 é um dado obrigatório. Informe por favor!').notEmpty();
		req.assert('idtipodespesa', 'idtipodespesa é um dado obrigatório. Informe por favor!').notEmpty();
		req.assert('dataevento', 'dataevento é um dado obrigatório. Informe por favor!').notEmpty();
		req.assert('idsubtipodespesa', 'idsubtipodespesa é um dado obrigatório. Informe por favor!').notEmpty();
		req.assert('valor', 'valor é um dado obrigatório. Informe por favor!').notEmpty();
	if (demonstrativodedespesas.dataevento.length < 10){
			if(demonstrativodedespesas.dataevento.length < 9){
				demonstrativodedespesas.dataevento=demonstrativodedespesas.dataevento.substr(6, 4)+"-0"+demonstrativodedespesas.dataevento.substr(3, 1)+"-0"+demonstrativodedespesas.dataevento.substr(0, 1);
			}else{
				demonstrativodedespesas.dataevento=demonstrativodedespesas.dataevento.substr(6, 4)+"-"+demonstrativodedespesas.dataevento.substr(3, 1)+"-0"+demonstrativodedespesas.dataevento.substr(0, 2);
			}
		}else{
			demonstrativodedespesas.dataevento=demonstrativodedespesas.dataevento.substr(6, 4)+"-"+demonstrativodedespesas.dataevento.substr(3,2)+"-"+demonstrativodedespesas.dataevento.substr(0,2);
		}
	var erros = req.validationErrors();
	
	if(erros){
		//console.log(erros);
		res.render("customaoobra/demonstrativodedespesas", {validacao:erros,Demonstrativodedespesas:demonstrativodedespesas,Clientes:[],TipoDespesas:[],msg:null});
		return;
	}
	
	//var sql = "Insert Into demonstrativodedespesas(nomedemonstrativodedespesas, sigla, versao, url) values ('"+req.body.nomedemonstrativodedespesas+"','"+req.body.sigla+"','"+req.body.versao+"','"+req.body.url+"')";
	const http = require('http')

	const data = JSON.stringify(demonstrativodedespesas)
	
	//console.log(req);
	const options = {
	  hostname: 'localhost',
	  port: 4040,
	  path: '/DemonstrativoDespesa',
	  method: 'post',
	  headers: {
	    'Content-Type': 'application/json',
	    'Content-Length': data.length
	  }
	}
	if (demonstrativodedespesas.iddespesa > 0){
		options.path = "/DemonstrativoDespesa/"+demonstrativodedespesas.iddespesa;
		options.method= "put";
		console.log("vou alterar ")
		console.log(data);
		console.log(options);
	}else{
		console.log("vou incluir ")
		console.log(data)
	}

	const wreq = http.request(options, wres => {
	  console.log(`statusCode: ${res.statusCode}`)
	  wres.on('data', d => {
	  	console.log(JSON.parse(d))
	  	Clientes(application, req, res, JSON.parse(d))	  	
		})
	  })
		wreq.on('error', error => {
		  console.error(error)
		})
	wreq.write(data)
	wreq.end()

	function Clientes(application,req,res,Desp){
		const http = require('http')
		const options = {
		  hostname: 'localhost',
		  port: 4040,
		  path:'/Clientes',
		  method: 'GET',
		  headers: {'Accept' : 'application/json'}
		}

	const wreq = http.request(options, wres => {
	 // console.log(`statusCode: ${wres.statusCode}`)

	  wres.on('data', d => {
	  	 var wdata = JSON.parse(d);
	  	 TipoDespesas(application, req, res,Desp,JSON.parse(d));
		})
	  })
		wreq.on('error', error => {
		  console.error(error)
		})
	//wreq.write(data)
	wreq.end()
}
	function TipoDespesas(application,req,res,Desp,cli){
		const http = require('http')
		const options = {
		  hostname: 'localhost',
		  port: 4040,
		  path:'/TipoDespesas',
		  method: 'GET',
		  headers: {'Accept' : 'application/json'}
		}

		const wreq = http.request(options, wres => {

		  wres.on('data', d => {
		  	 var wdata = JSON.parse(d);
		  	 //console.log(Desp,cli,wdata)
		  	 res.redirect('/DemonstrativoDespesas');
		  	  //res.render('customaoobra/demonstrativodedespesas', {validacao:[],Demonstrativodedespesas:Desp[0],Clientes:cli,TipoDespesas:wdata,msg:null});
			})
		  })
			wreq.on('error', error => {
			  console.error(error)
			})

		wreq.end()
	}
};

// Delete a demonstrativodedespesas by Id
module.exports.delete = function (application,req, res) {
	console.log(req)
	const id = req.body.iddespesa;
	var dadosForm = req.body;
	var demonstrativodedespesas = {
		iddespesa: parseInt(req.body.iddespesa)
		}
		req.assert('iddespesa', 'iddespesa é um dado obrigatório. Informe por favor!').notEmpty();
		
	var erros = req.validationErrors();
	
	if(erros){
		console.log(erros);
		res.render("customaoobra/demonstrativodedespesas", {validacao:erros,Demonstrativodedespesas:demonstrativodedespesas,Clientes:[],TipoDespesas:[],msg:null});
		return;
	}
	
	const http = require('http')

	const data = JSON.stringify(demonstrativodedespesas)

	const options = {
	  hostname: 'localhost',
	  port: 4040,
	  path: '/DemonstrativoDespesa/'+demonstrativodedespesas.iddespesa,
	  method: 'delete',
	  headers: {
	    'Content-Type': 'application/json',
	    'Content-Length': data.length
	  }
	}
	
	const wreq = http.request(options, wres => {
	 // console.log(`statusCode: ${res.statusCode}`)
	  wres.on('data', d => {
	  	res.redirect('/DemonstrativoDespesas');
	  })
	})

	wreq.on('error', error => {
	  console.error(error)
	})

	wreq.write(data)
	wreq.end()
};