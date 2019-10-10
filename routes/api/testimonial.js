var express = require('express');
var router = express.Router();
var testimonialsCtrl = require('../../controllers/api/testimonials');

/* GET /api/puppies */
router.get('/', testimonialsCtrl.index);
router.get('/:id', testimonialsCtrl.show);
router.post('/', testimonialsCtrl.create);
router.delete('/:id', testimonialsCtrl.delete);
router.put('/:id', testimonialsCtrl.update);

module.exports = router;
