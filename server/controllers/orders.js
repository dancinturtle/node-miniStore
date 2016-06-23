var mongoose = require('mongoose');
var Order = mongoose.model('Order');
module.exports = (function(){
  return {

  index: function(req,res){
  	Order.find({}, function(err, orders){
      if(err){
        res.json(err)
      }
      else {
      res.json(orders);
      }
  	});
  },//closes index
  create: function(req, res){
    console.log("Luke's", req.body.product);
    var order = new Order({
      name: req.body.name,
      product: req.body.product,
      quantity: req.body.quantity
                });
    order.save(function(err){
      if(err){
        res.json(err);
      }
      else {
        res.json({message: "Successfully added "+ req.body.name + "'s order"});
      }
    })
  },//closes create

  delete: function(req, res){
    Order.remove({_id: req}, function(err){
  		if(err){
  			res.json(err);
  		}
  		else {
  			res.json({message: "Successfully deleted."});
  		}
  	});
  } //closes delete

}//closes return
})();//closes module.exports
