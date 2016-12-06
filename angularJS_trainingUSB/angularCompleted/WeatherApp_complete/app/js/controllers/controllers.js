// this is the weather controller
angular.module('mainApp').controller('WeatherController', 
function($scope, weatherService){
    $scope.getWeather = function() { // set the getWeather method on scope 
    // call the getWeather method
    $scope.weatherDescription = 'coming soon....';
    weatherService
        .getWeather($scope.city, $scope.country)
        .success(function(data){
            $scope.weatherDescription = data.weather[0].description;
        })
        .error(function(){
            $scope.weatherDescription = "Error - cannot obtain weather";
        });
    } // ... and closing bracket
});





