// Import the Express framework and create a new router instance
const express = require('express');
const { genImage } = require('../controllers/openAiControllers');
// Create a new router instance with the Express framework
const router = express.Router();

// Define a route for the router 
router.post("/images", genImage);

// Export the router module for use in other parts of the application
module.exports = router;

