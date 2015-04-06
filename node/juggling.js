var http = require('http');

var urls = [process.argv[2], process.argv[3], process.argv[4]];

var completed_requests = 0;
var responses = [];

urls.forEach(function(url)
{
    http.get(url, function(res)
    {
        res.setEncoding('utf8');
        res.on('data', function(chunk)
        {
           if (typeof responses[url] != 'undefined')
           {
                responses[url] += chunk; 
           }
           else
           {
               responses[url] = chunk;
           }
        });
        res.on('end', function()
        {
            if(completed_requests++ == urls.length - 1)
            {
                urls.forEach(function(url)
                {
                    console.log(responses[url]);
                });
            }   
        });
    });
});

/*
 * Official answer:
 */

 var http = require('http')
    var bl = require('bl')
    var results = []
    var count = 0

    function printResults () {
      for (var i = 0; i < 3; i++)
        console.log(results[i])
    }

    function httpGet (index) {
      http.get(process.argv[2 + index], function (response) {
        response.pipe(bl(function (err, data) {
          if (err)
            return console.error(err)

          results[index] = data.toString()
          count++

          if (count == 3)
            printResults()
        }))
      })
    }

    for (var i = 0; i < 3; i++)
      httpGet(i)
