const router = require('express').Router();

router.get('/products', (req, res) => {
    res.render('products/all-products');
});

router.post('/products/new-product', async(req, res) => {

});

module.exports = router;