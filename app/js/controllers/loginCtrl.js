animalsApp.controller('loginCtrl',['$scope','fac','$rootScope', function($scope,fac,$rootScope){

    $scope.chkLoginAndGo = function () {

        if (!$scope.user.name || !$scope.user.password) {

           // alert('Please enter username and password');
            return;
        }

        user = $scope.user.name;
        password = $scope.user.password;

        var valid = false;
        for (var i=0; i < fac.users.length; i++) {
            if ((user == fac.users[i]) && (password == fac.passwords[i])) {
                valid = true;
                break;
            }
        }

        if (valid) {
            fac.registeredRoot(true);
            $rootScope.isLoggedIn = true;
            window.location = "/animals";
        }else{
            alert("Wrong username or password");
        }

    }



   

}]);

