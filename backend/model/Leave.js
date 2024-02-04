const mongoose = require("mongoose");

const leaveSchema = new mongoose.Schema(
    {
        from : Date,
        to : Date,
        days : Number,
        dateCreated : {
            type : Date
        },
        dateStatusUpdate : Date,
        typeOfLeave : {
            type : String,
            enum : ["CL","PL","OD"]
        },
        reason : String,
        status : {
            type : String,
            enum: ["pending", "approved", "denied"],
            default: "pending"
        },
        faculty : {
            type : mongoose.Schema.Types.ObjectId,
            ref : "Faculty"
        },
        substitute : {
            content: {
                type: Buffer,
            },
            contentType: {
                type: String,
            },
            originalname: {
                type: String,
            }
        }
    }
)

module.exports = mongoose.model("Leave",leaveSchema);