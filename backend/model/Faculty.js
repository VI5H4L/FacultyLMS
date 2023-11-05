const mongoose = require("mongoose");

const employeeSchema = new mongoose.Schema({
    name: String,
    email: String,
    password: String,
    department: String,
    dateOfJoining : Date,
    CLLeavesLeft : {
        type : Number,
        default : 8
    },
    PLLeaves : {
        type : Number,
        default  :0
    },
    ODLeaves : {
        type : Number
    },
    leaves: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Leave"
      }
    ]
  });
  
module.exports = mongoose.model("Faculty", facultySchema);