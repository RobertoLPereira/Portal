module.exports.cadperordemServico = function(application, req, res){
	var wordemservicocorpo = {
		idordemservico: parseInt(req.body.idOrdemServico),
		datacadastro:req.body.dataCadastro,
		datainiciovalidade : req.body.dataInicioValidade,
		datafimvalidade : req.body.dataFimValidade,
		idusuario : req.body.idusuario,
		corpo : req.body.corpo
		};

	var pessoas = req.body.idpessoa;
	var perfilsistema = req.body.idperfil;
	 res.render('ordemservico/crudordemservico', {validacao:[],Ordensservico:wordemservicocorpo,msg:null});
}
module.exports.listarOrdemServico = function(application, req, res){
	//console.log(req)
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
	  	 res.render('ordemservico/crudordemservico', {validacao:[],OrdemServicos:wdata,Sistemas:[],Perfil:[],msg:null});
		})
	  })
		wreq.on('error', error => {
		  console.error(error)
		})

	wreq.end()
	}
}
module.exports.pesquisarordemservico = function(application, req, res){
	var dadosForm = req.query
	const data = JSON.stringify(req.query)
	//console.log(req)
	const http = require('http')
	const options = {
	  hostname: 'localhost',
	  port: 8083,
	  path:'/api/pesquisarordemservico?ordemservico='+dadosForm.ordemservico.replace(" ","%20")+"&status="+dadosForm.status,
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
	  	 res.render('ordemservico/crudordemservico', {validacao:[],Ordensservico:wdata,msg:null});
		})
	  })
		wreq.on('error', error => {
		  console.error(error)
		})
	//wreq.write(data)
	wreq.end()
}
// Post a ordemservico
module.exports.create = function(application, req, res){	
	// Save to PostgreSQL database
	OrdensservicoUsuario = require('../models/ordemservicousuario_model.js');
	//OrdensservicoPerfil = require('../models/ordemservicoperfil_model.js');
	var dadosForm = req.body;

	var wordemservicocorpo = {
		idordemservico: parseInt(req.body.idOrdemServico),
		datacadastro:req.body.dataCadastro,
		datainiciovalidade : req.body.dataInicioValidade,
		datafimvalidade : req.body.dataFimValidade,
		idusuario : req.body.idusuario,
		corpo : dadosForm.corpo
		};
	var wpessoas = [];
	var pessoas = req.body.idpessoa;
	//console.log(pessoas)
	var ww = 0;	
	var perfilsistema = req.body.idperfil;

	//console.log("dados");
	//console.log(dadosForm);
	req.assert('dataInicioValidade', 'Data de Inicio de Validade da ordemservico é um dado obrigatório. Informe por favor!').notEmpty();
	req.assert('dataFimValidade', 'Data de Fim de Validade da ordem de serviço é um dado obrigatório. Informe por favor!').notEmpty();
	req.assert('corpo', 'O Corpo da ordem de serviço é um dado obrigatório. Informe por favor!').notEmpty();

	var erros = req.validationErrors();
	
	if(erros){
		console.log(erros);
		res.render("ordemservico/crudordemservico", {validacao:erros,OrdemServicos:req.body,msg:null});
		return;
	}
	
	const http = require('http')

	//const data = JSON.stringify(wordemservicocorpo);
	const data = JSON.stringify(wordemservicocorpo);
	const options = {
	  hostname: 'localhost',
	  port: 8083,
	  path: '/api/inc/ordemservicocorpo',
	  method: 'POST',
	  headers: {
	    'Content-Type': 'application/json',
	    'Content-Length': data.length+1
	  }
	}

	if (parseInt(wordemservicocorpo.idordemservico) > 0){
		options.path = '/api/atualiza/ordemservicocorpo';
		options.method= 'put';
		//console.log("vou alterar com")
		//console.log(data);
		//console.log(options)
	}else{
		console.log("vou incluir ")
		//console.log(data)
	}

	const wreq = http.request(options, wres => {
	  wres.on('data', d => {	
	  //console.log(`statusCode: ${wres.statusCode}`)
	 //process.stdout.write(d)
	  	atualizarUsuariosOs(application, req, res,pessoas,JSON.parse(d));
	  	atualizarPerfisOs(application, req, res,perfilsistema,JSON.parse(d));
	     //res.render('ordemservico/crudordemservico', {validacao:[],OrdemServicos:wordemservicocorpo,msg:null});
	  })
	})

	wreq.on('error', error => {
	  console.error(error)
	})

	wreq.write(data)
	wreq.end()

	function atualizarUsuariosOs(application, req, res,pessoas,retorno){
		const http = require('http')
		const options = {
		  hostname: 'localhost',
		  port: 8083,
		  path: '/api/todos/ordemservicousuarios?idordemservico='+wordemservicocorpo.idordemservico,
		  method: 'GET',
		  headers: {
		    'Content-Type': 'application/json'
		  }
		}
		const wreq = http.request(options, wres => {
			wres.on('data', d => {
			  	 var wdata = JSON.parse(d);
				  	for (var i = pessoas.length - 1; i >= 0; i--) {
						if (pessoas[i].indexOf("-") > 0){			
							conteudo = pessoas[i].split('-');	
							if (VerificaincluirUsuario(parseInt(conteudo[0]),wdata)){
								console.log("pessoa cadastrada")
					  	 	}else{
					  	 		console.log("Inluir pessoa")
					  	 		var wOrdensservicoUsuario = {
						  	 		idordemservicousuario : null,
									idordemservico : wordemservicocorpo.idordemservico,
									idpessoa: parseInt(conteudo[0]),
									codigousuariorede: wordemservicocorpo.idusuario,
									nome : conteudo[1]
									}
									console.log(wOrdensservicoUsuario)
									cadastrarUsuario(wOrdensservicoUsuario)												  	 			
					  	 	}
						}
					}
					for (var i = wdata.length - 1; i >= 0; i--) {		
							if (VerificaExcluirUsuario(wdata[i].idpessoa,pessoas)){
								console.log("Pessoa cadastrada se mantem")
					  	 	}else{
					  	 		console.log("Excluir pessoa Cadastrada")
					  	 		var wOrdensservicoUsuario = {
						  	 		idordemservicousuario : wdata[i].idordemservicousuario,
									idordemservico : wordemservicocorpo.idordemservico,
									idpessoa: parseInt(conteudo[0]),
									codigousuariorede: wordemservicocorpo.idusuario,
									nome : conteudo[1]
									}
									console.log(wOrdensservicoUsuario)
									excluirUsuario(wOrdensservicoUsuario)	
					  	 	}
					}  	
				})
			})
			wreq.on('error', error => {
			  console.error(error)
			})
			wreq.end()
		//Cadastrar os novo usuarios informados para a Ordem de servico
		function cadastrarUsuario(usu){
			var wusuario = JSON.stringify(usu)
			const http_w = require('http')
			const options_w = {
			  hostname: 'localhost',
			  port: 8083,
			  path: '/api/inc/ordemservicousuarios',
			  method: 'POST',
			  headers: {
			    'Content-Type': 'application/json',
			    'Content-Length': wusuario.length
			  }
			}
			const wreq = http_w.request(options_w, wres => {
			 wres.on('data', d => {	
			  console.log(`statusCode: ${wres.statusCode}`)
			  process.stdout.write(d)
			  	//atualizarUsuariosOs(application, req, res,pessoas,JSON.parse(d));
			     //res.render('ordemservico/crudordemservico', {validacao:[],OrdemServicos:wordemservicocorpo,msg:null});
			  })
			})

			wreq.on('error', error => {
			  console.error(error)
			})

			wreq.write(wusuario)
			wreq.end()
		}
		///api/exc/ordemservicousuarios
		//Excluir usuario na Ordem de Servico
		function excluirUsuario(usu){
			var wusuario = JSON.stringify(usu)
			const http_w = require('http')
			const options_w = {
			  hostname: 'localhost',
			  port: 8083,
			  path: '/api/exc/ordemservicousuarios',
			  method: 'DELETE',
			  headers: {
			    'Content-Type': 'application/json',
			    'Content-Length': wusuario.length
			  }
			}
			const wreq = http_w.request(options_w, wres => {
			 wres.on('data', d => {	
			  console.log(`statusCode: ${wres.statusCode}`)
			  process.stdout.write(d)
			  	//atualizarUsuariosOs(application, req, res,pessoas,JSON.parse(d));
			     //res.render('ordemservico/crudordemservico', {validacao:[],OrdemServicos:wordemservicocorpo,msg:null});
			  })
			})

			wreq.on('error', error => {
			  console.error(error)
			})

			wreq.write(wusuario)
			wreq.end()
		}

			//verificar se houve inclusao ou exclusao de usuarios na ordem de servico
		function VerificaincluirUsuario(idpessoa,usuarios){
			console.log("verifica pessoa nro ="+idpessoa)
			for (i=0; i < usuarios.length;i++) {				
				if (idpessoa == usuarios[i].idpessoa){
					return true;
					break
				}
			}
			return false;
		}
		function VerificaExcluirUsuario(idpessoa,usuarios){
			console.log("verifica pessoa a excluir nro ="+idpessoa)
			for (i=0; i < usuarios.length;i++) {
				conteudo = pessoas[i].split('-');	
				if (parseInt(conteudo[0]) == idpessoa){							
					return true;
					break
				}
			}
			return false;
		}
		//res.render('ordemservico/crudordemservico', {validacao:[],OrdemServicos:retorno,msg:null});
	}
	function atualizarPerfisOs(application, req, res,perfis,retorno){
		const http = require('http')
		const options = {
		  hostname: 'localhost',
		  port: 8083,
		  path: '/api/todos/ordemservicoperfil?idordemservico='+wordemservicocorpo.idordemservico,
		  method: 'GET',
		  headers: {
		    'Content-Type': 'application/json'
		  }
		}
		const wreq = http.request(options, wres => {
			wres.on('data', d => {
			  	 var wdata = JSON.parse(d);
				  	for (var i = perfis.length - 1; i >= 0; i--) {
						if (perfis[i].indexOf("-") > 0){			
							conteudo = perfis[i].split('-');	
							if (VerificaincluirUsuario(parseInt(conteudo[0]),wdata)){
								console.log("perfil cadastrado")
					  	 	}else{
					  	 		console.log("Inluir perfil")
					  	 		var wOrdensservicoPerfil = {
						  	 		idordemservicoperfil : null,
									idordemservico : wordemservicocorpo.idordemservico,
									idperfilsistema: parseInt(conteudo[0])
									}
									console.log(wOrdensservicoPerfil)
									//cadastrarPerfil(wOrdensservicoPerfil)												  	 			
					  	 	}
						}
					}
					for (var i = wdata.length - 1; i >= 0; i--) {		
							if (VerificaExcluirPerfil(wdata[i].idperfilsistema,perfis)){
								console.log("Perfil cadastrado se mantem")
					  	 	}else{
					  	 		console.log("Excluir perfil Cadastrado")
					  	 		var wOrdensservicoPerfil = {
						  	 		idordemservicoperfil : wdata[i].idordemservicoperfil,
									idordemservico : wordemservicocorpo.idordemservico,
									idperfilsistema: parseInt(conteudo[0])
									}
									console.log(wOrdensservicoPerfil)
									//excluirPerfil(wOrdensservicoPerfil)	
					  	 	}
					}  	
				})
			})
			wreq.on('error', error => {
			  console.error(error)
			})
			wreq.end()
		//Cadastrar os novo usuarios informados para a Ordem de servico
		function cadastrarPerfil(usu){
			var wperfil = JSON.stringify(usu)
			const http_w = require('http')
			const options_w = {
			  hostname: 'localhost',
			  port: 8083,
			  path: '/api/inc/ordemservicoperfil',
			  method: 'POST',
			  headers: {
			    'Content-Type': 'application/json',
			    'Content-Length': wperfil.length
			  }
			}
			const wreq = http_w.request(options_w, wres => {
			 wres.on('data', d => {	
			  console.log(`statusCode: ${wres.statusCode}`)
			  process.stdout.write(d)
			  	//atualizarUsuariosOs(application, req, res,perfis,JSON.parse(d));
			     //res.render('ordemservico/crudordemservico', {validacao:[],OrdemServicos:wordemservicocorpo,msg:null});
			  })
			})

			wreq.on('error', error => {
			  console.error(error)
			})

			wreq.write(wperfil)
			wreq.end()
		}
		///api/exc/ordemservicousuarios
		//Excluir usuario na Ordem de Servico
		function excluirPerfil(per){
			var wperfil = JSON.stringify(per)
			const http_w = require('http')
			const options_w = {
			  hostname: 'localhost',
			  port: 8083,
			  path: '/api/exc/ordemservicoperfil',
			  method: 'DELETE',
			  headers: {
			    'Content-Type': 'application/json',
			    'Content-Length': wperfil.length
			  }
			}
			const wreq = http_w.request(options_w, wres => {
			 wres.on('data', d => {	
			  console.log(`statusCode: ${wres.statusCode}`)
			  process.stdout.write(d)
			  	//atualizarUsuariosOs(application, req, res,perfis,JSON.parse(d));
			     //res.render('ordemservico/crudordemservico', {validacao:[],OrdemServicos:wordemservicocorpo,msg:null});
			  })
			})

			wreq.on('error', error => {
			  console.error(error)
			})

			wreq.write(wperfil)
			wreq.end()
		}

			//verificar se houve inclusao ou exclusao de usuarios na ordem de servico
		function VerificaincluirPerfil(idperfilsistema,perfis){
			console.log("verifica pessoa nro ="+idperfilsistema)
			for (i=0; i < perfis.length;i++) {				
				if (idperfilsistema == perfis[i].idperfilsistema){
					return true;
					break
				}
			}
			return false;
		}
		function VerificaExcluirPerfil(idperfilsistema,perfis){
			console.log("verifica pessoa a excluir nro ="+idperfilsistema)
			for (i=0; i < perfis.length;i++) {
				conteudo = perfis[i].split('-');	
				if (parseInt(conteudo[0]) == idperfilsistema){							
					return true;
					break
				}
			}
			return false;
		}
	res.render('ordemservico/crudordemservico', {validacao:[],OrdemServicos:retorno,msg:null});
	}
		
};
// FETCH All ordemservico
module.exports.findAll = function (application,req, res)  {	
	
};
// Find a ordemservico by Id
module.exports.findById = function (application,req, res)  {	
		
};
// Update a ordemservico
// Put a ordemservico
module.exports.validarordemservico = function(application, req, res){
	//console.log(req.body)
	var dadosForm = req.body;
	
	var wordemservico = {
		idsistema:req.body.idsistema,
		idordemservico:req.body.idordemservico,
		ordemservico : req.body.ordemservico,
		status : req.body.status,
		objetivo : req.body.objetivo
		};
	
	req.assert('ordemservico', 'Nome do ordemservico é um dado obrigatório. Informe por favor!').notEmpty();
	req.assert('objetivo', 'Objetivo é um dado obrigatório. Informe por favor!').notEmpty();
	req.assert('status', 'Status é um dado obrigatório. Informe por favor!').notEmpty();

	var erros = req.validationErrors();
	
	if(erros){
		//console.log(erros);
		res.render("ordemservico/crudordemservico", {validacao:erros,Ordensservico:[],msg:null});
		return;
	}
	
	//var sql = "Insert Into ordemservico(ordemservico, sigla, versao, url) values ('"+req.body.ordemservico+"','"+req.body.sigla+"','"+req.body.versao+"','"+req.body.url+"')";
	const http = require('http')

	const data = JSON.stringify(dadosForm)

	const options = {
	  hostname: 'localhost',
	  port: 8083,
	  path: '/api/inc/ordemservico',
	  method: 'POST',
	  headers: {
	    'Content-Type': 'application/json',
	    'Content-Length': data.length
	  }
	}
	if (dadosForm.idordemservico > 0){
		options.path = "/api/atualiza/ordemservico";
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
	  	//res.status(200).json({idordemservico:dadosForm.idordemservico,ordemservico:dadosForm.ordemservico,sigla:dadosForm.sigla,versao:dadosForm.versao,url:dadosForm.url,status:dadosForm.status});
	    res.render('ordemservico/crudordemservico', {validacao:[],Ordensservico:[{idsistema:dadosForm.idsistema,idordemservico:dadosForm.idordemservico,ordemservico:dadosForm.ordemservico,status:dadosForm.status,objetivo:dadosForm.objetivo}],msg:'Inclusao com sucesso!'});
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
	
	var wordemservico ={
		idsistema:req.body.idsistema,
		idordemservico:req.body.idordemservico,
		ordemservico : req.body.ordemservico,
		status : req.body.status,
		objetivo : req.body.objetivo
		};
	
	req.assert('ordemservico', 'Nome do ordemservico é um dado obrigatório. Informe por favor!').notEmpty();
	req.assert('objetivo', 'Objetivo é um dado obrigatório. Informe por favor!').notEmpty();
	req.assert('status', 'Status é um dado obrigatório. Informe por favor!').notEmpty();


	var erros = req.validationErrors();
	
	if(erros){
		console.log(erros);
		res.render("Ordensservico/crudOrdensservico", {validacao:erros,Ordensservico:[]});
		return;
	}
	
	const http = require('http')

	const data = JSON.stringify(dadosForm)

	const options = {
	  hostname: 'localhost',
	  port: 8083,
	  path: '/api/inc/ordemservico',
	  method: 'POST',
	  headers: {
	    'Content-Type': 'application/json',
	    'Content-Length': data.length
	  }
	}
	if (dadosForm.idordemservico > 0){
		options.path = "/api/atualiza/ordemservico";
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
	  
	    res.render('ordemservico/crudordemservico', {validacao:[],Ordensservico:[{idsistema:dadosForm.idsistema,idordemservico:dadosForm.idordemservico,ordemservico:dadosForm.ordemservico,status:dadosForm.status,objetivo:dadosForm.objetivo}],msg:'Atualizado com sucesso!'});
	  })
	})

	wreq.on('error', error => {
	  console.error(error)
	})

	wreq.write(data)
	wreq.end()
};

// Delete a ordemservico by Id
module.exports.delete = function (application,req, res) {
	
	const id = req.query.idordemservico;
	var dadosForm = req.query;
	req.assert('idordemservico', 'Identificador do ordemservico é um dado obrigatório. Informe por favor!').notEmpty();
	var erros = req.validationErrors();
	
	if(erros){
		console.log(erros);
		res.render("Ordensservico/crudOrdensservico", {validacao:erros,Ordensservico:[]});
		return;
	}
	
	
	const http = require('http')

	const data = JSON.stringify(dadosForm)

	const options = {
	  hostname: 'localhost',
	  port: 8083,
	  path: '/api/exc/ordemservico',
	  method: 'delete',
	  headers: {
	    'Content-Type': 'application/json',
	    'Content-Length': data.length
	  }
	}
	
	const wreq = http.request(options, wres => {
	 // console.log(`statusCode: ${res.statusCode}`)
	  wres.on('data', d => {
	  	
	    res.render('ordemservico/crudordemservico', {validacao:[],Ordensservico:[{idsistema:dadosForm.idsistema,idordemservico:dadosForm.idordemservico,ordemservico:dadosForm.ordemservico,status:dadosForm.status,objetivo:dadosForm.objetivo}],msg:'Excluido com sucesso!'});
	  })
	})

	wreq.on('error', error => {
	  console.error(error)
	})

	wreq.write(data)
	wreq.end()
};