const mongoose = require("mongoose");

const instituteSchema = new mongoose.Schema({
    newAcademicYear : Date
});

module.exports = mongoose.model("Institute", instituteSchema);