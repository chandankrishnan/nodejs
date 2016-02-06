var express=require('express'),
	route=require('./module/boot/demo');
	route1=require('./module/boot/db');
	bodyParser=require('body-parser'),
	app=express(),
	port=process.env.PORT||3019;
	app.use(bodyParser());

	app.use('/',route1);
	// app.use('/db',route1);

	app.listen(port,function(req,res){
		console.log('Server connect at port '+port);
	})