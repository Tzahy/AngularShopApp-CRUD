animalsApp.controller('AnimalCartController',

    function AnimalCartController($scope, $location, animalCart, $routeParams){
        $scope.animals = animalCart.getAllAnimalsInCart();

        $scope.total = function() {

            var total = 0;
            angular.forEach($scope.animals, function(item) {
                total += parseInt(item.price);
            });
            return total;
        };

        $scope.removeAnimalFromCart = function(animal){
            console.log('inside deleteAnimalFromCart');
            animalCart.remove(animal)
                .$promise
                .then(function(response){
                    console.log('success delete ',response);
                })
                .catch(function(response){console.log('failure delete',response)});
        };


    }
);
