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
        rescheduledClass : {
            date : Date,
            time : String,         
            default : null
        },
        invigilationDuty : {
            substitute : {
                email : String
            },
            default : null
        },
        administrativeResponsibility : {
            substitute : {
                email : String
            },
            default : null
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