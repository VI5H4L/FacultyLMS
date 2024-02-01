const mongoose = require("mongoose");

const instituteSchema = new mongoose.Schema({
    name : String,
    newAcademicYear : {
        type : Date,
        default : Date
    },
    summerBreak : {
        start : {
            type : Date,
        },
        end : {
            type : Date,
        }
    },
    winterBreak : {
        start : {
            type : Date,
        },
        end : {
            type : Date,
        }
    }
});

module.exports = mongoose.model("Institute", instituteSchema);