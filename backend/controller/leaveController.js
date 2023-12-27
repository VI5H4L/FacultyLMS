const Leave = require('../model/Leave');
const Faculty = require('../model/Faculty');

const getAllLeaves = async (req,res) => {
    const leaves = await Leave.find();
    if (!leaves) return res.status(204).json({ 'message': 'No Leaves found.' });
    res.json(leaves);
}

const getAllEmployeeLeaves = async (req,res) => {
    if (!req?.params?.email) return res.status(400).json({ 'message': 'Faculty ID required.' });

    const faculty = await Faculty.findOne({ email : req.params.email }).exec();

}

module.exports = {
    getAllLeaves
}