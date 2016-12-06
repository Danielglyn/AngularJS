//++++++++++++++++++++++++++++ part 1 ++++++++++++++++++++++++++++++++
// as a service (with dependency on $timeout)...

//angular.module('myApp').controller('TestController', function(helloService){
//  helloService.sayHello('Bryn');
//});

//++++++++++++++++++++++++++++ part 2 ++++++++++++++++++++++++++++++++
// as a factory...
//angular.module('myApp').controller('TestController', function(helloFactory){
//  helloFactory.sayHello('Daniel');
//  helloFactory.echo('connected');
//});


//++++++++++++++++++++++++++++ part 3 ++++++++++++++++++++++++++++++++
// as a provider which exposes a 'greet' service
// configure the provider: get it injected
angular.module('myApp').config(function(greetProvider){
  greetProvider.setGreeting('Hola');
});
angular.module('myApp').controller('TestController', function(greet){
  greet('Daniel');
});