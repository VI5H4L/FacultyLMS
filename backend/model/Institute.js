const mongoose = require("mongoose");

const instituteSchema = new mongoose.Schema({
    name : String,
    newAcademicYear : {
        type : Date,
        default : Date.now()
    },
    summerBreak : {
        start : {
            type : Date,
            default : Date.now()
        },
        end : {
            type : Date,
            default : Date.now()
        }
    },
    winterBreak : {
        start : {
            type : Date,
            default : Date.now()
        },
        end : {
            type : Date,
            default : Date.now()
        }
    }
});

module.exports = mongoose.model("Institute", instituteSchema);