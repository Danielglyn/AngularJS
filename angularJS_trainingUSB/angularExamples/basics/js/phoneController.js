var phonecatApp = angular.module('phonecatApp', []);
// controller (a constructor function taking a $scope parameter)
phonecatApp.controller('PhoneListCtrl', function ($scope) {
    // data model
    $scope.phones = [
        {
            'name': 'Nexus S',
            'snippet': 'Fast just got faster with Nexus S.'
        },
        {
            'name': 'Motorola XOOM™ with Wi-Fi',
            'snippet': 'The Next, Next Generation tablet.'
        },
        {
            'name': 'MOTOROLA XOOM™',
            'snippet': 'The Next, Next Generation tablet.'
        }
  ];
});