var express = require('express'),
    config = require('./config/config'),
    glob = require('glob'),
    mongoose = require('mongoose');

var server_port = process.env.OPENSHIFT_NODEJS_PORT || 8080
var server_ip_address = process.env.OPENSHIFT_NODEJS_IP || '127.0.0.1'
//provide a sensible default for local development
mongodb_connection_string = 'mongodb://127.0.0.1:27017/' + config.db;

//take advantage of openshift env vars when available:
if(process.env.OPENSHIFT_MONGODB_DB_URL){
    mongodb_connection_string = process.env.OPENSHIFT_MONGODB_DB_URL + config.db;
}

mongoose.connect(config.db);
var db = mongoose.connection;
db.on('error', function () {
    throw new Error('unable to connect to database at ' + config.db);
});
//var adminDb = db.admin();
//  // List all the available databases
//  adminDb.listDatabases(function(err, result) {
//    console.log(result.databases);
//    db.close();
//  });


var models = glob.sync(config.root + '/app/models/*.js');
models.forEach(function (model) {
    require(model);
});
var app = express();

require('./config/express')(app,config);



app.listen(server_port, server_ip_address, function () {
    console.log( "Listening on " + server_ip_address + ", port " + server_port )
});







