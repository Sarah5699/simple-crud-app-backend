const express = require('express');
const router = express.Router();
const { getProdocts, getProduct, createProduct, updateProduct, deleteProduct } = require('../Controllers/product.controller.js')
router.get('/', getProdocts);
router.get('/:id', getProduct);
router.post('/:id', createProduct);
router.put('/:id', updateProduct);
router.delete('/:id', deleteProduct);
module.exports = router;