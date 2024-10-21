const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const { verifyFirebaseConnection } = require('./firebase');

const dotenv = require('dotenv');
const multer = require('multer');

const storage = multer.memoryStorage();
const upload = multer({ storage: storage });

const path = require('path');

dotenv.config();
const app = express();
const PORT = process.env.PORT || 5000;


// firebase
verifyFirebaseConnection();


// Middleware
app.use(cors());
app.use(express.json());


mongoose.connect(process.env.MONGODB_URI)
    .then(() => console.log('MongoDB connected'))
    .catch(err => console.log(err));

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
