miniMeanStore.controller('CustomersController', function($scope, CustomerFactory){

  CustomerFactory.index(function(data){
    $scope.customers = data;
    for(var i=0; i<$scope.customers.length; i++){
      var date = new Date($scope.customers[i].createdAt);
      $scope.customers[i].createdAt = date.toDateString();
    }
  })
  $scope.removeCustomer = function(customer){

    $scope.message = false;
    CustomerFactory.delete(customer._id, function(data){
      $scope.message = data;
    });
    CustomerFactory.index(function(data){
      $scope.customers = data;
      for(var i=0; i<$scope.customers.length; i++){
        var date = new Date($scope.customers[i].createdAt);
        $scope.customers[i].createdAt = date.toDateString();
      }
    })
  }
  $scope.addCustomer = function(){
    $scope.message = false;
    CustomerFactory.create($scope.newCustomer, function(data){
      $scope.message = data;
    });
    CustomerFactory.index(function(data){
      $scope.customers = data;
      for(var i=0; i<$scope.customers.length; i++){
        var date = new Date($scope.customers[i].createdAt);
        $scope.customers[i].createdAt = date.toDateString();
      }


    })
    $scope.newCustomer = {};
  }

})//closes CustomersController
