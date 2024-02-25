const express = require('express');
const { editController, postController } = require('../controllers/postController.js');

// Create router object
const router = express.Router();

// Define routes
router.post('/add-post', postController);
router.post('/edit-post', editController);

module.exports = router;
