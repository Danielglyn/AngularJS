angular.module('myApp',[]).controller('TimeoutController', function($scope) {
    $scope.scheduleTask = function() {
        setTimeout(function() {
             //$scope.$apply(function() { // wrapped the code in $apply()
                $scope.message = 'Fetched after 3 seconds';
                console.log('message='+$scope.message); //log this to console
             //}); // end of $apply
        }, 3000);
    }
});

// alternative, using built-in $timeout service
/*angular.module('myApp',[]).controller('TimeoutController', function($scope, $timeout){
    $scope.scheduleTask = function() {
        $timeout(function() {
            $scope.message = 'Fetched after 3 seconds'; //just update. No need for $apply
            console.log('message=' + $scope.message);
        }, 3000);
    }
});*/