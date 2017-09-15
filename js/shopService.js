angular.module('assessment').service('shopService', function($http){
  self = this
  this.getProducts = function(){
    return $http.get('https://practiceapi.devmountain.com/products').then(function(response){
      self.products = response.data
    })
  }
})
