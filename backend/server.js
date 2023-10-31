// ES module syntax is used to prevent frontend and backend being written differently from each other 

import express from 'express'; 
import products from './data/products.js'
const port = 5000;

const app = express(); 

// get the main page and show text 
app.get('/', (req, res) => {
  res.send('API is running...')
}); 

// establish get request from /api/products to return a response with the products in json format
app.get('/api/products', (req, res) => {
  res.json(products);
})

// get individual product pages
app.get('/api/products/:id', (req, res) => {
  const product = products.find((p) => p._id === req.params.id);
  res.json(product);
})

// initialize server
app.listen(port, () => console.log(`Server running on port ${port}`))

