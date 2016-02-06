var express=require('express'),
	router=express.Router();

	router.get('/',function(req,res){
		res.send('Hi');
	});

	router.get('/get',function(req,res){
		res.send('Hello');
	});

	module.exports=router;