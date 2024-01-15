var express = require('express');
var router = express.Router();
// const [productsList] = require('../constants/const')
const {productsList} = require('../constants/const')
const ProductsController = require('../controller/ProductController')

/* GET all products listing. */
// http://localhost:4000/products/all
router.get('/all', ProductsController.getAllProducts);

router.post('/save',ProductsController.saveProduct);

router.get('/find/:id',ProductsController.getProduct);

router.put('/update/:id',ProductsController.updateProduct);

router.delete('/delete/:id',ProductsController.deleteProduct);

module.exports = router;
