var fs  = require('fs');

module.exports.get = function(req,res){
    var animal = fs.readFileSync('app/data/animal/'+req.params.id+'.json','utf8');
    res.setHeader('Content-Type','application/json');
    res.send(animal);
};

module.exports.save = function(req,res){
  var animal = req.body;
    fs.writeFileSync('app/data/animal/'+req.params.id+'.json',JSON.stringify(animal));
};

module.exports.add = function(req,res){
    var animal = req.body;
    console.log('in the server');
    fs.writeFileSync('app/data/cart/'+req.params.id+'.json',JSON.stringify(animal));
};

module.exports.delete = function(req,res){
    var animal = req.body;
    fs.unlinkSync('app/data/animal/'+req.params.id+'.json',JSON.stringify(animal));
    console.log('successfully deleted'+'app/data/animal/'+req.params.id+'.json',JSON.stringify(animal));
};

module.exports.remove = function(req,res){
    var animal = req.body;
    console.log('params are: '+req.params.id);
    fs.unlinkSync('app/data/cart/'+req.params.id+'.json',JSON.stringify(animal));
    console.log('successfully deleted'+'app/data/cart/'+req.params.id+'.json',JSON.stringify(animal));
};

module.exports.getAll = function (req, res) {
    var path = 'app/data/animal/';

    var files = [];
    try{
        files = fs.readdirSync(path);
    }
    catch(e) {
        res.send('[]');
        res.end();
    }
    var results = "[";
    for (var idx = 0; idx < files.length; idx++){
        if (files[idx].indexOf(".json")==files[idx].length-5){
            results += fs.readFileSync(path+"/"+files[idx])+","
        }
    }
    results = results.substr(0, results.length - 1);
    results += "]";

    res.setHeader('Content-Type', 'application/json');
    res.send(results);
    res.end();
};

module.exports.getAllCart = function (req, res) {
    var path = 'app/data/cart/';

    var files = [];
    try{
        files = fs.readdirSync(path);
    }
    catch(e) {
        res.send('[]');
        res.end();
    }
    var results = "[";
    for (var idx = 0; idx < files.length; idx++){
        if (files[idx].indexOf(".json")==files[idx].length-5){
            results += fs.readFileSync(path+"/"+files[idx])+","
        }
    }
    results = results.substr(0, results.length - 1);
    results += "]";

    res.setHeader('Content-Type', 'application/json');

    res.send(results);
    res.end();
};
