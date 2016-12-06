'use strict';
angular.module('myApp', [
    'myApp.controllers',
    'ngRoute'
]);
/* normal version (hashbang mode) */
angular.module('myApp').config(function($routeProvider){
    $routeProvider.when('/view1', {
        controller : 'Controller1',
        templateUrl : 'partials/view1.html'
    });
     $routeProvider.when('/view2', {
        controller : 'Controller2',
        templateUrl : 'partials/view2.html'
    });
     $routeProvider.when('/view2/:firstname/:lastname', {
        controller : 'Controller2',
        templateUrl : 'partials/view2.html'
    });
});


