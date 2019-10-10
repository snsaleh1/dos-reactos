const Testimonials = require('../../models.testimonials');

module.exports = {
    
};

async function index(req,res) {
    const testimonials = await Testimonials.find({});
    res.status(200).json(testimonials);
}
async function show(req,res) {
    const testimonials = await Testimonial.findById(req.params.id);
    res.status(200).json(testimonial);
}
async function create(req,res) {
    const testimonials = await Testimonial.create(req.body);
    res.status(200).json(testimonial);
}
async function deleteOne(req,res) {
    const deletedTestimonial = await Testimonial.findByIdAndRemove(req.params.id);
    res.status(200).json(deleteTestimonial);
}
async function update(req,res) {
    const updateTestimonial = await Testimonial.findByIdAndUpdate(req.params.id, {new: true});
    res.status(200).json(updatedTestimonial);
}