var mongo=require('mongodb').MongoClient;
var express=require('express');
var stringify = require('json-stringify-safe');
var validator=require('is-valid');

router=express.Router();
var database='mongodb://test:bridgeit%402016@ds047365.mongolab.com:47365/shoppingpad';


router.post('/',function(req,res)
{
	console.log('hello');
				
	mongo.connect(database,function(err,db){
					var name=req.body.name;
					var	email=req.body.email;
					var subject=req.body.subject;
					var who=req.body.who;
					var msg=req.body.msg;
		if(err)
			{ 
				console.log(err);
			}
			else if(validator.isEmail(email)&&validator.isAllEnglish(name,subject,who,msg)){
					var collection=db.collection('test');
					collection.insert({'Name':name,'email':email,'subject':subject,'who':who,'msg':msg});	
					res.send(name + " "+email);				
				}else{
					console.log('error');
				}

});
});

	router.get('/get',function(req,res)
	{
		var db=mongo.connect(database,function(err,db)
		{
			if(err) console.log(err);
				else
				{
					console.log('Connected to database');
					var cursor =db.collection('test').find( );
				   			cursor.each(function(err, doc) {
				      if (doc != null) {
				      		res.send(doc);
				         console.log(doc);
				      } else {
				         console.log('callback called');
				      }
				  	 });
				}
		});
	})
	module.exports=router;