# Proshop
## https://proshop-ue78.onrender.com/

Proshop is a website that has full featured shopping cart with Paypal & debit/credit card payments. 
I used for the frontend HTML, CSS, Javascript, and React Bootstrap to create its components and Redux for state management. MongoDB, Mongoose.js, Node.js, and Express.js were used to create the backend. 
Challenges that I faced were learning Redux for the very first time and applying my critical thinking skills to fixing bugs. 

### To install this project, run:

npm install
cd frontend
npm install 

### Create your own MongoDB database and obtain your own MongoDB URI & create or log in to your PayPal account and obtain your Client ID. You'll need to place them in your environment variables. 

Rename the .env.example file to .env and add the following:

NODE_ENV = development
PORT = 5000
MONGO_URI = your mongodb uri
JWT_SECRET = 'abc123'
PAYPAL_CLIENT_ID = your paypal client id
PAGINATION_LIMIT = 8
Change the JWT_SECRET and PAGINATION_LIMIT to what you want

To run frontend and backend concurrently, use 'npm run dev'
To run backend run 'npm run server'

### To Build and Deploy, run: 
cd frontend
npm run build 

### To Seed Database, you can use the following commands 
npm run data:import // this will import data 
npm run data:destroy // this will destroy data 

## Sample Snippets 

### Snippet of Admin Home Page (logged in) 
![image](https://github.com/user-attachments/assets/1bde709f-d202-4417-9e7d-13c5017b4cba)

### Snippet of Home Page (not logged in as admin) 
![image](https://github.com/user-attachments/assets/0893cec2-35b2-4f07-a49f-9e24e8d7be79)

### Snippet of Login Page 
![image](https://github.com/user-attachments/assets/5dff3b47-bec1-44c2-adc5-3a960293cf7d)




