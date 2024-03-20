// ES module syntax is used to prevent frontend and backend being written differently from each other 

import express from 'express'; 
import dotenv from 'dotenv';
import cookieParser from 'cookie-parser'
dotenv.config();
import connectDB from './config/db.js';
import { notFound, errorHandler } from './middleware/errorMiddleware.js';
const port = process.env.PORT || 5000;
import productRoutes from './routes/productRoutes.js';
import userRoutes from './routes/userRoutes.js'

connectDB(); // Connect DB

const app = express(); 

// body parser middleware 
app.use(express.json()); 
app.use(express.urlencoded({ extended: true }));

// cookie parser middleware
app.use(cookieParser()); 

// get the main page and show text 
app.get('/', (req, res) => {
  console.log(req.body)
  res.send('API is running...')
}); 

app.use('/api/products', productRoutes);
app.use('/api/users', userRoutes)

app.use(notFound);
app.use(errorHandler)

// initialize server
app.listen(port, () => console.log(`Server running on port ${port}`))

