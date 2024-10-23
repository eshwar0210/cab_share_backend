const Journey = require('../models/journey'); // Adjust the path as needed

exports.createnewjourney = async (req, res) => {
    // console.log("create journey called");
    // console.log(req.body);

    const { userId, fromLocation, toLocation, departureTime, date, numberOfPersons, phoneNumber } = req.body;

    
    const journeyData = {
        userId,
        fromLocation,
        toLocation,
        departureTime,
        date: new Date(date), // Convert string to Date object
        numberOfPersons: Number(numberOfPersons), // Convert to a number
        phoneNumber,
    };

    try {
        const newJourney = new Journey(journeyData);
        // console.log(newJourney);
        await newJourney.save();
        res.status(201).json(newJourney);
    } catch (error) {
        console.error('Error saving journey:', error);
        res.status(400).json({ error: error.message });
    }
};
