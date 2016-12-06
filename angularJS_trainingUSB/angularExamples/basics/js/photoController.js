var photoApp = angular.module('photoApp', []);
// controller (a constructor function taking a $scope parameter)
photoApp.controller('PhotoListCtrl', function ($scope) {
    // data model
    $scope.photos = [
        {
            'filename': 'nature18',
            'desc': 'Crab apple trees in bloom.'
        },
        {
            'filename': 'animals03',
            'desc': 'Chubby donkey looking for a friend.'
        },
        {
            'filename': 'people08',
            'desc': 'Tulle veil with pearl accents.'
        }
  ];
    $scope.remove = function(index){
            $scope.photos.splice(index, 1);
        };
});