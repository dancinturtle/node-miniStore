miniMeanStore.controller('ProductsController', function($scope, ProductFactory){

  ProductFactory.index(function(data){
    $scope.products = data;
  })



  $scope.message = false;
  $scope.initialQuantity = [];
  for(var i=1; i<=200; i++){
    $scope.initialQuantity.push(i);
  }

  $scope.addProduct = function(){
    $scope.message = false;
    ProductFactory.create($scope.newProduct, function(data){
      $scope.message = data;
    })
    $scope.newProduct = {};
    ProductFactory.index(function(data){
      $scope.products = data;
    })
  }
}); //closes productsController
