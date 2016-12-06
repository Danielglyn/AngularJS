angular.module('myApp.controllers', []).controller('Controller1', function ($scope, $location, $state) {
    $scope.loadView2 = function () {
        // the following activates state view2
        $state.go('view2', {
            firstname: $scope.firstname,
            lastname: $scope.lastname
        });
    }
});

angular.module('myApp.controllers').controller('Controller2', function ($scope, $stateParams) {
    $scope.firstname = $stateParams.firstname;
    $scope.lastname = $stateParams.lastname;
});