const Leave = require('../model/Leave');
const Faculty = require('../model/Faculty');

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

    } catch (err) {
        console.error(err);
    }
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