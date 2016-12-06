//++++++++++++++++++++++++++++ part 1 ++++++++++++++++++++++++++++++++
// as a service (with dependency on $timeout)...
//angular.module('myApp').service('helloService', function($timeout, $http){
//  this.sayHello = function(name){
//    $timeout(function(){
//      3alert('Hello' + name);
//    }, 2000);
//  };
//});



//++++++++++++++++++++++++++++ part 2 ++++++++++++++++++++++++++++++++
// as a factory...
//angular.module('myApp').factory('helloFactory', function(){
//  return { sayHello : function(name){
//    alert('Helllo ' + name);
//  
//          },
//          echo : function(dataTerm){
//            alert('dataTerm is: ' + dataTerm);
//          }
//         
// };
//});


//++++++++++++++++++++++++++++ part 3 ++++++++++++++++++++++++++++++++
// as a provider which exposes a 'greet' service
angular.module('myApp').provider('greet', function(){
  this.greeting = 'Hello';
  this.$get = function(){
    var greeting = this.greeting;
    return function(name){
      alert(greeting + " " + name);
    }
  };
  this.setGreeting = function(newGreeting){
    this.greeting = newGreeting;
  };
});





/*
// Anciliary example: a factory containing functions and dependency on $http
angular.module('myApp').factory('noteFactory', function ($http) {
    return {
        addNote: function (note) {
            // save the note, maybe use $http to persist on server
        },
        updateNote: function (note) {
            //update note
        },
        getNotes: function () {
            //get all notes
        },
        getNote: function (noteId) {
            //get a single note
        }
    }
});
*/