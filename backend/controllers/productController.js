// get products and get products by id 
import asyncHandler from '../middleware/asyncHandler.js';
import Product from '../models/productModel.js';

// @description   Fetch all products
// @route         GET /api/products
// @access        Public
// establish get request from /api/products to return a response with the products in json format
const getProducts = asyncHandler(async (req, res) => {
  const products = await Product.find({});
  res.json(products);
});

// @description   Fetch a product
// @route         GET /api/products/:id
// @access        Public
const getProductById = asyncHandler(async (req, res) => {
  const product = await Product.findById(req.params.id);
  if(product) {
    return res.json(product);
  } 
  res.status(404);
  throw new Error('Resource not found');
});

export { getProducts, getProductById }