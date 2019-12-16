var MongoClient = require ('mongodb').MongoClient;
var url = "mongodb://localhost:27017";

MongoClient.connect(url, {useUnifiedTopology: true}, function ( err, db){
if (err) throw err;
var mydbs = db.db("Haste_Pickup_Service");

var mydata = [{ car_id:"cc1234",model:"2016",type:"sedan"},
{car_id:"sd23456",model:"2020",type:"mini"},
{car_id:"au4578",model:"2017",type:"prime"},
{car_id:"er33224",model:"2019",type:"sedan"}];

mydbs.collection("c0741040_car").insertMany(mydata,function(err,response){
if (err) throw err;

console.log("Insertions5 are applied ");
db.close();
});
});