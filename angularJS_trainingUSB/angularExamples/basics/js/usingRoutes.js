var tempApp = angular.module('tempApp', []).
config(['$routeProvider', function($routeProvider) {
$routeProvider.when('/current', {templateUrl: 'partials/current.html', controller: 'CurrentCtrl'});
$routeProvider.when('/history', {templateUrl: 'partials/history.html', controller: 'HistoryCtrl'});
$routeProvider.otherwise({redirectTo: '/current'});
}]);
// the controllers would typically be in separate script files
tempApp.controller('CurrentCtrl', ['$scope', function($scope) {$scope.temp = 17;}]);
tempApp.controller('HistoryCtrl', ['$scope',
function($scope) {
$scope.historyData = [
{ day: 'saturday', temp: 8},
{ day: 'sunday', temp: 13},
{ day: 'monday',temp: 15},
{ day: 'tuesday', temp: 11},
{ day: 'wednesday',temp: 15},
{ day: 'thursday',temp: 17},
{ day: 'friday',temp: 21}
]
$scope.tempMin = 15;
}]);
// filters
tempApp.filter('minimum', [ function() {
    return function(arrTemp, minimum) {
        var arrReturn = new Array();
        var min = minimum ? minimum : 15;
        angular.forEach(arrTemp, function(value, key){
            if(value.temp>=min) arrReturn.push(value);
        });
        return arrReturn;
    }
}]);