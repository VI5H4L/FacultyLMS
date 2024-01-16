const bcrypt = require('bcrypt');
const fsPromises = require('fs').promises;
const Faculty = require('../model/Faculty');
const generateDefaultPassword = require('../utils/generateDefaultPassword');
const path = require('path');

const getAllFaculties = async (req,res) => {
    const faculties = await Faculty.find();
    if (!faculties || faculties == []) return res.status(404).json({ 'message': 'No employees found.' });
    res.json(faculties);
};

const getFaculty = async (req, res) => {
    if (!req?.params?.email) return res.status(400).json({ 'message': 'Faculty ID required.' });

    const faculty = await Faculty.findOne({ email: req.params.email }).populate("leaves").exec();
    if (!faculty) {
        return res.status(404).json({ "message": `Employee Not found`});
    }
    res.json(faculty);
};

const createNewFaculty = async (req, res) => {
    if(!req?.body) return res.sendStatus(400);
    const faculty = req.body;

    const duplicate = await Faculty.findOne({ email:email }).exec();
    if (duplicate) return res.sendStatus(409); //Conflict 

    const password = generateDefaultPassword();

    const hashedPwd = await bcrypt.hash(password, 10);
    const result = await Faculty.create({
        employeeNumber : faculty.employeeNumber,
        name : faculty.name,
        email : faculty.email,
        password : hashedPwd,
        department : faculty.department
    });

    console.log(result);
    //send mail to faculty regarding default password
    const fileData = await fsPromises.readFile(path.join('..','views','newFacultyMail.html'),'utf-8');

    const emailBody = fileData.replace('{{TEMP_PASSWORD}}',password);
    const mailOptions = {
        to: result.email,
        subject: "FLMS Account Created",
        html: emailBody 
    }
    sendMail(mailOptions);

    res.status(201).json({ 'success': `New faculty ${faculty.name} created!` });
};

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
    if (req.body?.employeeNumber) faculty.employeeNumber = req.body.employeeNumber;
    if (req.body?.CLLeavesLeft) faculty.CLLeavesLeft = req.body.CLLeavesLeft;
    if (req.body?.PLLeaves) faculty.PLLeaves = req.body.PLLeaves;
    if (req.body?.dateOfJoining) faculty.dateOfJoining = req.body.dateOfJoining;
    const result = await faculty.save();
    res.json(result);
};

const deleteFaculty = async (req, res) => {
    if (!req?.body?.email) return res.status(400).json({ 'message': 'EmailID required.' });

    const faculty = await Faculty.findOne({ email : req.body.email }).exec();
    if (!faculty) {
    return res.status(204).json({ "message": `No employee matches ID ${req.body.email}.` });
    }
    const result = await faculty.deleteOne(); 
    res.json(result);
};

module.exports = {
    getAllFaculties,
    getFaculty,
    createNewFaculty,
    updateFaculty,
    deleteFaculty
}