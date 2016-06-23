var mongoose = require('mongoose');
var CustomerSchema = new mongoose.Schema({
	name: {type: String, required: true, minlength:[3, 'Your name is too short'], unique:true}
	}, {timestamps: true })

var Customer = mongoose.model('Customer', CustomerSchema);
