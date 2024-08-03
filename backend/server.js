// ES module syntax is used to prevent frontend and backend being written differently from each other 
import path from 'path'; 
import express from 'express'; 
import dotenv from 'dotenv';
import cookieParser from 'cookie-parser'
dotenv.config();
import connectDB from './config/db.js';
import { notFound, errorHandler } from './middleware/errorMiddleware.js';
const port = process.env.PORT || 5000;
import productRoutes from './routes/productRoutes.js';
import userRoutes from './routes/userRoutes.js'
import orderRoutes from './routes/orderRoutes.js'
import uploadRoutes from './routes/uploadRoutes.js'

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

app.use('/api/products', productRoutes)
app.use('/api/users', userRoutes)
app.use('/api/orders', orderRoutes)
app.use('/api/upload', uploadRoutes)

app.get('/api/config/paypal', (req, res) => res.send({clientId: process.env.PAYPAL_CLIENT_ID}))

const __dirname = path.resolve() //set _dirname to current directory 
app.use('/uploads', express.static(path.join(__dirname, '/uploads')))

app.use(notFound);
app.use(errorHandler)

// initialize server
app.listen(port, () => console.log(`Server running on port ${port}`))

