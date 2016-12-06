// this is the weather factory
angular.module('mainApp').factory('weatherService', function($http){
    return {
        getWeather : function(city, country){
            // construct a query string for the URI
            var query = 'q=' + city + ',' + country;
            // make a call to the remote service
            return $http.get('http://api.openweathermap.org/data/2.5/weather?' + query + '&APPID=48f2d5e18b0d2bc50519b58cce6409f1', {cache:true} );
        }
    }
});








