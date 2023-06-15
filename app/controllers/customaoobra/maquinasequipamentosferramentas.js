module.exports.listarmaquinasequipamentosferramentas = function(application, req, res){

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
	  	 Setor(application, req, res,JSON.parse(d));
		})
	  })
		wreq.on('error', error => {
		  console.error(error)
		})
	//wreq.write(data)
	wreq.end()

	function Setor(application,req,res,cli){
		const http = require('http')
	const options = {
	  hostname: 'localhost',
	  port: 4040,
	  path:'/Setores',
	  method: 'GET',
	  headers: {'Accept' : 'application/json'}
	}

	const wreq = http.request(options, wres => {
	 // console.log(`statusCode: ${wres.statusCode}`)

	  wres.on('data', d => {
	  	 var wdata = JSON.parse(d);
	  	 Categorias(application, req, res,cli,JSON.parse(d));
		})
	  })
		wreq.on('error', error => {
		  console.error(error)
		})
	//wreq.write(data)
	wreq.end()
	}

	function Categorias(application,req,res,cli,setor){
		const http = require('http')
	const options = {
	  hostname: 'localhost',
	  port: 4040,
	  path:'/Categorias',
	  method: 'GET',
	  headers: {'Accept' : 'application/json'}
	}

	const wreq = http.request(options, wres => {
	 // console.log(`statusCode: ${wres.statusCode}`)

	  wres.on('data', d => {
	  	 var wdata = JSON.parse(d);
	  	 Maquinas(application, req, res,cli,setor,JSON.parse(d));
		})
	  })
		wreq.on('error', error => {
		  console.error(error)
		})
	//wreq.write(data)
	wreq.end()
	}
	
	function Maquinas(application,req,res,cli,setor,cat){
	//console.log(req)
	//const data = JSON.stringify(req.query)
	const http = require('http')
	const options = {
	  hostname: 'localhost',
	  port: 4040,
	  path:'/MaquinasEquipamentosFerramentas',
	  method: 'GET',
	  headers: {'Accept' : 'application/json'}
	}

	const wreq = http.request(options, wres => {
	 // console.log(`statusCode: ${wres.statusCode}`)

	  wres.on('data', d => {
	  	 var wdata = JSON.parse(d);
	  	 res.render('customaoobra/maquinasequipferramentas', {validacao:[],MaquinasEquipamentos:wdata,Empresas:cli,Setor:setor,Categorias:cat,msg:null});
		})
	  })
		wreq.on('error', error => {
		  console.error(error)
		})
	//wreq.write(data)
	wreq.end()
	}
}
module.exports.pesquisarmaquinasequipamentosferramentas = function(application, req, res){
	var dadosForm = req.query
	const data = JSON.stringify(req.query)
	console.log(req)
	const http = require('http')
	const options = {
	  hostname: 'localhost',
	  port: 4040,
	  path:'/MaquinasEquipamentosFerramenta?nomemaquinasequipamentosferramentas='+dadosForm.nomemaquinasequipamentosferramentas.replace(" ","%20")+"&status="+dadosForm.status,
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
	  	 res.render('customaoobra/maquinasequipferramentas', {validacao:[],MaquinasEquipamentos:wdata,msg:null});
		})
	  })
		wreq.on('error', error => {
		  console.error(error)
		})
	//wreq.write(data)
	wreq.end()
}
// Post a maquinasequipamentosferramentas
module.exports.create = function(application, req, res){	
	// Save to PostgreSQL database
	var dadosForm = req.body;
	
	var maquinasequipamentosferramentas = {
		empresa: parseInt(req.body.empresa),
		categoria: parseInt(req.body.categoria),
		subcategoria: req.body.subcategoria,
		idsetor: parseInt(req.body.idsetor),
		sequencia: parseInt(req.body.sequencia),
		descricaodobem: req.body.descricaodobem,
		marca: req.body.marca,
		modelo: req.body.modelo,
		datadeaquisicao: req.body.datadeaquisicao,
		quantidade: parseInt(req.body.quantidade),
		precodobem: parseFloat(req.body.precodobem),
		vidadepreciavel: parseInt(req.body.vidadepreciavel),
		taxadepreciavelmes: parseFloat(req.body.taxadepreciavelmes),
		depreciavel: req.body.depreciavel,
		aviso: parseInt(req.body.aviso),
		status: parseInt(req.body.status)
		}
		req.assert('empresa', 'Empresa é um dado obrigatório. Informe por favor!').notEmpty();
		req.assert('categoria', 'Categoria é um dado obrigatório. Informe por favor!').notEmpty();
		req.assert('subcategoria', 'Subcategoria é um dado obrigatório. Informe por favor!').notEmpty();
		req.assert('idsetor', 'Setor é um dado obrigatório. Informe por favor!').notEmpty();
		req.assert('sequencia', 'Sequencia é um dado obrigatório. Informe por favor!').notEmpty();
		req.assert('descricaodobem', 'Descricaodobem é um dado obrigatório. Informe por favor!').notEmpty();
		req.assert('marca', 'Marca é um dado obrigatório. Informe por favor!').notEmpty();
		req.assert('modelo', 'Modelo é um dado obrigatório. Informe por favor!').notEmpty();
		req.assert('datadeaquisicao', 'Datadeaquisicao é um dado obrigatório. Informe por favor!').notEmpty();
		req.assert('quantidade', 'Quantidade é um dado obrigatório. Informe por favor!').notEmpty();
		req.assert('precodobem', 'Precodobem é um dado obrigatório. Informe por favor!').notEmpty();
		req.assert('vidadepreciavel', 'Vidadepreciavel é um dado obrigatório. Informe por favor!').notEmpty();
		req.assert('taxadepreciavelmes', 'Taxadepreciavelmes é um dado obrigatório. Informe por favor!').notEmpty();
		req.assert('depreciavel', 'Depreciavel é um dado obrigatório. Informe por favor!').notEmpty();
		req.assert('aviso', 'Aviso é um dado obrigatório. Informe por favor!').notEmpty();
		req.assert('status', 'Status é um dado obrigatório. Informe por favor!').notEmpty();
	
	 var erros = req.validationErrors();
	
	if(erros){
		console.log(erros);
		res.render("customaoobra/maquinasequipferramentas", {validacao:erros,MaquinasEquipamentos:maquinasequipamentosferramentas,msg:null});
		return;
	}
	
	const http = require('http')
	if (maquinasequipamentosferramentas.datadeaquisicao.length < 10){
			if(maquinasequipamentosferramentas.datadeaquisicao.length < 9){
				maquinasequipamentosferramentas.datadeaquisicao=maquinasequipamentosferramentas.datadeaquisicao.substr(6, 4)+"-0"+maquinasequipamentosferramentas.datadeaquisicao.substr(3, 1)+"-0"+maquinasequipamentosferramentas.datadeaquisicao.substr(0, 1);
			}else{
				maquinasequipamentosferramentas.datadeaquisicao=maquinasequipamentosferramentas.datadeaquisicao.substr(6, 4)+"-"+maquinasequipamentosferramentas.datadeaquisicao.substr(3, 1)+"-0"+maquinasequipamentosferramentas.datadeaquisicao.substr(0, 2);
			}
		}else{
			maquinasequipamentosferramentas.datadeaquisicao=maquinasequipamentosferramentas.datadeaquisicao.substr(6, 4)+"-"+maquinasequipamentosferramentas.datadeaquisicao.substr(3,2)+"-"+maquinasequipamentosferramentas.datadeaquisicao.substr(0,2);
		}
	const data = JSON.stringify(maquinasequipamentosferramentas)

	const options = {
	  hostname: 'localhost',
	  port: 4040,
	  path: '/MaquinasEquipamentosFerramentas',
	  method: 'POST',
	  headers: {
	    'Content-Type': 'application/json',
	    'Content-Length': data.length
	  }
	}
	if (data.idmaquinasequipamentosferramentas > 0){
		options.path = "/MaquinasEquipamentosFerramentas/"+parseInt(data.idmaquinasequipamentosferramentas);
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
	  	res.redirect('/MaquinasEquipamentos');
	    //res.render('customaoobra/maquinasequipferramentas', {validacao:[],MaquinasEquipamentos:maquinasequipamentosferramentas,msg:null});
	  })
	})

	wreq.on('error', error => {
	  console.error(error)
	})

	wreq.write(data)
	wreq.end()

};
// FETCH All maquinasequipamentosferramentas
module.exports.findAll = function (application,req, res)  {	
	
};
// Find a maquinasequipamentosferramentas by Id
module.exports.findById = function (application,req, res)  {	
		
};
// Update a maquinasequipamentosferramentas
// Put a maquinasequipamentosferramentas
module.exports.validarmaquinasequipamentosferramentas = function(application, req, res){
	//console.log(req.body)
	var dadosForm = req.body;
	
	var maquinasequipamentosferramentas = {
		empresa: req.body.empresa,
		categoria: req.body.categoria,
		subcategoria: req.body.subcategoria,
		idsetor: req.body.idsetor,
		sequencia: req.body.sequencia,
		descricaodobem: req.body.descricaodobem,
		marca: req.body.marca,
		modelo: req.body.modelo,
		datadeaquisicao: req.body.datadeaquisicao,
		quantidade: req.body.quantidade,
		precodobem: req.body.precodobem,
		vidadepreciavel: req.body.vidadepreciavel,
		taxadepreciavelmes: req.body.taxadepreciavelmes,
		depreciavel: req.body.depreciavel,
		aviso: req.body.aviso,
		status: req.body.status
		}
		req.assert('empresa', 'empresa é um dado obrigatório. Informe por favor!').notEmpty();
		req.assert('categoria', 'categoria é um dado obrigatório. Informe por favor!').notEmpty();
		req.assert('subcategoria', 'subcategoria é um dado obrigatório. Informe por favor!').notEmpty();
		req.assert('idsetor', 'idsetor é um dado obrigatório. Informe por favor!').notEmpty();
		req.assert('sequencia', 'sequencia é um dado obrigatório. Informe por favor!').notEmpty();
		req.assert('descricaodobem', 'descricaodobem é um dado obrigatório. Informe por favor!').notEmpty();
		req.assert('marca', 'marca é um dado obrigatório. Informe por favor!').notEmpty();
		req.assert('modelo', 'modelo é um dado obrigatório. Informe por favor!').notEmpty();
		req.assert('datadeaquisicao', 'datadeaquisicao é um dado obrigatório. Informe por favor!').notEmpty();
		req.assert('quantidade', 'quantidade é um dado obrigatório. Informe por favor!').notEmpty();
		req.assert('precodobem', 'precodobem é um dado obrigatório. Informe por favor!').notEmpty();
		req.assert('vidadepreciavel', 'vidadepreciavel é um dado obrigatório. Informe por favor!').notEmpty();
		req.assert('taxadepreciavelmes', 'taxadepreciavelmes é um dado obrigatório. Informe por favor!').notEmpty();
		req.assert('depreciavel', 'depreciavel é um dado obrigatório. Informe por favor!').notEmpty();
		req.assert('aviso', 'aviso é um dado obrigatório. Informe por favor!').notEmpty();
		req.assert('status', 'Status é um dado obrigatório. Informe por favor!').notEmpty();
			
	var erros = req.validationErrors();
	
	if(erros){
		//console.log(erros);
		res.render("customaoobra/maquinasequipferramentas", {validacao:erros,MaquinasEquipamentos:maquinasequipamentosferramentas,msg:null});
		return;
	}
	
	//var sql = "Insert Into maquinasequipamentosferramentas(nomemaquinasequipamentosferramentas, sigla, versao, url) values ('"+req.body.nomemaquinasequipamentosferramentas+"','"+req.body.sigla+"','"+req.body.versao+"','"+req.body.url+"')";
	const http = require('http')

	const data = JSON.stringify(maquinasequipamentosferramentas)

	const options = {
	  hostname: 'localhost',
	  port: 4040,
	  path: '/MaquinasEquipamentosFerramenta',
	  method: 'POST',
	  headers: {
	    'Content-Type': 'application/json',
	    'Content-Length': data.length
	  }
	}
	if (dadosForm.sequencia > 0){
		options.path = "/MaquinasEquipamentosFerramenta/"+parseInt(data.sequencia);
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
	  	//res.status(200).json({idmaquinasequipamentosferramentas:dadosForm.idmaquinasequipamentosferramentas,nomemaquinasequipamentosferramentas:dadosForm.nomemaquinasequipamentosferramentas,sigla:dadosForm.sigla,versao:dadosForm.versao,url:dadosForm.url,status:dadosForm.status});
	    res.render('customaoobra/maquinasequipferramentas', {validacao:[],MaquinasEquipamentos:maquinasequipamentosferramentas,msg:'Inclusao com sucesso!'});
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
	var maquinasequipamentosferramentas = {
		empresa: parseInt(req.query.empresa),
		categoria: parseInt(req.query.categoria),
		subcategoria: req.query.subcategoria,
		idsetor: parseInt(req.query.idsetor),
		sequencia: parseInt(req.query.sequencia),
		descricaodobem: req.query.descricaodobem,
		marca: req.query.marca,
		modelo: req.query.modelo,
		datadeaquisicao: req.query.datadeaquisicao,
		quantidade: parseInt(req.query.quantidade),
		precodobem: parseFloat(req.query.precodobem),
		vidadepreciavel: parseInt(req.query.vidadepreciavel),
		taxadepreciavelmes: parseFloat(req.query.taxadepreciavelmes),
		depreciavel: req.query.depreciavel,
		aviso: parseInt(req.query.aviso),
		status: parseInt(req.query.status)
		}
		req.assert('empresa', 'empresa é um dado obrigatório. Informe por favor!').notEmpty();
		req.assert('categoria', 'categoria é um dado obrigatório. Informe por favor!').notEmpty();
		req.assert('subcategoria', 'subcategoria é um dado obrigatório. Informe por favor!').notEmpty();
		req.assert('idsetor', 'idsetor é um dado obrigatório. Informe por favor!').notEmpty();
		req.assert('sequencia', 'sequencia é um dado obrigatório. Informe por favor!').notEmpty();
		req.assert('descricaodobem', 'descricaodobem é um dado obrigatório. Informe por favor!').notEmpty();
		req.assert('marca', 'marca é um dado obrigatório. Informe por favor!').notEmpty();
		req.assert('modelo', 'modelo é um dado obrigatório. Informe por favor!').notEmpty();
		req.assert('datadeaquisicao', 'datadeaquisicao é um dado obrigatório. Informe por favor!').notEmpty();
		req.assert('quantidade', 'quantidade é um dado obrigatório. Informe por favor!').notEmpty();
		req.assert('precodobem', 'precodobem é um dado obrigatório. Informe por favor!').notEmpty();
		req.assert('vidadepreciavel', 'vidadepreciavel é um dado obrigatório. Informe por favor!').notEmpty();
		req.assert('taxadepreciavelmes', 'taxadepreciavelmes é um dado obrigatório. Informe por favor!').notEmpty();
		req.assert('depreciavel', 'depreciavel é um dado obrigatório. Informe por favor!').notEmpty();
		req.assert('aviso', 'aviso é um dado obrigatório. Informe por favor!').notEmpty();
		req.assert('status', 'status é um dado obrigatório. Informe por favor!').notEmpty();
	
	var erros = req.validationErrors();
	
	if(erros){
		//console.log(erros);
		res.render("customaoobra/maquinasequipferramentas", {validacao:erros,MaquinasEquipamentos:maquinasequipamentosferramentas,Empresas:[],Setor:[],Categorias:[],msg:null});
		return;
	}
	
	if (maquinasequipamentosferramentas.datadeaquisicao.length < 10){
			if(maquinasequipamentosferramentas.datadeaquisicao.length < 9){
				maquinasequipamentosferramentas.datadeaquisicao=maquinasequipamentosferramentas.datadeaquisicao.substr(6, 4)+"-0"+maquinasequipamentosferramentas.datadeaquisicao.substr(3, 1)+"-0"+maquinasequipamentosferramentas.datadeaquisicao.substr(0, 1);
			}else{
				maquinasequipamentosferramentas.datadeaquisicao=maquinasequipamentosferramentas.datadeaquisicao.substr(6, 4)+"-"+maquinasequipamentosferramentas.datadeaquisicao.substr(3, 1)+"-0"+maquinasequipamentosferramentas.datadeaquisicao.substr(0, 2);
			}
		}else{
			maquinasequipamentosferramentas.datadeaquisicao=maquinasequipamentosferramentas.datadeaquisicao.substr(6, 4)+"-"+maquinasequipamentosferramentas.datadeaquisicao.substr(3,2)+"-"+maquinasequipamentosferramentas.datadeaquisicao.substr(0,2);
	}
	const http = require('http')

	const data = JSON.stringify(maquinasequipamentosferramentas)
	
	//console.log(req);
	const options = {
	  hostname: 'localhost',
	  port: 4040,
	  path: '/MaquinasEquipamentosFerramenta',
	  method: 'post',
	  headers: {
	    'Content-Type': 'application/json',
	    'Content-Length': data.length
	  }
	}
	if (maquinasequipamentosferramentas.sequencia > 0){
		options.path = '/MaquinasEquipamentosFerramenta/'+parseInt(maquinasequipamentosferramentas.sequencia)+'/'+parseInt(maquinasequipamentosferramentas.empresa)+'/'+parseInt(maquinasequipamentosferramentas.categoria)+'/'+parseInt(maquinasequipamentosferramentas.subcategoria)+'/'+parseInt(maquinasequipamentosferramentas.idsetor);
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
	  	res.redirect('/MaquinasEquipamentos');
	    //res.render('customaoobra/maquinasequipferramentas', {validacao:[],MaquinasEquipamentos:maquinasequipamentosferramentas,Empresas:[],Setor:[],Categorias:[],msg:'Alterado com sucesso!'});
	  })
	})

	wreq.on('error', error => {
	  console.error(error)
	})

	wreq.write(data)
	wreq.end()
};

// Delete a maquinasequipamentosferramentas by Id
module.exports.delete = function (application,req, res) {
	
	const id = req.query.codigo;
	var dadosForm = req.query;
	var maquinasequipamentosferramentas = {
		empresa: req.query.empresa,
		categoria: req.query.categoria,
		subcategoria: req.query.subcategoria,
		idsetor: req.query.idsetor,
		sequencia: parseInt(req.query.sequencia),
		descricaodobem: req.query.descricaodobem,
		marca: req.query.marca,
		modelo: req.query.modelo,
		datadeaquisicao: req.query.datadeaquisicao,
		quantidade: req.query.quantidade,
		precodobem: parseFloat(req.query.precodobem),
		vidadepreciavel: req.query.vidadepreciavel,
		taxadepreciavelmes: req.query.taxadepreciavelmes,
		depreciavel: req.query.depreciavel,
		aviso: req.query.aviso,
		status: req.query.status
		}
		req.assert('sequencia', 'sequencia é um dado obrigatório. Informe por favor!').notEmpty();
		
		req.assert('status', 'status é um dado obrigatório. Informe por favor!').notEmpty();
		
	var erros = req.validationErrors();
	
	if(erros){
		console.log(erros);
		res.render("customaoobra/maquinasequipferramentas", {validacao:erros,MaquinasEquipamentos:maquinasequipamentosferramentas,msg:null});
		return;
	}
	
	//var sql = "Insert Into maquinasequipamentosferramentas(nomemaquinasequipamentosferramentas, sigla, versao, url) values ('"+req.body.nomemaquinasequipamentosferramentas+"','"+req.body.sigla+"','"+req.body.versao+"','"+req.body.url+"')";
	const http = require('http')

	const data = JSON.stringify(maquinasequipamentosferramentas)

	const options = {
	  hostname: 'localhost',
	  port: 4040,
	  path: "/MaquinasEquipamentosFerramenta?sequencia="+parseInt(data.sequencia)+"&empresa="+parseInt(data.empresa)+"&categoria="+parseInt(data.categoria)+"&subcategoria="+parseInt(data.subcategoria)+"&idsetor="+parseInt(data.idsetor),
	  method: 'delete',
	  headers: {
	    'Content-Type': 'application/json',
	    'Content-Length': data.length
	  }
	}
	
	const wreq = http.request(options, wres => {
	 // console.log(`statusCode: ${res.statusCode}`)
	  wres.on('data', d => {
	  	res.redirect('/MaquinasEquipamentos');
	    //res.render('customaoobra/maquinasequipferramentas', {validacao:[],MaquinasEquipamentos:maquinasequipamentosferramentas,msg:'Exclusao processada com sucesso!'});
	  })
	})

	wreq.on('error', error => {
	  console.error(error)
	})

	wreq.write(data)
	wreq.end()
};
module.exports.Customaoobrauplmaqequipferramentas = function (application,req,res){
	console.log(req.body);
	var wpath = req.body.wpath;
	var bpath = req.body.bpath;
	wpath = wpath.replace('C:\\fakepath','');
	wpath = bpath+''+wpath;
	console.log("novo=",wpath);
	var xlsx = require("xlsx");
	//var wb = xlsx.readFile("Dicionário_de_Dados.xls",{cellDates:true});
	var wb = xlsx.readFile(wpath,{cellDates:true});
	//Lista os nomes das abas contidas no arquivo
	//console.log(wb.SheetNames);
	//Obtem os dados da aba de nome Configurações
	var ws = wb.Sheets["DemonstrativoDespesas"];
	//Exibe os dados da aba
	//console.log(ws)
	//Converte os dados da aba no formato Json
	var aba = xlsx.utils.sheet_to_json(ws);
	//Ler a estrutura da aba e inclui mais uma coluna
	var detalheAba = aba.map(function(record){
		//record.__Empty_34 = "Teste";
		return record;
	});
	//Define o objeto
	var demonstrativodedespesas = {
		iddespesa: 0,
		empresa: 0,
		despmediasmensais: "",
		valor2: 0.00,
		idtipodespesa: 0,
		dataevento: null,
		idsubtipodespesa: 0,
		valor: 0.00
		}
		
	
	
	//Lista os dados da aba
	for (i=0; i < detalheAba.length; i++){
		demonstrativodedespesas.empresa=4;
		demonstrativodedespesas.iddespesa=0;
		demonstrativodedespesas.despmediasmensais=detalheAba[i].despmediasmensais;
		demonstrativodedespesas.valor2=parseFloat(detalheAba[i].valor2);
		demonstrativodedespesas.idtipodespesa=parseInt(detalheAba[i].idtipodespesa);
		demonstrativodedespesas.idsubtipodespesa=parseInt(detalheAba[i].idsubtipodespesa);
		demonstrativodedespesas.valor=parseFloat(detalheAba[i].valor);
		demonstrativodedespesas.dataevento=detalheAba[i].dataevento;
		const data = JSON.stringify(demonstrativodedespesas)
		const http = require('http')

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
		const wreq = http.request(options, wres => {
	 		console.log(`statusCode: ${res.statusCode}`)
	  		wres.on('data', d => {
	  			
	  			})
		})
		wreq.on('error', error => {
		  console.error(error)
		})
		wreq.write(data)
		wreq.end()
	}
	//console.log(detalheAba);
	console.log(detalheAba.length);
}