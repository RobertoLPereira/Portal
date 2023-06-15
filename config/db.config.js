const env = require('./cup.js');

const Sequelize = require('sequelize');
var connMongoDB = function(){
	console.log('Entrou na função de conexão');
	const sequelize = new Sequelize(cup.database, cup.username, cup.password, {
	  host: cup.host,
	  dialect: cup.dialect,
	  operatorsAliases: false,
	  pool: {
	    max: cup.max,
	    min: cup.pool.min,
	    acquire: cup.pool.acquire,
	    idle: cup.pool.idle
	  }
	});

	const db = {};

	db.Sequelize = Sequelize;
	db.sequelize = sequelize;
	db.usuarios   = require('../models/Usuario.js')(sequelize, Sequelize);
	return db;
}
module.exports = function(){
	return connMongoDB;
}