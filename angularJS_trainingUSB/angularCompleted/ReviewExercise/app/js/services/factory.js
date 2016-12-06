// factory
angular.module('mainApp').factory('weatherService', function($http) {
  return {
    getWeather: function(city) {
      var query = city;
      return $http.get('http://api.openweathermap.org/data/2.5/weather?q=' + query,{cache:true});
    }
  }
});