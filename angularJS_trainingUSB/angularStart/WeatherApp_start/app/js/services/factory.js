// this is the weather factory

angular.module('myApp').factory('weatherService', function($http){
  return {
    
    getWeather: function(city, country){
      return $http.get('http://api.openweathermap.org/data/2.5/weather?q=' + city + ',' + country +                                              '&APPID=48f2d5e18b0d2bc50519b58cce6409f1'); 
    }
  }

});