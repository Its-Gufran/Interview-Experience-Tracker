const express = require('express');
const { registerController, loginController, forgotPasswordController, updateProfileController } = require('../controllers/authController.js');

// Create router object
const router = express.Router();

// Define routes
router.post('/register', registerController);
router.post('/login', loginController);
router.post('/forgot-password', forgotPasswordController);
router.post('/update-profile', updateProfileController);

module.exports = router;
