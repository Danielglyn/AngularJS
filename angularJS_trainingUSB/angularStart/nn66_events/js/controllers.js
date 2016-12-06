// this is controllers.js
angular.module('myApp.controllers', []); // could chain here
angular.module('myApp.controllers').controller('MessageController', function ($scope, $interval) {
    // declare a messages array in scope
    $scope.messages = [{
        sender: 'user1',
        text: 'hi from me'
    }];
    var timer;
    var count = 0;
    // start creating messages
    $scope.loadMessages = function () {
        count++;
        $scope.messages.push({
            sender: 'user1',
            text: 'message ' + count
        });
        // broadcast events
        if (count == 4) {
            $scope.$broadcast('EVENT_NO_DATA', 'Not connected: no more messages');
            $interval.cancel(timer);
        };
    };
    // create a timer
    timer = $interval($scope.loadMessages, 500); // declare here because of variable 'hoisting'
    // listen to events
    $scope.$on('EVENT_RECEIVED', function () {
        console.log('received emitted event');
    });
});

// another module
angular.module('myApp.controllers').controller('StatusController', function ($scope) {
        // declare some in-scope properties
        $scope.name = 'World';
        $scope.status = 'Connected';
        $scope.statusColor = 'green';
        // listen for events
        $scope.$on('EVENT_NO_DATA', function (event, data) {
            console.log('received broadcast event');
            $scope.status = data;
            $scope.statusColor = 'red';
            // emit an event
            $scope.$emit('EVENT_RECEIVED');
        });

});