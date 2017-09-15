angular.module('assessment').controller('productDetailsCtrl', function($scope, $stateParams, shopService){
  $scope.product = shopService.products.filter(function(x){return x.id == $stateParams.id})[0];
})
