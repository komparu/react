var http = require('http');
/*
 * Working solution #1
 *
http.get(process.argv[2], function(res){
   var count = 0;
   var result = '';
   res.setEncoding('utf8');
   res.on('data', function(data)
   {
       result += data;
       count += data.length;
   });
   res.on('end', function()
   {
       console.log(count);
       console.log(result);
   });
});
**/

/**
 * 
 * Working Solution #2
 */
var bl = require('bl');

http.get(process.argv[2], function(res)
{
    res.pipe(bl(function(err, data) 
    {
        if(err)
            return console.error(err);
        data = data.toString();
        console.log(data.length);
        console.log(data);
    }));
});