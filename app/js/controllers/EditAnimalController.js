animalsApp.controller('EditAnimalController',
    function EditAnimalController($scope,$rootScope,animalData) {
        console.log($rootScope.isLoggedIn);
        $scope.saveAnimal = function(animal, newAnimalForm){
            console.log(newAnimalForm);
            if (newAnimalForm.$valid) {
               // alert('animal ' + animal.name + ' saved!');
                animalData.save(animal)
                    .$promise
                    .then(function(response){console.log('success',response)})
                    .catch(function(response){console.log('failure',response)});
            }
        };

        $scope.cancelEdit = function(){
          //  console.log('CancelEdit rootScope is: '+$rootScope.isLoggedIn);
            window.location = "/animals";
            /* if ($rootScope.isLoggedIn === true){
             window.location = "templates/animalList.html";
             }else{
             console.log('CancelEdit rootScope is: '+$rootScope.isLoggedIn);
             window.location = "templates/login"
             }*/
        };


      ///////


      /////////


    }
);