// Load environment variables from .env file
require('dotenv').config();
// Import the Express framework and create an instance of it
const express = require('express');
const app = express();
const cors = require('cors');

const routes = require('./routes/api');
const port = process.env.PORT || 4000;
//enable all requests
app.use(cors());
// Middleware to parse incoming JSON data
app.use(express.json());
// Middleware to parse incoming URL-encoded data
app.use(express.urlencoded({ extended:true }));
// Define a route for the server 
app.use("/openai", routes);

// Start the server and log a message to the console
app.listen(port, () => {
    console.log(`Server running on port http://localhost:${port}!`);
});
