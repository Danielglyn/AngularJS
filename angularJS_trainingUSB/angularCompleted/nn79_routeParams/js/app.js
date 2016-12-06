'use strict';
angular.module('myApp', [
    'myApp.controllers',
    'ngRoute'
]);

angular.module('myApp').config(function ($routeProvider) {
    $routeProvider.when('/view1', {
        controller: 'Controller1',
        templateUrl: 'partials/view1.html'
    }).when('/view2/:firstname/:lastname', { // note: passing params
        controller: 'Controller2',
        templateUrl: 'partials/view2.html'
    });
});