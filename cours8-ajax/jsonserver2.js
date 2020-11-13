// Exemple d'un serveur HTTP simple écrit avec Node.JS (flux)
// Source: node.js succinctly

var http = require('http');
if (! http) throw { msg: "Cannot find http" };

var fs = require("fs");
if (! fs) process.exit(2);

var imagesPath = "images/";
var images = ["one.jpg", "two.jpg", "three.jpg", "four.jpg", "five.jpg"];

// Fonction simple pour servir une requête
var serveRequest = function(request, response) {

    if (request.url.endsWith(".html") || request.url.endsWith(".js") || request.url.endsWith(".jpg") || request.url.endsWith(".png") ) {

	var filename = "." + request.url; // ./ajaxImages.html
	var rs = fs.createReadStream(filename);
	rs.on("error", function(error) {
	    console.log(error);
	    response.write("Impossible de lire: " + fileName);
	    response.statusCode = 404;
	    response.end();
	});

	rs.on("data", function(data) {
	    response.write(data);
	});

	rs.on("end", function() {
	    response.end();
	});
    } else if (request.url.endsWith("/ajax")) {
	var arr = {};
	for (var i=0; i<30; i++) {
	    var key = Math.floor(Math.random() * 30);
	    var rand = Math.floor(Math.random() * 5);
	    var image = imagesPath + images[rand]; // url de la nouvelle image permutée
	    arr[key] = image;
	}
	response.writeHead(200, {"Content-Type": "application/json"});
	response.write(JSON.stringify(arr));
	response.end();
    } else {
	response.write("Requête inconnue: " + request.url);
	response.statusCode = 404;
	response.end();
    }
    
};

// Démarre le serveur sur le port demandé et définit un gestionnaire
// "on" qui permet de traiter une requête
// Écoute sur le port spécifié
var port = 8092;
var server = http.createServer();
console.log("Starting server on port " + port);
server.on("request", serveRequest);
server.listen(port);
