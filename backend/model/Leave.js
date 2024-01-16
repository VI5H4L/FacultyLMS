const mongoose = require("mongoose");

const leaveSchema = new mongoose.Schema(
    {
        from : Date,
        to : Date,
        days : Number,
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
            id :{
                type : mongoose.Schema.Types.ObjectId,
                ref : "Faculty"
            },
            name: String
        }
    }
)

module.exports = mongoose.model("Leave",leaveSchema);