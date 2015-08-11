var express = require('express');
var app = express();

app.set('port', (process.env.PORT || 5000));

app.use(express.static(__dirname + '/public'));

// views is directory for all template files
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');

// listens to home page
app.get('/', function(request, response) {
  response.render('pages/index');
});

// listen to team page
app.get('/team', function(request, response) {
  var profileJson = require(__dirname + '/profile_source');
  response.render('pages/team',{profileJson:profileJson} );
});

app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});




