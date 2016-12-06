angular.module('myApp',[]).controller('GreetingController',function($scope){
    $scope.now=new Date(); //set the model 'now' on scope
    $scope.greeting='Hello'; //set the name model on scope
});

// same thing but with $scope function
/*angular.module('myApp', []).controller('GreetingController', function($scope) {
    $scope.now = new Date();
    $scope.helloMessages = ['Hello', 'Bonjour', 'Hola', 'Ciao', 'Hallo'];
    $scope.greeting = $scope.helloMessages[0];
    $scope.getRandomHelloMessage = function() {
        $scope.greeting = $scope.helloMessages[parseInt((Math.random() * $scope.helloMessages.length))];
    }
});*/

// same again, but with dependencies as an array (to avoid minifaction problems)
/*angular.module('myApp', []).controller('GreetingController',['$rootScope','$scope','$http',function($rootScope,$scope,$http) { // lots of dependencies, just 'cos we can
    $scope.now = new Date();
    $scope.helloMessages = ['Hello', 'Bonjour', 'Hola', 'Ciao', 'Hallo'];
    $scope.greeting = $scope.helloMessages[0];
    $scope.getRandomHelloMessage = function() {
        $scope.greeting = $scope.helloMessages[parseInt((Math.random() * $scope.helloMessages.length))];
    }
}]); // nb closing array (square-bracket)*/