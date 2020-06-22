/*
 * Write your routing code in this file.  Make sure to add your name and
 * @oregonstate.edu email address below.
 *
 * Name: Abhi Balijepalli
 * Email: balijepn@oregonstate.edu
 */

var path = require('path');
var express = require('express');
var exphbs = require('express-handlebars');
var twitData = require('./twitData');
var app = express();
var port = process.env.PORT || 3000;

app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');


app.get('/twits', function(req, res, next) {
  var templateArgs = {twit: twitData, singleTwit: false};
  res.render('twitOutlines', templateArgs);
});


//GET req for twit types
app.get('/twits/:type',function(req,res,next){
  console.log("==url params for request:",req.params);
  var type = req.params.type;
  //console.log("== arr",twitData[0]);
  var data = twitData[type];
  if(data){
    var templateArgs={
      text: data.text,
      author: data.author,
      singleTwit: true
    }
    res.render('twitOutlines',templateArgs);
  } else{
    next();
  }
});


app.use(express.static('public'));

app.get('*', function (req, res) {
  res.status(404).sendFile(path.join(__dirname, 'public', '404.html'));
});

app.listen(port, function () {
  console.log("== Server is listening on port", port);
});
