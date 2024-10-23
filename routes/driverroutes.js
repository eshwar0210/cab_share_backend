const express = require('express');
const drivercontroller = require('../controllers/drivercontroller.js');
const router = express.Router();
router.get('/',drivercontroller.getAllUsers);
module.exports = router;