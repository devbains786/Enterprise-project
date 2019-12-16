var MongoClient = require ('mongodb').MongoClient;
var url = "mongodb://localhost:27017";

MongoClient.connect(url, {useUnifiedTopology: true}, function ( err, db){
if (err) throw err;
var mydbs = db.db("Haste_Pickup_Service");

var mydata = [{ location_name:"avenue rd,toronto", location_pincode:"L6Y4R3", customer_id:"v3d8g7"},
{  location_name:"colonial drive,guelph", location_pincode:"D4R1T5", customer_id:"GHT567"},
{  location_name:"gurgaon,missisauga", location_pincode:"V5H4J3", customer_id:"C5S6W"},
{  location_name:"airview motors,etobicoke", location_pincode:"C1R2T3", customer_id:"JDN838"}];

mydbs.collection("c0741327_location").insertMany(mydata,function(err,response){
if (err) throw err;

console.log("Insertions4 are applied ");
db.close();
});
});