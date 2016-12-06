// this is the weather controller
angular.module('myApp').controller('WeatherController', function($scope, weatherService){
  
  $scope.getWeather = function() {
    $scope.weatherDescription = 'Checking';
    weatherService.getWeather($scope.city, $scope.country)
    .success(function(data){
      $scope.weatherDescription = data.weather[0].description;
      $scope.weatherTemp = data.main.temp;
      $scope.weatherLat= data.coord.lat;
      $scope.weatherLong = data.coord.lon;
    })
    .error(function(){
      $scope.weatherDescription = "Error - cannot obtain weather";
    });
  };
});