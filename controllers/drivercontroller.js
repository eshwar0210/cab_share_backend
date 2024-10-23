const Driver = require('../models/driver.js'); // Adjust the path as necessary

// Function to get all users
exports.getAllUsers = async (req, res) => {

    // console.log("Requested get all drivers");
  try {
    const drivers = await Driver.find(); // Fetch all drivers from the database
    res.status(200).json(drivers); // Send the drivers as a JSON response
  } catch (error) {
    console.error(error); // Log the error for debugging
    res.status(500).json({ message: 'Server Error', error: error.message }); // Send an error response
  }
};
