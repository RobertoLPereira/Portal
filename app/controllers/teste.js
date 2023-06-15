function atualizarUsuariosOs(application, req, res,perfis,retorno){
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
									cadastrarPerfil(wOrdensservicoPerfil)												  	 			
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
									excluirPerfil(wOrdensservicoPerfil)	
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