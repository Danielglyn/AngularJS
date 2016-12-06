angular.module('myApp.controllers', []).controller('ShoppingController', ['$scope','$http',function ($scope, $http) {
    var rev = $http.get('products.json');
    rev.success(function (data) {
        $scope.items = data;
        $scope.cart = [];
    });
    rev.error(function (error) {
        console.log(error);
    });
     $scope.buy = function(index){
        $scope.cart.push(index);
     };
}]);