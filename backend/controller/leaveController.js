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
        const faculty = await Faculty.findOne({ email }).exec();
        console.log(faculty);
        const leave = new Leave(
            {
                ...req.body,
                bsubstitute: {
                    content: req.file.buffer,
                    contentType: req.file.mimetype,
                    originalname: req.file.originalname,
                }
            }
        );
        console.log(leave);      

        if ( leave.typeOfLeave == 'CL' ) {
            if(faculty.CLLeavesLeft < leave || leave.days >= 2) {
                return res.status(406).json({'message' : 'Leave not accepted'});
            }
        } else if( leave.typeOfLeave == 'PL' ){
            if( faculty.PLLeaves < leave.days || leave.days < 3) {
                return res.status(406).json({'message' : 'Leave not accepted'});
            }
        };

        leave.dateCreated = new Date();

        faculty.leaves.push(leave);
        await leave.save();
        await faculty.save();
        let reciever;
        const days = leave.days;
        if (days < 7) {
            reciever = process.env.EMAIL_HOD;
        } else if (days >=7 && days < 30) {
            reciever = process.env.EMAIL_DOFA;
        } else if ( days >= 30) {
            reciever = process.env.EMAIL_DIR;
        }
        const fileData = await fsPromises.readFile(path.join(__dirname,'..','views','newLeaveApplied.html'),'utf-8');
        // Here we will do the processing on template mail
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
    };
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
};

const deleteLeave = async (req,res) => {
    const { email, leaveId } = req.params;
    const faculty = await Faculty.findOneAndUpdate(email, { $pull: {leaves :leaveId}});
    const leave = await Leave.findOneAndDelete(leaveId);

    if (faculty && leave) {
        return res.json(leave);
    } else {
        return res.status(500).json("message : Not deleted! ");
    }
};

const handleLeaveResponse = async (req,res) => {
    try {
        const { email,leaveID,status } = req.body;
        if (!status) return req.status(401).json({'message' : 'Status is required'});
        
        const faculty = await Faculty.findOne( {email} ).exec();
        const leave = await Leave.findOne( {_id : leaveID} ).exec();
        
        if (leave.status == status) return res.status(200).json( {'message' : 'Leave already respond'} );
        
        leave.status = status;
        if (leave.status == 'approved') {
            const type = leave.typeOfLeave;

            if(type == 'CL') {
                faculty.CLLeavesLeft = faculty.CLLeavesLeft - leave.days;
            }
            if (type == 'PL') {
                faculty.PLLeaves = faculty.PLLeaves - leave.days;
            }
        }
        faculty.lastLeave = new Date();
        leave.dateStatusUpdate = new Date();
        const result = await leave.save();
        await faculty.save();

        if (!result) return res.sendStatus(500);
        
        res.status(200).json(result);  

    } catch (err) {
        return res.sendStatus(404);
    }

};

module.exports = {
    getAllLeaves,
    createLeave,
    updateLeave,
    deleteLeave,
    handleLeaveResponse
}