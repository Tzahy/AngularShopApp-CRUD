animalsApp.factory("fac",function(){

    var fac = {};
    fac.users = ["root"];
    fac.passwords = [1234];
    fac.valid = [];

    fac.registeredRoot = function(e){
        fac.valid.push(e);
    };

    return fac;
});
