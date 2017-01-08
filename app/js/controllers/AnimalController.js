animalsApp.controller('AnimalController',
  function AnimalController($scope, animalData, animalCart, $routeParams) {

        animalData.getAnimal($routeParams.animalId)
            .$promise
            .then(function (animal) {$scope.animal = animal;})
            .catch(function (response) {console.log(response);});


        $scope.deleteAnimal = function(animal){
            console.log('inside deleteAnimal');

            animalData.delete($routeParams.animalId)
                .$promise
                .then(function(response){
                    console.log('success delete ',response);
                })
                .catch(function(response){console.log('failure delete',response)});
        };

      $scope.addAnimal = function(animal, newAnimalForm){
            animalCart.add(animal)
              .$promise
              .then(function(response){console.log('success add animal',response)})
              .catch(function(response){console.log('failure add animal',response)});
      };

  }
);

