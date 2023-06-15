module.exports.cadchecklist = function(application, req, res){
	
	res.render('requisitos/checklist', {validacao:[],CheckList:[],msg:null});
}
module.exports.listarChecklists = function(application, req, res){
	//console.log(req)
	//const data = JSON.stringify(req.query)
	
	const http = require('http')
	const options = {
	  hostname: 'localhost',
	  port: 3020,
	  path:'/ReqFuncionais',
	  method: 'GET',
	  headers: {'Accept' : 'application/json'}
	}

	const wreq = http.request(options, wres => {
	 // console.log(`statusCode: ${wres.statusCode}`)

	  wres.on('data', d => {
	  	 checklist(application, req, res,JSON.parse(d));
		})
	  })
		wreq.on('error', error => {
		  console.error(error)
		})
	//wreq.write(data)
	wreq.end()

	function checklist(application, req, res,ReqF){
		const http = require('http')
		const options = {
		  hostname: 'localhost',
		  port: 3020,
		  path:'/CheckList',
		  method: 'GET',
		  headers: {'Accept' : 'application/json'}
		}

		const wreq = http.request(options, wres => {
		 // console.log(`statusCode: ${wres.statusCode}`)

	  wres.on('data', d => {
	  	 var wdata = JSON.parse(d);
	  	 //console.log(wdata);
	  	 res.render('requisitos/checklist', {validacao:[],CheckList:wdata,RequisitosF:ReqF,msg:null});
		})
	  })
		wreq.on('error', error => {
		  console.error(error)
		})
	//wreq.write(data)
	wreq.end()
	}
}
module.exports.pesquisarchecklist = function(application, req, res){
	var dadosForm = req.query
	const data = JSON.stringify(req.query)
	//console.log(req)
	const http = require('http')
	const options = {
	  hostname: 'localhost',
	  port: 3020,
	  path:'/api/pesquisarchecklist?checklist='+dadosForm.checklist.replace(" ","%20")+"&status="+dadosForm.status,
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
	  	 res.render('requisitos/checklist', {validacao:[],CheckList:wdata,msg:null});
		})
	  })
		wreq.on('error', error => {
		  console.error(error)
		})
	//wreq.write(data)
	wreq.end()
}
// Post a checklist
module.exports.create = function(application, req, res){	
	// Save to PostgreSQL database
	var dadosForm = req.body;

	
	var checklist = {
		idchecklist: parseInt(req.body.idchecklist),
		titulo: req.body.titulo,
		dataInicioValidade: req.body.dataInicioValidade,
		dataFimValidade: req.body.dataFimValidade,
		escopo: req.body.escopo,
		definicoes: req.body.definicoes,
		referencias: req.body.referencias,
		premissas: req.body.premissas,
		restricos: req.body.restricos,
		reqinterface: req.body.reqinterface,
		documentacao: req.body.documentacao,
		suporte: req.body.suporte,
		contatos: req.body.contatos,
		observacao: req.body.observacao
	}
	//console.log(checklist);
	
	req.assert('idchecklist', 'Identificador é um dado obrigatório. Informe por favor!').notEmpty();
	req.assert('titulo', 'Título é um dado obrigatório. Informe por favor!').notEmpty();
	req.assert('dataInicioValidade', 'Inicio de validade é um dado obrigatório. Informe por favor!').notEmpty();
	//req.assert('dataFimValidade', 'Status é um dado obrigatório. Informe por favor!').notEmpty();
	req.assert('escopo', 'Escopo é um dado obrigatório. Informe por favor!').notEmpty();
	/*req.assert('definicoes', 'Status é um dado obrigatório. Informe por favor!').notEmpty();
	req.assert('referencias', 'Status é um dado obrigatório. Informe por favor!').notEmpty();
	req.assert('premissas', 'Status é um dado obrigatório. Informe por favor!').notEmpty();
	req.assert('restricos', 'Status é um dado obrigatório. Informe por favor!').notEmpty();
	req.assert('reqinterface', 'Status é um dado obrigatório. Informe por favor!').notEmpty();
	req.assert('documentacao', 'Status é um dado obrigatório. Informe por favor!').notEmpty();
	req.assert('suporte', 'Status é um dado obrigatório. Informe por favor!').notEmpty();
	*/
	req.assert('contatos', 'Contatos é um dado obrigatório. Informe por favor!').notEmpty();
	//req.assert('observacao', 'Status é um dado obrigatório. Informe por favor!').notEmpty();
	
	var erros = req.validationErrors();
	
	if(erros){
		console.log(erros);
		res.render("requisitos/checklist", {validacao:erros,CheckList:dadosForm,msg:null});
		return;
	}
	/*
var requisitosfuncionais = {
idreqfuncional: req.body.idreqfuncional,
idchecklist: req.body.idchecklist,
titulo: req.body.titulo,
atual: req.body.atual,
proposto: req.body.proposto,
situacao: req.body.situacao,
}
req.assert('idreqfuncional', 'idreqfuncional é um dado obrigatório. Informe por favor!').notEmpty();
req.assert('idchecklist', 'idchecklist é um dado obrigatório. Informe por favor!').notEmpty();
req.assert('titulo', 'titulo é um dado obrigatório. Informe por favor!').notEmpty();
req.assert('atual', 'atual é um dado obrigatório. Informe por favor!').notEmpty();
req.assert('proposto', 'proposto é um dado obrigatório. Informe por favor!').notEmpty();
req.assert('situacao', 'situacao é um dado obrigatório. Informe por favor!').notEmpty();
*/
/*var requisitosnaofuncionais = {
idreqnaofuncional: req.body.idreqnaofuncional,
idchecklist: req.body.idchecklist,
titulo: req.body.titulo,
descricao: req.body.descricao,
situacao: req.body.situacao,
}
req.assert('idreqnaofuncional', 'idreqnaofuncional é um dado obrigatório. Informe por favor!').notEmpty();
req.assert('idchecklist', 'idchecklist é um dado obrigatório. Informe por favor!').notEmpty();
req.assert('titulo', 'titulo é um dado obrigatório. Informe por favor!').notEmpty();
req.assert('descricao', 'descricao é um dado obrigatório. Informe por favor!').notEmpty();
req.assert('situacao', 'situacao é um dado obrigatório. Informe por favor!').notEmpty();
*/
	//const TrataCaracter = require("./util/convCaractEspHTML");
    //const wTrataCaracter =TrataCaracter(checklist.titulo);
    checklist.titulo = convCaractEspHTML(checklist.titulo);
	const http = require('http')
	
	const data = JSON.stringify(checklist)
	console.log(data)
	const options = {
	  hostname: 'localhost',
	  port: 3020,
	  path: '/CheckList',
	  method: 'POST',
	  headers: {
	    'Content-Type': 'application/json',
	    'Content-Length': data.length
	  }
	}
	if (dadosForm.idchecklist > 0){
		options.path = "/CheckList";
		options.method= "put";
		console.log("vou alterar ")
		//console.log(data);
	}else{
		console.log("vou incluir ")
		console.log(data)
	}

	const wreq = http.request(options, wres => {
	 // console.log(`statusCode: ${res.statusCode}`)
	  wres.on('data', d => {
	  	//res.status(200).json({idchecklist:dadosForm.idchecklist,checklist:dadosForm.checklist,sigla:dadosForm.sigla,versao:dadosForm.versao,url:dadosForm.url,status:dadosForm.status});
	    res.render('requisitos/CheckList', {validacao:[],CheckList:data,msg:null});
	  })
	})

	wreq.on('error', error => {
	  console.error(error)
	})

	wreq.write(data)
	wreq.end()
	function	retornaCaractEspicial(passa){
				passa = passa.replace("&aacute;", "á");
	    		passa = passa.replace("&Aacute;", "Á");
	    		passa = passa.replace("&atilde;", "?");
	    		passa = passa.replace("&Atilde;", "?");
	    		passa = passa.replace("&acirc;", "â");
	    		passa = passa.replace("&atilde","ã");
	    		passa = passa.replace("&Acirc;", "Â");
	    		passa = passa.replace("&Atilde;","Ã");
	    		passa = passa.replace("&agrave;", "?");
	    		passa = passa.replace("&Agrave;", "?");
	    		passa = passa.replace("&eacute;", "é");
	    		passa = passa.replace("&Eacute;", "É");
	    		passa = passa.replace("&ecirc;", "?");
	    		passa = passa.replace("&Ecirc;", "?");
	    		passa = passa.replace("&iacute;", "í");
	    		passa = passa.replace("&Iacute;", "Í");
	    		passa = passa.replace("&oacute;", "ó");
	    		passa = passa.replace("&Oacute;", "Ó");
	    		passa = passa.replace("&otilde;", "?");
	    		passa = passa.replace("&Otilde;", "?");
	    		passa = passa.replace("&ocirc;", "ô");
	    		passa = passa.replace("&Ocirc;", "Ô");
	    		passa = passa.replace("&Oacute;", "ú");
	    		passa = passa.replace("&Uacute;", "Ú");
	    		passa = passa.replace("&ccedil;", "ç");
	    		passa = passa.replace("&Ccedil;", "Ç");
	    	return passa;
	 }
	function	convCaractEspHTML(passa){
				passa = passa.replace(/á/g,"&aacute;");
	    		passa = passa.replace(/â/g,"&acirc;" );
	    		passa = passa.replace(/ã/g,"&atilde");
	    		passa = passa.replace(/Ã/g,"&Atilde;");
	    		passa = passa.replace(/é/g,"&eacute;" );
	    		passa = passa.replace(/É/g,"&Eacute;" );
	    		passa = passa.replace(/í/g,"&iacute;" );
	    		passa = passa.replace(/Í/g,"&Iacute;" );
	    		passa = passa.replace(/ó/g,"&oacute;" );
	    		passa = passa.replace(/Ó/g,"&Oacute;" );
	    		passa = passa.replace(/ô/g,"&ocirc;" );
	    		passa = passa.replace(/Ô/g,"&Ocirc;" );
	    		passa = passa.replace(/ú/g,"&Oacute;");
	    		passa = passa.replace(/Ú/g,"&Uacute;");
	    		passa = passa.replace(/ç/g,"&ccedil;");
	    		passa = passa.replace(/Ç/g,"&Ccedil;");
		      console.log(passa);
	      	return passa;
	}
	
};
// FETCH All checklist
module.exports.findAll = function (application,req, res)  {	
	
};
// Find a checklist by Id
module.exports.findById = function (application,req, res)  {	
		
};
// Update a checklist
// Put a checklist
module.exports.validarchecklist = function(application, req, res){
	//console.log(req.body)
	var dadosForm = req.body;
	
	var wchecklist = {
		idsistema:req.body.idsistema,
		idchecklist:req.body.idchecklist,
		checklist : req.body.checklist,
		status : req.body.status,
		objetivo : req.body.objetivo
		};
	
	req.assert('checklist', 'Nome do checklist é um dado obrigatório. Informe por favor!').notEmpty();
	req.assert('objetivo', 'Objetivo é um dado obrigatório. Informe por favor!').notEmpty();
	req.assert('status', 'Status é um dado obrigatório. Informe por favor!').notEmpty();

	var erros = req.validationErrors();
	
	if(erros){
		//console.log(erros);
		res.render("requisitos/checklist", {validacao:erros,Perfis:[],msg:null});
		return;
	}
	
	//var sql = "Insert Into checklist(checklist, sigla, versao, url) values ('"+req.body.checklist+"','"+req.body.sigla+"','"+req.body.versao+"','"+req.body.url+"')";
	const http = require('http')

	const data = JSON.stringify(dadosForm)

	const options = {
	  hostname: 'localhost',
	  port: 3020,
	  path: '/api/inc/checklist',
	  method: 'POST',
	  headers: {
	    'Content-Type': 'application/json',
	    'Content-Length': data.length
	  }
	}
	if (dadosForm.idchecklist > 0){
		options.path = "/api/atualiza/checklist";
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
	  	//res.status(200).json({idchecklist:dadosForm.idchecklist,checklist:dadosForm.checklist,sigla:dadosForm.sigla,versao:dadosForm.versao,url:dadosForm.url,status:dadosForm.status});
	    res.render('requisitos/checklist', {validacao:[],Perfis:[{idsistema:dadosForm.idsistema,idchecklist:dadosForm.idchecklist,checklist:dadosForm.checklist,status:dadosForm.status,objetivo:dadosForm.objetivo}],msg:'Inclusao com sucesso!'});
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
	
	var wchecklist ={
		idsistema:req.body.idsistema,
		idchecklist:req.body.idchecklist,
		checklist : req.body.checklist,
		status : req.body.status,
		objetivo : req.body.objetivo
		};
	
	req.assert('checklist', 'Nome do checklist é um dado obrigatório. Informe por favor!').notEmpty();
	req.assert('objetivo', 'Objetivo é um dado obrigatório. Informe por favor!').notEmpty();
	req.assert('status', 'Status é um dado obrigatório. Informe por favor!').notEmpty();


	var erros = req.validationErrors();
	
	if(erros){
		console.log(erros);
		res.render("requisitos/checklist", {validacao:erros,Perfis:[]});
		return;
	}
	
	const http = require('http')

	const data = JSON.stringify(dadosForm)

	const options = {
	  hostname: 'localhost',
	  port: 3020,
	  path: '/api/inc/checklist',
	  method: 'POST',
	  headers: {
	    'Content-Type': 'application/json',
	    'Content-Length': data.length
	  }
	}
	if (dadosForm.idchecklist > 0){
		options.path = "/api/atualiza/checklist";
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
	  
	    res.render('requisitos/checklist', {validacao:[],Perfis:[{idsistema:dadosForm.idsistema,idchecklist:dadosForm.idchecklist,checklist:dadosForm.checklist,status:dadosForm.status,objetivo:dadosForm.objetivo}],msg:'Atualizado com sucesso!'});
	  })
	})

	wreq.on('error', error => {
	  console.error(error)
	})

	wreq.write(data)
	wreq.end()
};

// Delete a checklist by Id
module.exports.delete = function (application,req, res) {
	
	const id = req.query.idchecklist;
	var dadosForm = req.query;
	req.assert('idchecklist', 'Identificador do checklist é um dado obrigatório. Informe por favor!').notEmpty();
	var erros = req.validationErrors();
	
	if(erros){
		console.log(erros);
		res.render("requisitos/checklist", {validacao:erros,Perfis:[]});
		return;
	}
	
	
	const http = require('http')

	const data = JSON.stringify(dadosForm)

	const options = {
	  hostname: 'localhost',
	  port: 3020,
	  path: '/api/exc/checklist',
	  method: 'delete',
	  headers: {
	    'Content-Type': 'application/json',
	    'Content-Length': data.length
	  }
	}
	
	const wreq = http.request(options, wres => {
	 // console.log(`statusCode: ${res.statusCode}`)
	  wres.on('data', d => {
	  	
	    res.render('requisitos/checklist', {validacao:[],Perfis:[{idsistema:dadosForm.idsistema,idchecklist:dadosForm.idchecklist,checklist:dadosForm.checklist,status:dadosForm.status,objetivo:dadosForm.objetivo}],msg:'Excluido com sucesso!'});
	  })
	})

	wreq.on('error', error => {
	  console.error(error)
	})

	wreq.write(data)
	wreq.end()
};