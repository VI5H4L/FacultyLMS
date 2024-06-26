const mongoose = require("mongoose");

const facultySchema = new mongoose.Schema({
  employeeNumber : String,
  name: String,
  email: String,
  designation : String,
  password: String,
  department: String,
  dateOfJoining : Date,
  lastLeave: Date,
  CLLeavesLeft : {
    type : Number,
    default : 8
  },
  PLLeaves : {
    type : Number,
    default  : 0
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