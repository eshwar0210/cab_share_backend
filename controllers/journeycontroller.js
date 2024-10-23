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

exports.getJourneysByUid = async(req,res) =>{

    const {userId} = req.params;

    try{

        const journeys = await Journey.find({uid : userId});
        res.status(200).json(journeys);
    }
    catch(err){
        console.log(err);
        res.status(400).json({error : err.message});
    }
};


exports.editJourney = async (req, res) => {
    const journeyId = req.params.id; // Get the journey ID from the URL
    const updatedData = req.body; // Get the updated data from the request body

    try {
        // Find the journey by ID and update it with the new data
        const journey = await Journey.findByIdAndUpdate(journeyId, updatedData, {
            new: true, // Return the updated document
            runValidators: true // Validate the new data against the model's schema
        });

        if (!journey) {
            return res.status(404).json({ message: 'Journey not found' });
        }

        return res.status(200).json({ message: 'Journey updated successfully', journey });
    } catch (error) {
        console.error('Error updating journey:', error);
        return res.status(500).json({ message: 'Server error', error: error.message });
    }
};

exports.deleteJourney = async (req, res) => {
    const journeyId = req.params.id; // Get the journey ID from the URL

    try {
        // Find the journey by ID and delete it
        const journey = await Journey.findByIdAndDelete(journeyId);

        if (!journey) {
            return res.status(404).json({ message: 'Journey not found' });
        }

        return res.status(200).json({ message: 'Journey deleted successfully' });
    } catch (error) {
        console.error('Error deleting journey:', error);
        return res.status(500).json({ message: 'Server error', error: error.message });
    }
};