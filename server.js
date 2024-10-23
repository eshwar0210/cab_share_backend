const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const { verifyFirebaseConnection } = require('./firebase');

const dotenv = require('dotenv');
const multer = require('multer');

const storage = multer.memoryStorage();
const upload = multer({ storage: storage });

const path = require('path');

const authRoutes = require('./routes/authroutes.js'); 
const driverRoutes = require('./routes/driverroutes.js');
const journeyRoutes = require('./routes/journeyroutes.js');

dotenv.config();
const app = express();
const PORT = process.env.PORT || 5000;


// firebase
verifyFirebaseConnection();


// Middleware
app.use(cors());
app.use(express.json());

app.use('/auth', authRoutes);
app.use('/driver',driverRoutes);
app.use('/journey',journeyRoutes);

app.use(express.static(path.join(__dirname, 'build')));

app.get('/*', function (req, res) {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
})


mongoose.connect(process.env.MONGODB_URI)
    .then(() => console.log('MongoDB connected'))
    .catch(err => console.log(err));

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
