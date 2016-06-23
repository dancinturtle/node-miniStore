miniMeanStore.factory('CustomerFactory', function($http){
  var factory = {};
  var customers = [];

  factory.index = function(callback){
    $http.get('/customers').success(function(res){
      customers = res;
      for(var i=0; i<customers.length; i++){
        var date = new Date(customers[i].createdAt);
        customers[i].createdAt = date.toString();
      }

      callback(customers);
    })
  }//closes index
  factory.delete = function(id, callback){

    $http.delete('/customers/'+id).success(function(res){
      callback(res.message);
    })
  }
  factory.create = function(newcustomer, callback){
    $http.post('/addcustomers', newcustomer).success(function(res){
      callback(res.message);
    })
  }
//
//
  return factory;
})//closes CustomerFactory
