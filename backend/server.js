//Required external packages
require('dotenv').config();
const express = require("express");
const app = express();
const mongoose = require('mongoose');
const cookieParser = require('cookie-parser');
const cors = require('cors');

// Used to verify a logged In User
const verifyJWT = require('./middleware/verifyJWT');
// Used to restore Leaves at end of Academic Year
const restoreLeaves = require('./utils/restoreLeaves');
const initializeLMS = require('./utils/intializeLMS');
// Configuration Details
const PORT = process.env.PORT || 3000;
const connectDB = require("./config/connectDB");
connectDB();

//Necessary External Middlewares
app.use(cors()); // To allow Browsers to access our server
app.use(express.json());
app.use(cookieParser());

// Authentication Routes
app.use('/register',require('./routes/register'));
app.use('/login',require('./routes/login'));
app.use('/logout',require('./routes/logout'));
// Verification of Logged in user
app.use(verifyJWT);
// Routes
app.use('/leave',require('./routes/leave'));
app.use('/faculty',require('./routes/faculty'));
app.use('/changePassword',require('./routes/changePassword'));
app.use('/config',require('./routes/config'));

// Running Servers
mongoose.connection.once('open', () => {
    console.log('Connected to MongoDB');
    app.listen(PORT, async () => {
        console.log(`Server running on port ${PORT}`);
        initializeLMS()

        // await restoreLeaves.scheduleIncrementPL();
        // await restoreLeaves.scheduleUpdateCL();
    });
});
