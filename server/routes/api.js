// Import the Express framework and create a new router instance
const express = require('express');
const router = express.Router();

// Define a route for the router that sends a "Hello World" response
router.get("/images", (req, res) => {
    res.send("Hello World");
});

// Export the router module for use in other parts of the application
module.exports = router;

