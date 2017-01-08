animalsApp.factory('animalCart', function ($resource) {
    var resource = $resource('data/cart/:id',{id:'@id'});
    return {

        add: function(animal){
            animal.id = animal.name;
            window.location = "/cart";
            return resource.save(animal);
        },
        remove: function (animalId){
            window.location = "/cart";
            return resource.delete({id:animalId.id});
        },
        getAllAnimalsInCart: function(){
            return resource.query();
        }
    };
});