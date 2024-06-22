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

// @description   Create a new product
// @route         POST /api/products/
// @access        Private/Admin
const createProduct = asyncHandler(async (req, res) => {
  const product = new Product({
    name: 'Sample name', 
    price: 0, 
    user: req.user._id, 
    image: '/images/sample.jpg', 
    brand: 'Sample brand',
    category: 'Sample category', 
    countInStock: 0, 
    numReviews: 0, 
    description: 'sample description'
  })

  const createdProduct = await product.save(); 
  res.status(201).json(createdProduct);
});

// @description   Update a product
// @route         POST /api/products/:id
// @access        Private/Admin
const updateProduct = asyncHandler(async (req, res) => {
  const { name, price, description, image, brand, category, countInStock } = req.body; 

  const product = await Product.findById(req.params.id); 

  if (product) {
    product.name = name; 
    product.price = price; 
    product.description = description; 
    product.image = image; 
    product.brand = brand; 
    product.category = category; 
    product.countInStock = countInStock; 
  }

  const updatedProduct = await product.save(); 
  res.json(updatedProduct)
});

// @description   Update a product
// @route         POST /api/products/:id
// @access        Private/Admin
const deleteProduct = asyncHandler(async (req, res) => {
  const product = await Product.findById(req.params.id); 

  if (product) {
    await Product.deleteOne({_id: product._id});
    res.status(200).json({message:'Product deleted'})
  } else {
    res.status(404); 
    throw new Error('Resource not found');
  }
});


export { getProducts, getProductById, createProduct, updateProduct, deleteProduct }