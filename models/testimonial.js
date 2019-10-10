var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var testimonialSchema = new Schema({
  name: {type: String, required: true},
  relationship: {type: String, default: 'friend, supervisor, etc'},
  tesType: {type: String, required: true},
  yearsKnown: {type: Number, default: 0},
  quote: {type: String, required: true}
}, {
  timestamps: true
});

module.exports = mongoose.model('Testimonial', testimonialSchema);