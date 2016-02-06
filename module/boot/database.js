var express=require('express'),
app=express(),
port=process.env.PORT||3005,
mongo=require('mongodb').mongoClient();
mongo.conn

app.listen(port,function(req,res){
	console.log('Connect');
});

app.get('/',function(err,data){

})