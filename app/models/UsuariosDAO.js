function UsuariosDAO(connection){
	this._connection = connection.db.usuarios;
}

UsuariosDAO.prototype.inserirUsuario = function(usuario){
	this._connection.create(req.body).then(usuario => {		
			// Send created Pessoa to client
			res.json(usuario);
		}).catch(err => {
			console.log(err);
			res.status(500).json({msg: "error", details: err});
		});
}

UsuariosDAO.prototype.autenticar = function(usuario, req, res){
	this._connection.open( function(err, mongoclient){
		mongoclient.collection("usuarios", function(err, collection){
			collection.find(usuario).toArray(function(err, result){

				if(result[0] != undefined){

					req.session.autorizado = true;

					req.session.usuario = result[0].usuario;
					req.session.casa = result[0].casa;
				}

				if(req.session.autorizado){
					res.redirect("jogo");
				} else {
					res.render("index", {validacao: {}});
				}

			});
			mongoclient.close();
		});
	});
}


module.exports = function(){
	return UsuariosDAO;
}