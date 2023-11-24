// ES module syntax is used to prevent frontend and backend being written differently from each other 

import express from 'express'; 
import dotenv from 'dotenv';
dotenv.config();
import connectDB from './config/db.js'
const port = process.env.PORT || 5000;
import productRoutes from './routes/productRoutes.js'

connectDB(); // Connect DB

const app = express(); 

// get the main page and show text 
app.get('/', (req, res) => {
  res.send('API is running...')
}); 

app.use('/api/products', productRoutes);

// initialize server
app.listen(port, () => console.log(`Server running on port ${port}`))

