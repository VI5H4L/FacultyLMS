const mongoose = require("mongoose");

const instituteSchema = new mongoose.Schema({
    name : String,
    newAcademicYear : Date,
    summerBreak : {
        start : Date,
        end : Date
    },
    winterBreak : {
        start : Date,
        end : Date
    }
});

module.exports = mongoose.model("Institute", instituteSchema);