const Leave = require('../model/Leave');
const Faculty = require('../model/Faculty');
const fsPromises = require('fs').promises;
const path = require('path');
const sendMail = require('../utils/mails');

const getAllLeaves = async (req,res) => {
    const leaves = await Leave.find();
    if (!leaves) return res.status(204).json({ 'message': 'No Leaves found.' });
    res.json(leaves);
}

const createLeave = async (req,res) => {
    try {
        const email = req.params.email ? req.params.email : req.faculty.email;
        const faculty = await Faculty.findOne({ email  }).exec();
        const leave = new Leave(req.body.leave);      

        if ( leave.type == 'CL' ) {
            if(faculty.CLLeavesLeft < leave.days || leave.days >= 2) {
                res.status(406).json({'message' : 'Leave not accepted'});
                return;
            }
        } else if( leave.type == 'PL' ){
            if( faculty.PLLeaves < leave.days || leave.days < 3) {
                res.status(406).json({'message' : 'Leave not accepted'});
                return;
            }
        }
        faculty.leaves.push(leave);
        await leave.save();
        await faculty.save();
        let reciever;
        if (days < 7) {
            reciever = process.env.EMAIL_HOD;
        } else if (days >=7 && days < 30) {
            reciever = process.env.EMAIL_DOFA;
        } else if ( days >= 30) {
            reciever = process.env.EMAIL_DIR;
        }

        const fileData = await fsPromises.readFile(path.join('..','views','newLeaveApplied.html'),'utf-8');

        const emailBody = fileData;
        const mailOptions  = {
            to: reciever,
            subject: "FLMS Leave",
            html: emailBody 
        }
        await sendMail(mailOptions);
        res.status(201).json(leave);
    } catch (err) {
        console.error(err);
    }
}

const updateLeave = async (req, res) => {
    if (!req?.body?.status) {
        return res.status(400).json({ 'message': 'Status parameter is required.' });
    }

    const { email, leaveId } = req.params;
    const faculty = await Faculty.findOneAndUpdate(email, { $pull: {leaves :leaveId}});
    const leave = await Leave.findOneAndUpdate(leaveId);
    if (!leave) {
        return res.status(204).json({ "message": `No leave matches ID ${req.body.email}.` });
    }
    if (req.body?.status) leave.status = req.body.status;
    await faculty.save();
    const result = await leave.save();
    res.json(result);
}

const deleteLeave = async (req,res) => {
    const { email, leaveId } = req.params;
    const faculty = await Faculty.findOneAndUpdate(email, { $pull: {leaves :leaveId}});
    const leave = await Leave.findOneAndDelete(leaveId);

    if (faculty && leave) {
        return res.json(leave);
    } else {
        return res.status(500).json("message : Not deleted! ");
    }
}

module.exports = {
    getAllLeaves,
    createLeave,
    updateLeave,
    deleteLeave
}