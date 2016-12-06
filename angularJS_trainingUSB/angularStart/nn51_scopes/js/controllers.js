angular.module('myApp.controllers', []).controller('SiteController', function ($scope) {
    $scope.publisher = 'SitePoint';
    $scope.type = "Web Development";
    $scope.name = "Scope for SiteController";
    // step 4: watch the digest cycles
    $scope.$watch(function(){
        // here we could respond to the digest cycle
        console.log('within a digest cycle');
        return;
    });
    //
});
angular.module('myApp.controllers').controller('BookController', function ($scope) {
    $scope.books = ['Jump Start HTML5', 'Jump Start CSS', 'Jump Start Responsive Web Design'];
    $scope.name = "Scope for BookController";
    $scope.wishListCount = 0;
    // step 3: add a call-back, a wishListCount model and a $watch
    $scope.addToWishList = function(book){
        $scope.wishListCount++;
    };
    // watch the wishListCount
    $scope.$watch('wishListCount', function(newVal, oldVal){
        
        // has it changed?
        // respond when count reaches 2
        if(newVal == 2){
            // show in console
            console.log(newVal, oldVal);
            alert('great - two books earn a discount');
            
        }
       
            
      
    
    });  // end of $watch
       
});