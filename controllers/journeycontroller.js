const Journey = require('../models/journey'); // Adjust the path as needed

exports.createnewjourney = async (req, res) => {
    const { userId,name, fromLocation, toLocation, departureTime, date, numberOfPersons, phoneNumber } = req.body;
    // console.log(date);
    const journeyData = {
        userId,
        name,
        fromLocation,
        toLocation,
        departureTime,
        date: date,
        numberOfPersons: Number(numberOfPersons),
        phoneNumber,
    };
    try {
        const newJourney = new Journey(journeyData);
        await newJourney.save();
        res.status(201).json(newJourney);
    } catch (error) {
        console.error('Error saving journey:', error);
        res.status(400).json({ error: error.message });
    }
};

exports.getJourneysByDate = async (req, res) => {
    const { date } = req.params;
    // console.log(`Get journey by date called: ${date}`);
    try {
        const journeys = await Journey.find({ date }); 
        res.status(200).json(journeys);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};
