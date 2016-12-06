// controller
angular.module('mainApp').controller('WeatherController', function($scope, weatherService) {
  $scope.getWeather = function() {
    $scope.weatherDescription = "Fetching . . .";
    weatherService.getWeather($scope.city).success(function(data) {
      $scope.weatherDescription = data.weather[0].description;
        console.log(data);
    }).error(function() {
      $scope.weatherDescription = "Could not obtain data";
    });
  }
});