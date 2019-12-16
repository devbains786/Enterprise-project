var MongoClient = require ('mongodb').MongoClient;
var url = "mongodb://localhost:27017";

MongoClient.connect(url, {useUnifiedTopology: true}, function ( err, db){
if (err) throw err;
var mydbs = db.db("Haste_Pickup_Service");

var mydata = [{ first_name:"ritwick",sir_name:"ahuja",department:"customer_record",phone_number:"7896541230",email_address:"fedwdca@gmial.com"},
{first_name:"paras",sir_name:"chabra",department:"driver_record",phone_number:"1236547890",email_address:"nhyu@gmial.com"},
{ first_name:"vishal",sir_name:"sharma",department:"it_section",phone_number:"4569871235",email_address:"llkka@gmial.com"},
{ first_name:"shehnaaz",sir_name:"gill",department:"customer_record",phone_number:"4568712695",email_address:"vvffg@gmial.com"}];

mydbs.collection("c0741040_supportStaff").insertMany(mydata,function(err,response){
if (err) throw err;

console.log("Insertions6 are applied ");
db.close();
});
});