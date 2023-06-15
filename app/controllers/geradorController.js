module.exports.index = function(application, req, res){
	
	res.render('gerador',{usuario:req.session.usuario});
}
module.exports.processar = function(application, req, res){
	console.log(req.body)
	//const data = JSON.stringify(req.query)
	/*
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
	  	 modulomenu(application, req, res,JSON.parse(d));
		})
	  })
		wreq.on('error', error => {
		  console.error(error)
		})
	//wreq.write(data)
	wreq.end()

	function modulomenu(application, req, res,Sis){
		const http = require('http')
		const options = {
		  hostname: 'localhost',
		  port: 8083,
		  path:'/api/todos/modulomenu',
		  method: 'GET',
		  headers: {'Accept' : 'application/json'}
		}

		const wreq = http.request(options, wres => {
		 // console.log(`statusCode: ${wres.statusCode}`)

	  wres.on('data', d => {
	  	 var wdata = JSON.parse(d);
	  	 res.render('modulomenu/crudmodulomenu', {validacao:[],ModuloMenus:wdata,Sistemas:Sis,msg:null});
		})
	  })
		wreq.on('error', error => {
		  console.error(error)
		})
	//wreq.write(data)
	wreq.end()
	}
    */
}
module.exports.getfindAllDb = function(application, req,res){
    const env = require('../../config/cup.js');

    /*
    const Sequelize = require('sequelize');
    const sequelize = new Sequelize(env.database, env.username, env.password, {
    host: env.host,
    dialect: env.dialect,
    operatorsAliases: false,

    pool: {
        max: env.max,
        min: env.pool.min,
        acquire: env.pool.acquire,
        idle: env.pool.idle
    }
    });

    const db = {};

    db.Sequelize = Sequelize;
    db.sequelize = sequelize;
    */
    const { Pool } = require('pg')
    const pool = new Pool({
      user: env.username,
      host: env.host,
      database: env.database,
      password: env.password,
      port: 5432,
    })
    pool.query('select datname from pg_database;', (err, ListaBancoDados) => {
      console.log(err, ListaBancoDados) 
      ListaBancoDados.forEach(obj => {
        var rslt ="{ \"databases\":[";
        var x = 0;
        Object.entries(obj).forEach(([key, value]) => {
           // console.log(`${key} ${value}`);                                    
            if (x == 0){
            rslt+="{\"name\":\""+ '${value}'+"\"}";
            x++;
            }else{
                rslt+=",{\"name\":\""+'${value}'+"\"}"; 
                }
            }                              
        ) });
    rslt+="]}";  
    console.log(rslt);
      pool.end() 
    })
    console.log(req.query);
    //queryDatabase();
    /*db.sequelize.connect(function (err) { 
        if (err) { 
            console.log("!!! Cannot connect !!! Error:");
            throw err;
        }
        else
            {
            console.log("Connection established.");
                queryDatabase();
            }
        });
    */
    function queryDatabase(){
        console.log('entrei na query')
        sql = "select datname from pg_database;";
        db.sequelize.query(sql).then(ListaBancoDados => {
            console.log(ListaBancoDados)
            ListaBancoDados.forEach(obj => {
                var rslt ="{ \"databases\":[";
                var x = 0;
                Object.entries(obj).forEach(([key, value]) => {
                   // console.log(`${key} ${value}`);                                    
                    if (x == 0){
                    rslt+="{\"name\":\""+ '${value}'+"\"}";
                    x++;
                    }else{
                        rslt+=",{\"name\":\""+'${value}'+"\"}"; 
                        }
                    }                              
                ) });
            rslt+="]}";  
            console.log(rslt);
            res.status(200).json(rslt);
        }).catch(err => {
            console.log(err);
            res.status(500).json({msg: "error", details: err});
        });
    }
}
module.exports.conectar = function(application, req, res){

const mysql = require('mysql');
const fs = require('fs');

var config =
{
    host: 'mydemoserver.mysql.database.azure.com',
    user: 'myadmin@mydemoserver',
    password: 'your_password',
    database: 'quickstartdb',
    port: 3306,
    ssl: {ca: fs.readFileSync("your_path_to_ca_cert_file_DigiCertGlobalRootCA.crt.pem")}
};

const conn = new mysql.createConnection(config);

conn.connect(
    function (err) { 
    if (err) { 
        console.log("!!! Cannot connect !!! Error:");
        throw err;
    }
    else
        {
        console.log("Connection established.");
            queryDatabase();
        }
    });

    function queryDatabase(){
        conn.query(sql).then(ModuloMenu => {
				res.status(200).json(ModuloMenu);
			}).catch(err => {
				console.log(err);
				res.status(500).json({msg: "error", details: err});
			});
        conn.query('DROP TABLE IF EXISTS inventory;', function (err, results, fields) { 
            if (err) throw err; 
            console.log('Dropped inventory table if existed.');
        })
            conn.query('CREATE TABLE inventory (id serial PRIMARY KEY, name VARCHAR(50), quantity INTEGER);', 
                function (err, results, fields) {
                    if (err) throw err;
            console.log('Created inventory table.');
        })
        conn.query('INSERT INTO inventory (name, quantity) VALUES (?, ?);', ['banana', 150], 
                function (err, results, fields) {
                    if (err) throw err;
            else console.log('Inserted ' + results.affectedRows + ' row(s).');
            })
        conn.query('INSERT INTO inventory (name, quantity) VALUES (?, ?);', ['orange', 154], 
                function (err, results, fields) {
                    if (err) throw err;
            console.log('Inserted ' + results.affectedRows + ' row(s).');
            })
        conn.query('INSERT INTO inventory (name, quantity) VALUES (?, ?);', ['apple', 100], 
        function (err, results, fields) {
                    if (err) throw err;
            console.log('Inserted ' + results.affectedRows + ' row(s).');
            })
        conn.end(function (err) { 
        if (err) throw err;
        else  console.log('Done.') 
        });
    };
    function schema(){
        var sql = "Select * from information_schema.tables tb where tb.table_schema not in ('pg_catalog','information_schema');";
        conn.query(sql).then(ListaBancoDados => {
            ListaBancoDados.forEach(obj => {
                Object.entries(obj).forEach(([key, value]) => {
                    console.log(`${key} ${value}`);
                });
                console.log('-------------------');
            });
            res.status(200).json(ListaBancoDados);
        }).catch(err => {
            console.log(err);
            res.status(500).json({msg: "error", details: err});
        });
        conn.query("Select * from information_schema.tables tb where tb.table_schema not in ('pg_catalog','information_schema');", function (err, results, fields) { 
            if (err) throw err; 
            console.log('Dropped inventory table if existed.');
        })
       
    }
    function gerarCasoUso(){
        const Mustache = require('mustache')
        var fs = require('fs')
        var moment = require('moment')
        let databrasil = moment().format('DD/MM/YYYY')
        const parametros = {
            Chave: null,
            Tabela: null,
            Objetivo: null,
            Vocabulario: 'a',
            Author: 'Roberto Lima Pereira',
            Data: databrasil
        }
        let preload = fs.readFileSync('CasoUso.ftl','utf-8')
        var rendered = Mustache.render(preload,parametros)
        var nomesaida = parametros.Tabela+".doc"
        fs.writeFileSync(nodesaida, rendered, 'utf-8')
    }
}