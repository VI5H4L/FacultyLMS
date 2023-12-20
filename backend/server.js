require('dotenv').config();
const express = require("express");
const app = express();
const mongoose = require('mongoose');
const verifyJWT = require('./middleware/verifyJWT');
const cookieParser = require('cookie-parser');

const PORT = process.env.PORT || 3000;


const connectDB = require("./config/connectDB");
connectDB();

app.use(express.json());

app.use(cookieParser());


app.use('/register',require('./routes/register'));
app.use('/login',require('./routes/login'));
app.use('/refresh',require('./routes/refresh'));
app.use('/logout',require('./routes/logout'));
app.use(verifyJWT);
// app.use(getFacultyInfo);

app.get('/',(req,res) => {
    res.send('hello');
})
app.use('/faculty',require('./routes/faculty'));


mongoose.connection.once('open', () => {
    console.log('Connected to MongoDB');
    app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
});
