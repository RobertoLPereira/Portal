/* importar as configurações do servidor */
var app = require('./config/server');
app.listen(8080, function(){
	console.log('Servidor online na porta:8080');
})
/*const fs = require("fs");
const options = {
	key: fs.readFileSync("certificado.key"),
	cert: fs.readFileSync("certificado.cert")
  };
const https = require("https");
// parametrizar a porta de escuta 
https
  .createServer(options, app)
  .listen(8080, ()=>{
	console.log('Servico rodando na porta 8080 https')
});
*/
