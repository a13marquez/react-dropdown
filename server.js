const express = require('express');

// Create our app
const app = express();
const router = express.Router();
const port = process.env.PORT || 3000;


app.use(function(req, res, next){
  if(req.headers['x-forwarded-proto'] === 'https'){
    res.redirect('http://' + req.hostname + req.url);
  } else {
    next();
  }
});

app.all('/api/states', function(req, res, next){
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "X-Requested-With");
  next();
});

app.use(express.static(__dirname + '/dist'));

router.get('/api/states', function(req, res){
  const states = require('./db.json')
  res.json(states);
})

app.use(router);
app.listen(port, function () {
  console.log('Express server is up on port ' + port);
});
