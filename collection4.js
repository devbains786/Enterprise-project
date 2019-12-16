var MongoClient = require ('mongodb').MongoClient;
var url = "mongodb://localhost:27017";

MongoClient.connect(url, {useUnifiedTopology: true}, function ( err, db){
	if (err) throw err;
	var mydbs = db.db("Haste_Pickup_Service");
	
	mydbs.createCollection("c0741040_location", function(err,response){
	if (err) throw err;
	console.log("c0741040_location Collection is Created!");
	db.close();	
	});
});