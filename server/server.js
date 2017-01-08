var express = require('express');
var path = require('path');
var animals = require('./serverController');
var app = express();
var rootPath = path.normalize(__dirname + '/../');
var bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(express.static(rootPath));

app.get('/data/animal/:id', animals.get);
app.get('/data/animal', animals.getAll);
app.get('/data/cart', animals.getAllCart);
app.post('/data/animal/:id', animals.save);
app.delete('/data/animal/:id', animals.delete);
app.post('/data/cart/:id', animals.add);
app.delete('/data/cart/:id', animals.remove);
app.get('*', function(req, res){res.sendFile(rootPath+'index.html');});

app.listen(8000);
console.log('Listening on port 8000...');

