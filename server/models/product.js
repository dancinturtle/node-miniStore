var mongoose = require('mongoose');
var ProductSchema = new mongoose.Schema({
	name: {type: String, required: true, minlength:1},
  url: {type: String, required: true, minlength: 20},
  description: {type: String, required: true, minlength: 5},
  quantity: {type: Number, required: true, min: 0}
	}, {timestamps: true })

var Product = mongoose.model('Product', ProductSchema);
