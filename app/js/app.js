var animalsApp = angular.module('animalsApp', ['ngResource','ngRoute'])
    .config(function($routeProvider, $locationProvider) {
        $routeProvider.when('/login',
            {
                templateUrl:'templates/login.html',
                controller: 'loginCtrl'
            });
        $routeProvider.when('/newAnimal',
            {
                templateUrl:'templates/NewAnimal.html',
                controller: 'EditAnimalController'
                //resolve: {}
            });
        $routeProvider.when('/animals',
            {
                templateUrl:'templates/AnimalList.html',
                controller: 'AnimalListController'
            });
        $routeProvider.when('/cart',
            {
                templateUrl:'templates/AnimalCart.html',
                controller: 'AnimalCartController'
            });
        $routeProvider.when('/buy',
            {
                templateUrl:'templates/thanks.html'

            });
        $routeProvider.when('/animal/:animalId',
            {
                templateUrl:'templates/AnimalDetails.html',
                controller: 'AnimalController'
            });


        $routeProvider.otherwise({redirectTo: '/login'});
        $locationProvider.html5Mode(true);
    }).run(function($rootScope) {
        $rootScope.isLoggedIn = false;
    });


// If i would wanted to work with UI ROUTER i would use the following code...
// And inject the corresponding dependencies to my controllers, e.g. $state etc..
/*
 var animalsApp = angular.module("animalsApp",['ui.router','ngResource'])
 .config(["$urlRouterProvider","$stateProvider","$locationProvider",function($urlRouterProvider,$stateProvider,$locationProvider){

 $stateProvider.state('/',{
 url:'/login',
 templateUrl:'templates/login.html',
 controller:'loginCtrl'
 }).state('newAnimal',{
 url:'/newAnimal',
 templateUrl:'templates/NewAnimal.html',
 controller:'EditAnimalController'
 }).state('animals',{
 url:'/animals',
 templateUrl:'templates/AnimalList.html',
 controller:'AnimalListController'
 }).state('cart',{
 url:'/cart',
 templateUrl:'templates/AnimalCart.html',
 controller:'AnimalCartController'
 }).state('buy',{
 //url:'/newAnimal',
 templateUrl:'templates/thanks.html'
 //controller:'loginCtrl'
 }).state('AnimalDetails',{
 url:'/animal/:animalId',
 templateUrl:'templates/AnimalDetails.html',
 controller:'AnimalController'

 });
 $urlRouterProvider.otherwise('/login');
 $locationProvider.html5Mode(true);

 }]).run(['$rootScope','$state',function($rootScope,$state){

 //If isLoggedIn is false you cannot change routes. Only after login.
 $rootScope.isLoggedIn = false;

 $rootScope.$on('$stateChangeStart',
 function(event, toState, toParams, fromState, fromParams){
 if(toState.name == <myURL> && !$rootScope.isLoggedIn){
 event.preventDefault();

 }

 })

 }]);
 */
