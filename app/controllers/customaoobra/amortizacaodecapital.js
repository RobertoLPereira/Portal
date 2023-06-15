module.exports.cadamortizacaodecapital = function(application, req, res){
	//Módulo dotenv (variaveis do sistema)
//require('dotenv').config({path: '../.env'})

//Modulo para monitorar a pasta com arquivo da programação
const fs = require('fs') 
 //Modulo para leitura do xlsx
const xlsx = require('node-xlsx')

//Modulo para trabalhar com datas
const moment = require('moment') 

//Converter datas excel para js
const { getJsDateFromExcel } = require('excel-date-to-js') 

//Configuração do banco e do knex (query builder)
//const knex = require('./db') 

//Caminho do arquivo a xlsx a ser lido
console.log({__dirname})
const filePath = {__dirname} + "\\Programacao.xlsx";

console.log(filePath);
//Função que irá converter as datas do excel para o formato YYYYMMDD
function excelDateToJSDate(date) {
  let data = getJsDateFromExcel(date)
  return moment(data).utc().format("YYYYMMDD")
}

//Função para retornar apenas valores existentes do .map
const identity = x => x

//Usaremos esta função do node (fs.watchFile), para ficar monitorando alterações no arquivo, assim toda vez que algo
//for alterado e salvo, as funções serão executadas e os dados inseridos no banco
fs.watchFile("C:\\Trabalho\\ProjetosNode\\Portal\\app\\controllers\\customaoobra\\programacao.xlsx", function() {
  console.log('Programação Alterada em {new Date()}')
  
  //Lendo a planilha
  const plan = xlsx.parse(filePath)

  //Trabalhando as informações para enviar ao banco
  const finalData = plan[0].data
    .map(([_, COD_FAMILIA, excelDate]) => {
      const DT_PROG = excelDateToJSDate(excelDate)

      if (DT_PROG !== 'Invalid date') {
        return { COD_FAMILIA, DT_PROG }
      }
    })
    .filter(identity)
  console.log(finalData);
  /* dentro do knex, a função batchInsert é indicada para inserir uma
  // grande quantidade de dados no banco
  // PROGRAMACAO é o nome da tabela no banco onde os dados serão inseridos
  knex.batchInsert('PROGRAMACAO', finalData)
    .then(function(msg) {
      console.log('Operation Successful Completed')
    })
    .catch(function(error) {
      console.log(error)
    })
	*/
  console.log('End of fs.watch() wait for callback from batchInsert')

})

	
	//res.render('customaoobra/amortizacaodecapital', {validacao:[],Amortizacaodecapital:[],msg:null});
}
module.exports.listaramortizacoes = function(application, req, res){
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
	  	 amortizacaodecapital(application, req, res,JSON.parse(d));
		})
	  })
		wreq.on('error', error => {
		  console.error(error)
		})
	//wreq.write(data)
	wreq.end()

	function amortizacaodecapital(application, req, res,Emp){
		const http = require('http')
		const options = {
		  hostname: 'localhost',
		  port: 4040,
		  path:'/Amortizacaodecapital',
		  method: 'GET',
		  headers: {'Accept' : 'application/json'}
		}

		const wreq = http.request(options, wres => {
		 // console.log(`statusCode: ${wres.statusCode}`)

		  wres.on('data', d => {
		  	 var wdata = JSON.parse(d);	  	  
		  	  res.render('customaoobra/amortizacaodecapital', {validacao:[],Amortizacaodecapital:wdata,Empresas:Emp,msg:null});
			})
		  })
			wreq.on('error', error => {
			  console.error(error)
			})
		//wreq.write(data)
		wreq.end()
	}
}
module.exports.pesquisaramortizacaodecapital = function(application, req, res){
	var dadosForm = req.query
	const data = JSON.stringify(req.query)
	//console.log(req)
	const http = require('http')
	const options = {
	  hostname: 'localhost',
	  port: 4040,
	  path:'/api/pesquisaramortizacaodecapital?nomeamortizacaodecapital='+dadosForm.nomeamortizacaodecapital.replace(" ","%20")+"&status="+dadosForm.status,
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
	  	 res.render('customaoobra/amortizacaodecapital', {validacao:[],Amortizacaodecapitals:wdata,msg:null});
		})
	  })
		wreq.on('error', error => {
		  console.error(error)
		})
	//wreq.write(data)
	wreq.end()
}
// Post a amortizacaodecapital
module.exports.create = function(application, req, res){	
	// Save to PostgreSQL database
	var dadosForm = req.body;
	
	var amortizacaodecapital = {
		codigo: 0,
		empresa: parseInt(req.body.empresa),
		taxaamortizacao: parseFloat(req.body.taxaamortizacao),
		dataapuracao: req.body.dataapuracao,
        status: parseInt(req.body.status)
		}
		//console.log(amortizacaodecapital.dataapuracao.length,amortizacaodecapital)
		if (amortizacaodecapital.dataapuracao.length < 10){
			if(amortizacaodecapital.dataapuracao.length < 9){
				amortizacaodecapital.dataapuracao=amortizacaodecapital.dataapuracao.substr(6, 4)+"-0"+amortizacaodecapital.dataapuracao.substr(3, 1)+"-0"+amortizacaodecapital.dataapuracao.substr(0, 1);
			}else{
				amortizacaodecapital.dataapuracao=amortizacaodecapital.dataapuracao.substr(6, 4)+"-"+amortizacaodecapital.dataapuracao.substr(3, 1)+"-0"+amortizacaodecapital.dataapuracao.substr(0, 2);
			}
		}else{
			amortizacaodecapital.dataapuracao=amortizacaodecapital.dataapuracao.substr(6, 4)+"-"+amortizacaodecapital.dataapuracao.substr(3,2)+"-"+amortizacaodecapital.dataapuracao.substr(0,2);
		}
		//req.assert('codigo', 'codigo é um dado obrigatório. Informe por favor!').notEmpty();
		req.assert('empresa', 'empresa é um dado obrigatório. Informe por favor!').notEmpty();
		req.assert('taxaamortizacao', 'taxaamortizacao é um dado obrigatório. Informe por favor!').notEmpty();
		req.assert('dataapuracao', 'dataapuracao é um dado obrigatório. Informe por favor!').notEmpty();
		

	 var erros = req.validationErrors();
	
	if(erros){
		console.log(erros);
		res.render("customaoobra/amortizacaodecapital", {validacao:erros,Amortizacaodecapital:amortizacaodecapital,Empresas:[],msg:null});
		return;
	}
	
	const http = require('http')

	const data = JSON.stringify(amortizacaodecapital)

	const options = {
	  hostname: 'localhost',
	  port: 4040,
	  path: '/Amortizacaodecapital',
	  method: 'POST',
	  headers: {
	    'Content-Type': 'application/json',
	    'Content-Length': data.length
	  }
	}
	if (dadosForm.codigo > 0){
		options.path = "/Amortizacaodecapital/"+parseInt(dadosForm.codigo);
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
	  	res.redirect('/Amortizacaodecapital');
	    //res.render('customaoobra/amortizacaodecapital', {validacao:[],Amortizacaodecapital:amortizacaodecapital,Empresas:[],msg:null});
	  })
	})

	wreq.on('error', error => {
	  console.error(error)
	})

	wreq.write(data)
	wreq.end()

};
// FETCH All amortizacaodecapital
module.exports.findAll = function (application,req, res)  {	
	
};
// Find a amortizacaodecapital by Id
module.exports.findById = function (application,req, res)  {	
		
};
// Update a amortizacaodecapital
// Put a amortizacaodecapital
module.exports.validaramortizacaodecapital = function(application, req, res){
	//console.log(req.body)
	var dadosForm = req.body;
	
	var amortizacaodecapital = {
		codigo: req.body.codigo,
		empresa: req.body.empresa,
		taxaamortizacao: req.body.taxaamortizacao,
		dataapuracao: req.body.dataapuracao,
        status: req.body.status
		}
		req.assert('codigo', 'codigo é um dado obrigatório. Informe por favor!').notEmpty();
		req.assert('empresa', 'empresa é um dado obrigatório. Informe por favor!').notEmpty();
		req.assert('taxaamortizacao', 'taxaamortizacao é um dado obrigatório. Informe por favor!').notEmpty();
		req.assert('dataapuracao', 'dataapuracao é um dado obrigatório. Informe por favor!').notEmpty();
		

	var erros = req.validationErrors();
	
	if(erros){
		//console.log(erros);
		res.render("customaoobra/amortizacaodecapital", {validacao:erros,Amortizacaodecapital:amortizacaodecapital,msg:null});
		return;
	}
	
	//var sql = "Insert Into amortizacaodecapital(nomeamortizacaodecapital, sigla, versao, url) values ('"+req.body.nomeamortizacaodecapital+"','"+req.body.sigla+"','"+req.body.versao+"','"+req.body.url+"')";
	const http = require('http')

	const data = JSON.stringify(amortizacaodecapital)

	const options = {
	  hostname: 'localhost',
	  port: 4040,
	  path: '/api/inc/amortizacaodecapital',
	  method: 'POST',
	  headers: {
	    'Content-Type': 'application/json',
	    'Content-Length': data.length
	  }
	}
	if (dadosForm.idamortizacaodecapital > 0){
		options.path = "/api/atualiza/amortizacaodecapital";
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
	  	res.redirect('/Amortizacaodecapital');
	    //res.render('customaoobra/amortizacaodecapital', {validacao:[],Amortizacaodecapital:amortizacaodecapital,msg:'Inclusao com sucesso!'});
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
	var amortizacaodecapital = {
		codigo: parseInt(req.query.codigo),
		empresa: parseInt(req.query.empresa),
		taxaamortizacao: parseFloat(req.query.taxaamortizacao),
		dataapuracao: req.query.dataapuracao,
        status: parseInt(req.query.status)
		}
		req.assert('codigo', 'codigo é um dado obrigatório. Informe por favor!').notEmpty();
		req.assert('empresa', 'empresa é um dado obrigatório. Informe por favor!').notEmpty();
		req.assert('taxaamortizacao', 'taxaamortizacao é um dado obrigatório. Informe por favor!').notEmpty();
		req.assert('dataapuracao', 'dataapuracao é um dado obrigatório. Informe por favor!').notEmpty();

	var erros = req.validationErrors();
	
	if(erros){
		//console.log(erros);
		res.render("customaoobra/amortizacaodecapital", {validacao:erros,Amortizacaodecapital:amortizacaodecapital,Empresas:[],msg:null});
		return;
	}
	
	//var sql = "Insert Into amortizacaodecapital(nomeamortizacaodecapital, sigla, versao, url) values ('"+req.body.nomeamortizacaodecapital+"','"+req.body.sigla+"','"+req.body.versao+"','"+req.body.url+"')";
	const http = require('http')
	if (amortizacaodecapital.dataapuracao.length < 10){
			if(amortizacaodecapital.dataapuracao.length < 9){
				amortizacaodecapital.dataapuracao=amortizacaodecapital.dataapuracao.substr(6, 4)+"-0"+amortizacaodecapital.dataapuracao.substr(3, 1)+"-0"+amortizacaodecapital.dataapuracao.substr(0, 1);
			}else{
				amortizacaodecapital.dataapuracao=amortizacaodecapital.dataapuracao.substr(6, 4)+"-"+amortizacaodecapital.dataapuracao.substr(3, 1)+"-0"+amortizacaodecapital.dataapuracao.substr(0, 2);
			}
		}else{
			amortizacaodecapital.dataapuracao=amortizacaodecapital.dataapuracao.substr(6, 4)+"-"+amortizacaodecapital.dataapuracao.substr(3,2)+"-"+amortizacaodecapital.dataapuracao.substr(0,2);
		}
	const data = JSON.stringify(amortizacaodecapital)
	
	//console.log(req);
	const options = {
	  hostname: 'localhost',
	  port: 4040,
	  path: '/amortizacaodecapital',
	  method: 'post',
	  headers: {
	    'Content-Type': 'application/json',
	    'Content-Length': data.length
	  }
	}
	if (amortizacaodecapital.codigo > 0){
		options.path = "/amortizacaodecapital/"+amortizacaodecapital.codigo;
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
	  	var wdata = JSON.parse(d);
	  	res.redirect('Amortizacaodecapital');
	    //res.render('customaoobra/amortizacaodecapital', {validacao:[],Amortizacaodecapital:amortizacaodecapital,Empresas:[],msg:'Alterado com sucesso!'});
	  })
	})

	wreq.on('error', error => {
	  console.error(error)
	})

	wreq.write(data)
	wreq.end()
};

// Delete a amortizacaodecapital by Id
module.exports.delete = function (application,req, res) {
	
	const id = req.query.empresa;
	var dadosForm = req.query;
	var amortizacaodecapital = {
		codigo: req.body.codigo,
		empresa: req.body.empresa,
		taxaamortizacao: req.body.taxaamortizacao,
		dataapuracao: req.body.dataapuracao,
        status: req.body.status
		}

	req.assert('empresa', 'Identificador do amortizacaodecapital é um dado obrigatório. Informe por favor!').notEmpty();
	var erros = req.validationErrors();
	
	if(erros){
		console.log(erros);
		res.render("customaoobra/amortizacaodecapital", {validacao:erros,Amortizacaodecapital:amortizacaodecapital,msg:null});
		return;
	}
	
	//var sql = "Insert Into amortizacaodecapital(nomeamortizacaodecapital, sigla, versao, url) values ('"+req.body.nomeamortizacaodecapital+"','"+req.body.sigla+"','"+req.body.versao+"','"+req.body.url+"')";
	const http = require('http')

	const data = JSON.stringify(amortizacaodecapitals)

	const options = {
	  hostname: 'localhost',
	  port: 4040,
	  path: '/api/exc/amortizacaodecapital',
	  method: 'delete',
	  headers: {
	    'Content-Type': 'application/json',
	    'Content-Length': data.length
	  }
	}
	
	const wreq = http.request(options, wres => {
	 // console.log(`statusCode: ${res.statusCode}`)
	  wres.on('data', d => {
	  	var wdata = JSON.parse(d);
	  	res.redirect('/Amortizacaodecapital');
	    //res.render('customaoobra/amortizacaodecapital', {validacao:[],Amortizacaodecapital:amortizacaodecapital,msg:'Exclusao processada com sucesso!'});
	  })
	})

	wreq.on('error', error => {
	  console.error(error)
	})

	wreq.write(data)
	wreq.end()
};