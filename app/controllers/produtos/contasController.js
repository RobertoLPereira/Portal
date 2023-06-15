module.exports.findNomePessoa = function(application, req, res){
	var dadosForm = req.query
	const data = JSON.stringify(req.query)
	console.log(data)
	const http = require('http')
	const options = {
	  hostname: 'localhost',
	  port: 4000,
	  path:'/api/Contas/nomepessoa='+req.query.nomepessoa.replace(" ","%20"),
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
	  	 res.render('pessoas', {validacao:[],Contas:wdata,msg:null,host:4000});
		})
	  })
		wreq.on('error', error => {
		  console.error(error)
		})
	//wreq.write(data)
	wreq.end()
}