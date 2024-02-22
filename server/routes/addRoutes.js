const express = require('express');
const { postController } = require('../controllers/postController.js');

// Create router object
const router = express.Router();

// Define routes
router.post('/add-post', postController);

module.exports = router;
