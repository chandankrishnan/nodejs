var get=require('prompt');
prompt.start()
prompt.get([username,email]),function(err,result){
  console.log("--------------------");
  console.log("The Username :- "+result.username);
  console.log("The email:-"+result.email);
  console.log("---------------");
}
