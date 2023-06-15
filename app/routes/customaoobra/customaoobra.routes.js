module.exports = function(application){
	
	application.get('/CustomaoobraClientes', function(req, res){
		application.app.controllers.customaoobra.clienteController.listarclientes(application, req, res);
	});
	application.post('/CustomaoobraincCliente', function(req, res){
		application.app.controllers.customaoobra.clienteController.create(application, req, res);
	});
	application.get('/CmoatualizarCliente', function(req, res){
		application.app.controllers.customaoobra.clienteController.update(application, req, res);
	});
	application.delete('/CustomaoobraexcCliente', function(req, res){
		application.app.controllers.customaoobra.clienteController.delete(application, req, res);
	});
	application.post('/CustomaoobravalidarCliente', function(req, res){
		application.app.controllers.customaoobra.clienteController.validarcliente(application, req, res);
	});
	application.get('/CustoMaoObra', function(req, res){
		application.app.controllers.customaoobra.customaoobraController.listarCusto(application, req, res);
	});
}