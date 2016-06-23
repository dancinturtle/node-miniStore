miniMeanStore.controller('DashController', function($scope, ProductFactory, CustomerFactory, OrderFactory){
  ProductFactory.index(function(data){
    $scope.products = data;
  })
  OrderFactory.index(function(data){
    $scope.orders = data;
  })
  CustomerFactory.index(function(data){
    $scope.customers = data;
    for(var i=0; i<$scope.customers.length; i++){
      var diff = $scope.mstohuman($scope.customers[i].createdAt);
      $scope.customers[i].timeHere = diff;
    }
  })

  $scope.mstohuman = function(date){
    var diff = new Date() - new Date(date);
    var hours = 0;
    var days = 0;
    var weeks = 0;
    var minutes = 0;
    diff = Math.floor(diff / 60000); //how many minutes ago
    while(diff >= 0){
      if(5 > diff && diff >= 0){
        minutes = "Less than 5";
        diff = -1;
      }
      if(60 > diff && diff >= 5){
        minutes = diff;
        diff=-1;
      }
      if(1440 > diff && diff >= 60){
          diff -= 60;
          hours ++;
      }
      if(10080 > diff && diff >= 1440){
        diff -= 1440;
        days ++;
      }
      if(diff >= 10080){
        diff -= 10080;
        weeks ++;
      }
    }
    return {weeks: weeks, days: days, hours: hours, minutes: minutes}
  }

  $scope.displayPicNum = 4;
}); //closes DashController
