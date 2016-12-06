// step 2: add a dependency on ui-router
angular.module('myApp', ['myApp.controllers', 'ui.router']);
// step 3: inject $stateProvider, $urlRouterProvider into the constructor function
angular.module('myApp').config(function ($locationProvider, $stateProvider, $urlRouterProvider) {
    // step 4: configure the states
    $stateProvider.state('view1', {
        url : '/view1',
        controller : 'Controller1',
        templateUrl : 'partials/view1.html'
    });
    $stateProvider.state('view2', {
        url : '/view2/:firstname/:lastname',
        controller : 'Controller2',
        templateUrl : 'partials/view2.html'
    });
     $stateProvider.state('view3', {
        url : '/view2',
        controller : 'Controller2',
        templateUrl : 'partials/view2.html'
    });
    
    // ... including a default state
    $urlRouterProvider.otherwise('view1');
  
    $locationProvider.html5Mode(true);
});