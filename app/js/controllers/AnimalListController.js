'use strict';

animalsApp.controller('AnimalListController',
    function AnimalListController($scope, $location, animalData){
        $scope.animals = animalData.getAllAnimals();
    }
);
