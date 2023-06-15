module.exports.listar = function(application, req, res){
	//console.log(req)
	//const data = JSON.stringify(req.query)
	const http = require('http')
	const options = {
	  hostname: 'localhost',
	  port: 4040,
	  path:'/Quadro1?empresa=4',
	  method: 'GET',
	  headers: {'Accept' : 'application/json'}
	}

	const wreq = http.request(options, wres => {
	 // console.log(`statusCode: ${wres.statusCode}`)

	  wres.on('data', d => {
	  	 var wdata = JSON.parse(d);
	  	 //console.log(wdata)
	  	 QuadroII(application,req,res,wdata)
	  	 //res.render('customaoobra/demonstrativos', {validacao:[],Quadros:wdata,msg:null});
		})
	  })
		wreq.on('error', error => {
		  console.error(error)
		})
	//wreq.write(data)
	wreq.end()
	function QuadroII(application,req,res,Q1){
		const http = require('http')
	const options = {
	  hostname: 'localhost',
	  port: 4040,
	  path:'/Quadro2?empresa=4',
	  method: 'GET',
	  headers: {'Accept' : 'application/json'}
	}

	const wreq = http.request(options, wres => {
	 // console.log(`statusCode: ${wres.statusCode}`)

	  wres.on('data', d => {
	  	 var wdata = JSON.parse(d);
	  	 QuadroIII(application,req,res,Q1,wdata)
	  	 //console.log(wdata)
	  	 //res.render('customaoobra/demonstrativos', {validacao:[],Quadros:Q1,Total:wdata,msg:null});
		})
	  })
		wreq.on('error', error => {
		  console.error(error)
		})
	//wreq.write(data)
	wreq.end()
	}
	function QuadroIII(application,req,res,Q1,Q2){
		const http = require('http')
		const options = {
		  hostname: 'localhost',
		  port: 4040,
		  path:"/Quadro3?empresa=4&descricao=Fixa&Ano=2020&Mes=1",
		  method: 'GET',
		  headers: {'Accept' : 'application/json'}
		}

		const wreq = http.request(options, wres => {
		  wres.on('data', d => {
		  	 var wdata = JSON.parse(d);
		  	SalariosEncargos(application,req,res,Q1,Q2,wdata)
			})
		  })
			wreq.on('error', error => {
			  console.error(error)
			})
		wreq.end()
	}//SalariosEncargos
	function SalariosEncargos(application,req,res,Q1,Q2,Q3){
		const http = require('http')
		const options = {
		  hostname: 'localhost',
		  port: 4040,
		  path:"/SalariosEncargos?empresa=4",
		  method: 'GET',
		  headers: {'Accept' : 'application/json'}
		}

		const wreq = http.request(options, wres => {
		  wres.on('data', d => {
		  	 var wdata = JSON.parse(d);
		  	 ProlaboreEImprodutivos(application,req,res,Q1,Q2,Q3,wdata)
			})
		  })
			wreq.on('error', error => {
			  console.error(error)
			})
		wreq.end()
	}//ProlaboreEImprodutivos
	function ProlaboreEImprodutivos(application,req,res,Q1,Q2,Q3,Salarios){
		const http = require('http')
		const options = {
		  hostname: 'localhost',
		  port: 4040,
		  path:"/ProlaboreEImprodutivos?empresa=4",
		  method: 'GET',
		  headers: {'Accept' : 'application/json'}
		}

		const wreq = http.request(options, wres => {
		  wres.on('data', d => {
		  	 var wdata = JSON.parse(d);
		  	 //res.render('customaoobra/demonstrativos', {validacao:[],Quadros:Q1,Total:Q2,QuadrosIII:Q3,SalariosEncargos:Salarios,Prolabore:wdata,msg:null});
			   LucroLiquido(application,req,res,Q1,Q2,Q3,Salarios,wdata)
			})
		  })
			wreq.on('error', error => {
			  console.error(error)
			})
		wreq.end()
	}
	//Lucro Liquido
	function LucroLiquido(application,req,res,Q1,Q2,Q3,Salarios,ProlaboreEImprodutivos){
		const http = require('http')
		const options = {
		  hostname: 'localhost',
		  port: 4040,
		  path:"/LucroLiquido?empresa=4",
		  method: 'GET',
		  headers: {'Accept' : 'application/json'}
		}

		const wreq = http.request(options, wres => {
		  wres.on('data', d => {
		  	 var wdata = JSON.parse(d);
		  	 res.render('customaoobra/demonstrativos', {validacao:[],Quadros:Q1,Total:Q2,QuadrosIII:Q3,SalariosEncargos:Salarios,Prolabore:ProlaboreEImprodutivos,LucroLiquido:wdata,msg:null});
			})
		  })
			wreq.on('error', error => {
			  console.error(error)
			})
		wreq.end()
	}
};
