animalsApp.factory('animalData', function ($resource) {
    var resource = $resource('data/animal/:id',{id:'@id'});
    return {
        getAnimal: function (animalId) {
            return resource.get({id:animalId});
        },
        save: function(animal){
            animal.id = animal.name;
            window.location = "/animals";
            return resource.save(animal);
        },
        getAllAnimals: function(){
            return resource.query();
        },
        delete: function (animalId){
           //animal.id = animal.name;
            window.location = "/animals";
            return resource.delete({id:animalId});
        }
    };
});
