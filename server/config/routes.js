var customers = require('../controllers/customers.js');
var orders = require('../controllers/orders.js');
var products = require('../controllers/products.js');
module.exports = function(app){

  app.get('/customers', function(req, res){

  	customers.index(req, res)
  });

  app.delete('/customers/:id', function(req, res){

    customers.delete(req.params.id, res);
  })

  app.post('/addcustomers', function(req, res){
    customers.create(req, res);
  })
  app.get('/orders', function(req, res){
    orders.index(req, res)
  })
  app.post('/placeorders', function(req, res){
    orders.create(req, res);
  })
  app.get('/products', function(req, res){
    products.index(req, res);
  })
  app.post('/createproduct', function(req, res){
    products.create(req, res);
  })
  app.put('/updateProduct/:id', function(req, res){
    var id=req.params.id;
    products.update(id, req, res);
  })


} //closes module.exports
