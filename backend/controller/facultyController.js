

const Faculty = require('../model/Faculty');

const getAllFaculties = async (req,res) => {
    const faculties = await Faculty.find();
    if (!faculties) return res.status(204).json({ 'message': 'No employees found.' });
    res.json(faculties);
}

const getFaculty = async (req, res) => {
    if (!req?.params?.email) return res.status(400).json({ 'message': 'Faculty ID required.' });

    const faculty = await Faculty.findOne({ email: req.params.email }).exec();
    if (!faculty) {
        return res.status(204).json({ "message": `No employee found`});
    }
    res.json(faculty);
}

const createNewFaculty = async (req, res) => {
    if (!req?.body?.email || !req?.body?.password) {
        return res.status(400).json({ 'message': 'email and password are required' });
    }

    try {
        const result = await Faculty.create({
            email : req.body.email,
            password : req.body.password
        });

        res.status(201).json(result);
    } catch (err) {
        console.error(err);
    }
}

const updateFaculty = async (req, res) => {
    if (!req?.body?.email) {
        return res.status(400).json({ 'message': 'EmailID parameter is required.' });
    }

    const faculty = await Faculty.findOne({ email:req.body.email }).exec();
    if (!faculty) {
        return res.status(204).json({ "message": `No employee matches ID ${req.body.email}.` });
    }
    if (req.body?.name) faculty.name = req.body.name;
    if (req.body?.department) faculty.department = req.body.department;
    const result = await faculty.save();
    res.json(result);
}

const deleteFaculty = async (req, res) => {
    if (!req?.body?.email) return res.status(400).json({ 'message': 'EmailID required.' });

    const faculty = await Faculty.findOne({ email : req.body.email }).exec();
    if (!faculty) {
    return res.status(204).json({ "message": `No employee matches ID ${req.body.email}.` });
    }
    const result = await faculty.deleteOne(); 
    res.json(result);
}

module.exports = {
    getAllFaculties,
    getFaculty,
    createNewFaculty,
    updateFaculty,
    deleteFaculty
}