import express from 'express';
const router = express.Router(); 
import asyncHandler from '../middleware/asyncHandler.js';
import Product from '../models/productModel.js';

// establish get request from /api/products to return a response with the products in json format
router.get('', asyncHandler(async (req, res) => {
  const products = await Product.find({});
  res.json(products);
}))

// get individual product pages
router.get('/:id', asyncHandler(async (req, res) => {
  // const product = products.find((p) => p._id === req.params.id);
  const product = await Product.findById(req.params.id);
  if(product) {
    return res.json(product);
  } 
  res.status(404).json({ message: 'Product not found'})
}))

export default router;