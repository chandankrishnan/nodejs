var prompt = require('prompt');
 prompt.start();

 prompt.get(['a', 'b'], function (err, result) {
   //
   // Log the results.
   var re=require('./promptfun.js');
   console.log('Command-line input received:');
   console.log('  add: ' +re.add(result.a,result.b));
   console.log('  sub: ' + re.sub(result.a,result.b));
 });
