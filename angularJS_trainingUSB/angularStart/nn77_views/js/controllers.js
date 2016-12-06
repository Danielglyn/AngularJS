'use strict';
angular.module('myApp.controllers', []).controller('Controller1', function ($scope, $location) {
    $scope.message = "Hello, world";
    // write the method which appends URL parameters to the route
    $scope.loadView2 = function(){
        $location.path('/view2/' + $scope.firstname + '/' + $scope.lastname );
    };
    
}).controller('Controller2', function ($scope, $routeParams) {
    $scope.now = new Date();
    // read parameters from the URI and add them to this scope
    $scope.firstname = $routeParams.firstname;
    $scope.lastname  = $routeParams.lastname;
});