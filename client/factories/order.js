miniMeanStore.factory('OrderFactory', function($http){
  var factory = {};
  var orders = [];
  factory.index = function(callback){
    $http.get('/orders').success(function(res){
      orders = res;
      for(var i=0; i<orders.length; i++){
        var date = new Date(orders[i].createdAt);
        orders[i].createdAt = date.toString();
      }
      callback(orders);
    })
  }//closes index
  factory.create = function(newOrder, callback){
    console.log("ORDERS FACTORY", newOrder);
    $http.post('/placeorders', newOrder).success(function(res){
      console.log("CREATE ORDER RESULT", res);
      callback(res.message);
    })
  }//closes create
  return factory;
}) // closes OrderFactory
