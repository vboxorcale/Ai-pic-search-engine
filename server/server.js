// Import the Express framework and create an instance of it
const express = require('express');
const app = express();
// Load environment variables using the dotenv module and set the server port
require('dotenv').config();
const routes = require('./routes/api');
const port = process.env.PORT || 4000;

// Define a route for the server 
app.use("/openai", routes);

// Start the server and log a message to the console
app.listen(port, () => {
    console.log(`Server running on port http://localhost:${port}!`);
});
