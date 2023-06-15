module.exports.index = function(application, req, res){
	var path = require('path');
	var userName = 'Roberto';
	try {
		userName = process.env.USER || process.env.USERPROFILE.split(path.sep)[2];
	   } catch (e) {
		userName = '';
	   }
	console.log(userName);
	//var userName = process.env['USERPROFILE'].split(path.sep)[2];
	var loginId = path.join("Usuário autenticado = ",userName);
	//console.log(loginId);
	res.render('login', {validacao: [],usuario:userName});
}
module.exports.conteudo = function(application, req, res){
	
	res.render('Portal_Conteudo');
}
module.exports.mp = function(application, req, res){
	console.log(req.query);
	
	res.render('compreaki/itensAnuncios',{idcategoria:req.query.idcategoria,idpessoa:req.session.idpessoa,deviceId:req.query.deviceid});
}
module.exports.carrinho = function(application, req, res){
	res.render('compreaki/pedidoCarrinho',{idpessoa:req.session.idpessoa});
}
module.exports.menu = function(application, req, res){
	
	res.render('menuPortal',{usuario:req.session.usuario});
}
module.exports.autenticar = function(application, req, res){
	console.log(req.body)
	var dadosForm = req.body;
	//console.log(req.route.methods.get)
	if (req.route.methods.get != undefined){
		res.render("login", {validacao:[],usuario:req.body.usuario});
		return;
	}
	/*
	req.assert('usuario', 'Usuário é um dado obrigatório. Informe por favor!').notEmpty();
	req.assert('senha', 'Senha é um dado obrigatório. Informe por favor!').notEmpty();

	var erros = req.validationErrors();

	if(erros){
		if(dadosForm.paginar != undefined){
	    		res.render("logindelivery/login",{validacao:werros,usuario:dadosForm.usuario});
	    	}else{
				res.render("login", {validacao:erros,usuario:req.body.usuario});
		}
		return;
	}
	*/
	//validarUsuario(req.body.usuario,req.body.senha,res);
//Chama a Api para validar o usuario
	const http = require('http')
	const options = {
	  hostname: 'localhost',
	  port: 8081,
	  path:'/api/validarLogin?CodigoUsuarioRede='+dadosForm.usuario.replace(" ","%20").toUpperCase(),
	  method: 'GET',
	  headers: {
				'Accept' : 'application/json',
				'Content-type' : 'application/json'
			}
	}

	const wreq = http.request(options, wres => {
	  //console.log(`statusCode: ${wres.statusCode}`)

	  wres.on('data', d => {
	  	 var data = JSON.parse(d);
	    //process.stdout.write(data[0].senha)
	    console.log(data);
	    if (data.length > 0){
		    if (data[0].senha != dadosForm.senha && data[0].senha != undefined){
		    	// process.stdout.write("Senha informada incorreta!");
		    	 var werros=[{msg:"Senha informada incorreta!"}];
		    	 req.session.autenticado = false;
		    	 if(dadosForm.paginar != undefined){
		    	 	res.render("logindelivery/login",{validacao:werros,usuario:dadosForm.usuario});
		    	 }else{
					res.render("login", {validacao:werros,usuario:dadosForm.usuario});
				}
		    }else{
	    		 if (data[0].senha == dadosForm.senha ){
	    	 		//redirecionar para o portal com exibicao do menu
	    	 		var werros=[{msg:"Usuario validado com sucesso!"}];
	    	 		req.session.autenticado = true;
	    	 		req.session.usuario = dadosForm.usuario;
	    	 		req.session.device_id = dadosForm.deviceId;
					req.session.idpessoa = data[0].idpessoa;
					console.log(req.session);
	    	 		if(dadosForm.paginar != undefined){
		    	 		res.render("categorias/categoria",{deviceId:dadosForm.deviceId});
			    	 }else{
				 		res.render("Portal_Div", {validacao:werros,usuario:dadosForm.usuario});
				 	}
	    		}
		    }
		}else{
			//process.stdout.write("Usuario não cadastrado")
			var werros=[{msg:"Usuario não cadastrado!"}];
			req.session.autenticado = false;
			 if(dadosForm.paginar != undefined){
		    	 	res.render("logindelivery/login",{validacao:werros,Usuario:dadosForm.usuario});
		   	}else{
				res.render("login", {validacao:werros,usuario:dadosForm.usuario});
			}
		}
	  })
	})

	wreq.on('error', error => {
		req.session.autenticado = false;
	  console.error(error)
	})

	wreq.end()
}
module.exports.recuperasenha = function(application, req, res){
	console.log(req.body)
	var dadosForm = req.body;
	//console.log(req.route.methods.get)
	if (req.route.methods.get != undefined){
		res.render("logindelivery/rec_senha", {validacao:[],usuario:req.body.usuario});
		return;
	}
	req.assert('usuario', 'Usuário é um dado obrigatório. Informe por favor!').notEmpty();
	req.assert('nomeusuario', 'Nome completo do Usuário é um dado obrigatório. Informe por favor!').notEmpty();
	req.assert('cel', 'Numero do celular é um dado obrigatório. Informe por favor!').notEmpty();
	req.assert('senha', 'Nova Senha é um dado obrigatório. Informe por favor!').notEmpty();

	var erros = req.validationErrors();

	if(erros){
		res.render("logindelivery/rec_senha", {validacao:erros,usuario:req.body.usuario});
		return;
	}
	//validarUsuario(req.body.usuario,req.body.senha,res);
//Chama a Api para validar o usuario
	const http = require('http')
	const options = {
	  hostname: 'localhost',
	  port: 8081,
	  path:'/api/validarLogin?CodigoUsuarioRede='+dadosForm.usuario.replace(" ","%20").toUpperCase(),
	  method: 'GET',
	  headers: {
				'Accept' : 'application/json',
				'Content-type' : 'application/json'
			}
	}

	const wreq = http.request(options, wres => {
	  //console.log(`statusCode: ${wres.statusCode}`)

	  wres.on('data', d => {
	  	 var data = JSON.parse(d);
	    //process.stdout.write(data[0].senha)
	    console.log(data);
	    if (data.length > 0){
		    if (data[0].nome != dadosForm.nomeusuario && data[0].nome != undefined){
		    	// process.stdout.write("Senha informada incorreta!");
		    	 var werros=[{msg:"Nome Completo informado incorreto!"}];
		    	 req.session.autenticado = false;
		    	 if(dadosForm.paginar != undefined){
		    	 	res.render("logindelivery/rec_senha",{validacao:werros,usuario:dadosForm.usuario});
		    	 }else{
					res.render("logindelivery/login", {validacao:werros,usuario:dadosForm.usuario});
				}
		    }else{
	    		 if (data[0].nome == dadosForm.nomeusuario ){
	    	 		//redirecionar para o portal com exibicao do menu
	    	 		alterarSenha(application, req, res);	    	
	    		}
		    }
		}else{
			//process.stdout.write("Usuario não cadastrado")
			var werros=[{msg:"Usuario não cadastrado!"}];
			req.session.autenticado = false;
			 if(dadosForm.paginar != undefined){
		    	 	res.render("logindelivery/rec_senha",{validacao:werros,usuario:dadosForm.usuario});
		   	}else{
				res.render("logindelivery/login", {validacao:werros,usuario:dadosForm.usuario});
			}
		}
	  })
	})

	wreq.on('error', error => {
		req.session.autenticado = false;
	  console.error(error)
	})

	wreq.end()

	function alterarSenha(application, req, res){
		var dadosForm = req.body;
		//console.log(dadosForm);
		const http = require('http')
		const options = {
		hostname: 'localhost',
		port: 8081,
		path:'/api/recupera/senha?CodigoUsuarioRede='+dadosForm.usuario.replace(" ","%20").toUpperCase()+"&senhaN="+dadosForm.senha+"&nomeusuario="+dadosForm.nomeusuario.replace(/ /g,"%20"),
		method: 'put',
		headers: {
					'Accept' : 'application/json',
					'Content-type' : 'application/json'
				}
		}
		//console.log(options);
		const wreq2 = http.request(options, wres2 => {
		console.log(`statusCode recupera senha: ${wres2.statusCode}`)
		
		wres2.on('data', d => {
			var data2 = JSON.parse(d);
			//console.log(data2);
			//process.stdout.write(data[0].senha)
			if (wres2.statusCode == 200){
				var werros2=[{msg:"Faça login com a nova senha!"}];
	    	 		req.session.autenticado = true;
	    	 		req.session.usuario = dadosForm.usuario;
	    	 		req.session.device_id = dadosForm.deviceId;	    	 		
		    	 	res.render("logindelivery/login",{validacao:werros2,deviceId:dadosForm.deviceId});	
			}else{
				//process.stdout.write("Usuario não cadastrado")
				var werros=[{msg:"Senha não foi recuperada!"}];
				req.session.autenticado = false;
				res.render("logindelivery/login",{validacao:werros,deviceId:dadosForm.deviceId});
			}
		})
		})
		wreq2.on('error', error => {
			req.session.autenticado = false;
		console.error(error)
		})
		wreq2.end()
	}
}

module.exports.login = function(application, req, res){
	var path = require('path');
	var userName = process.env['USERPROFILE'].split(path.sep)[2];
	var loginId = path.join("Usuário autenticado = ",userName);
	//console.log(loginId);
	res.render('login', {validacao: {},usuario:userName});
}
module.exports.altsen = function(application, req, res){
	var path = require('path');
	var userName = process.env['USERPROFILE'].split(path.sep)[2];
	var loginId = path.join("Usuário autenticado = ",userName);
	//console.log(loginId);
	res.render('alterarSenha', {validacao: {},usuario:userName});
}
module.exports.alterarSenha = function(application, req, res){
	
	var dadosForm = req.body;
	
	req.assert('usuario', 'Usuário é um dado obrigatório. Informe por favor!').notEmpty();
	req.assert('senha', 'Senha é um dado obrigatório. Informe por favor!').notEmpty();
	req.assert('senhaN', 'Senha Nova é um dado obrigatório. Informe por favor!').notEmpty();
	req.assert('senhaN', 'Senha Nova tem que ser diferente da senha antiga!').notEmpty(dadosForm.senha);
	req.assert('senhaC', 'Senha de Confirmação é um dado obrigatório. Informe por favor!').notEmpty();
	req.assert('senhaC', 'Senha de Confirmação deve ser igual a Senha Nova!').notEmpty(dadosForm.senhaN);

	var erros = req.validationErrors();

	if(erros){
		res.render("alterarSenha", {validacao:erros,usuario:req.body.usuario});
		return;
	}else{
		console.log(dadosForm.senhaN + " "+dadosForm.senha);
		if (dadosForm.senhaN == dadosForm.senha){
			var erros=[{msg:"Senha Nova tem que ser diferente da senha antiga!"}];
			console.log(erros[0])
			res.render("alterarSenha", {validacao:erros,usuario:req.body.usuario});
			return;
		}
		if (dadosForm.senhaN != dadosForm.senhaC){
			var erros=[{msg:"Senha de Confirmação deve ser igual a Senha Nova!"}];
			console.log(erros[0])
			res.render("alterarSenha", {validacao:erros,usuario:req.body.usuario});
			return;
		}
	}
	
	const http = require('http')
	const options = {
	  hostname: 'localhost',
	  port: 8081,
	  path:'/api/atualiza/senha?CodigoUsuarioRede='+dadosForm.usuario.replace(" ","%20").toUpperCase()+"&senhaN="+dadosForm.senhaN+"&senha="+dadosForm.senha,
	  method: 'put',
	  headers: {
				'Accept' : 'application/json',
				'Content-type' : 'application/json'
			}
	}

	const wreq = http.request(options, wres => {
	  console.log(`statusCode atualizar: ${wres.statusCode}`)

	  wres.on('data', d => {
	  	 var data = JSON.parse(d);
	    //process.stdout.write(data[0].senha)
	    if (data.length > 0){
		    if (data[0].senha != dadosForm.senhaN && data[0].senha != undefined){
		    	// process.stdout.write("Senha informada incorreta!");
		    	 var werros=[{msg:"Senha informada incorreta!"}];
		    	 req.session.autenticado = false;
				res.render("login", {validacao:werros,usuario:dadosForm.usuario});
		    }else{
	    		 if (data[0].senha == dadosForm.senhaN ){
	    	 		//redirecionar para o portal com exibicao do menu
	    	 		var werros=[{msg:"Usuario alterado com sucesso!"}];
	    	 		req.session.autenticado = true;
	    	 		req.session.usuario = dadosForm.usuario;
			 		res.render("Portal_Div", {validacao:werros,usuario:dadosForm.usuario});
	    		}
		    }
		}else{
			//process.stdout.write("Usuario não cadastrado")
			var werros=[{msg:"Usuario não cadastrado!"}];
			req.session.autenticado = false;
			res.render("login", {validacao:werros,usuario:dadosForm.usuario});
		}
	  })
	})

	wreq.on('error', error => {
		req.session.autenticado = false;
	  console.error(error)
	})

	wreq.end()

}
module.exports.validarUsuario = function(application, req, res){
	//console.log(req.body)
	var dadosForm = req.body;
	
	var wsistema = {
		idsistema:req.body.idsistema,
		nomesistema : req.body.nomesistema,
		sigla : req.body.sigla,
		versao : req.body.versao,
		url : req.body.url,
		status : req.body.status
		};
	
	req.assert('nomesistema', 'Nome do Sistema é um dado obrigatório. Informe por favor!').notEmpty();
	req.assert('sigla', 'Sigla é um dado obrigatório. Informe por favor!').notEmpty();
	req.assert('versao', 'Versão é um dado obrigatório. Informe por favor!').notEmpty();
	req.assert('status', 'Status é um dado obrigatório. Informe por favor!').notEmpty();

	var erros = req.validationErrors();
	
	if(erros){
		console.log(erros);
		res.render("sistemas/crudSistemas", {validacao:erros,Sistemas:[],msg:null});
		return;
	}
	
	//var sql = "Insert Into sistema(nomesistema, sigla, versao, url) values ('"+req.body.nomesistema+"','"+req.body.sigla+"','"+req.body.versao+"','"+req.body.url+"')";
	const http = require('http')

	const data = JSON.stringify(dadosForm)

	const options = {
	  hostname: 'localhost',
	  port: 8083,
	  path: '/api/inc/sistema',
	  method: 'POST',
	  headers: {
	    'Content-Type': 'application/json',
	    'Content-Length': data.length
	  }
	}
	if (dadosForm.idsistema > 0){
		options.path = "/api/atualiza/sistema";
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
	  	//res.status(200).json({idsistema:dadosForm.idsistema,nomesistema:dadosForm.nomesistema,sigla:dadosForm.sigla,versao:dadosForm.versao,url:dadosForm.url,status:dadosForm.status});
	    res.render('sistemas/crudSistemas', {validacao:[],Sistemas:[{idsistema:dadosForm.idsistema,nomesistema:dadosForm.nomesistema,sigla:dadosForm.sigla,versao:dadosForm.versao,url:dadosForm.url,status:dadosForm.status}],msg:null});
	  })
	})

	wreq.on('error', error => {
	  console.error(error)
	})

	wreq.write(data)
	wreq.end()
}