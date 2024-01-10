const Leave = require('../model/Leave');
const Faculty = require('../model/Faculty');
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
        faculty.leaves.push(leave);
        await leave.save();
        await faculty.save();
        res.status(201).json(leave);
        
        await sendMail(process.env.TEST_EMAIL);

    } catch (err) {
        console.error(err);
    }
}

const updateLeave = async (req, res) => {
    if (!req?.body?.adminStatus) {
        return res.status(400).json({ 'message': 'Status parameter is required.' });
    }

    const { email, leaveId } = req.params;
    const faculty = await Faculty.findOneAndUpdate(email, { $pull: {leaves :leaveId}});
    const leave = await Leave.findOneAndUpdate(leaveId);
    if (!leave) {
        return res.status(204).json({ "message": `No leave matches ID ${req.body.email}.` });
    }
    if (req.body?.adminStatus) leave.adminStatus = req.body.adminStatus;
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
    deleteLeave
}