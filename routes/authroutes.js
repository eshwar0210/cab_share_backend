const express = require('express');
const authController = require('../controllers/authcontroller.js'); // Import the entire controller
const router = express.Router();
const multer = require('multer');

// Set up multer for handling file uploads
const storage = multer.memoryStorage(); // Use memory storage for the sake of simplicity
const upload = multer({ storage });


router.post('/register', upload.single('profilePhoto') ,authController.registerUser); 
router.get('/user/:id',authController.getUser);
router.delete('/user/:uid/profile-picture', authController.removeProfilePicture);
router.put('/user/:uid/profile-picture', upload.single('profilePhoto'), authController.updateProfilePicture);
module.exports = router;