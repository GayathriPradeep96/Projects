var express = require('express');
var app = express();
var bodyParser = require('body-parser');

// Create application/x-www-form-urlencoded parser
var urlencodedParser = bodyParser.urlencoded({ extended: false })

app.use(express.static('public'));
app.get('/index.htm', function (req, res) {
   res.sendFile( __dirname + "/" + "index.htm" );
})

app.post('/process_post', urlencodedParser, function (req, res) {
   // Prepare output in JSON format
   response = {
      first_name:req.body.first_name,
      last_name:req.body.last_name
   };
   var fs = require('fs');
   var ctext = JSON.stringify(response);
   fs.appendFile('users.txt', "\n" + ctext, function (err){
   //fs.writeFile('mynewfile3.txt', ctext, function (err) {
     if (err) throw err;
     console.log('Saved!');
   });
   console.log(response);
   res.end(JSON.stringify(response));

})
