const bcrypt = require('bcrypt');
const fsPromises = require('fs').promises;
const path = require('path');
const Faculty = require('../model/Faculty');
const generateDefaultPassword = require('../utils/generateDefaultPassword');
const sendMail = require('../utils/mails');
const isLNMIITEmail = require('../utils/isLNMIITEmail');

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
    try {
        if(!req?.body) return res.sendStatus(400);
        const faculty = req.body;

        if (!isLNMIITEmail(faculty.email)) return res.status(401).json({'message' : 'Email is not of required Domain'});

        const duplicate = await Faculty.findOne({ email: faculty.email }).exec();
        if (duplicate) return res.sendStatus(409); //Conflict 

        const password = generateDefaultPassword();

        const hashedPwd = await bcrypt.hash(password, 10);
        const result = new Faculty({
            employeeNumber : faculty.employeeNumber,
            name : faculty.name,
            email : faculty.email,
            password : hashedPwd,
            department : faculty.department,
            designation : faculty.designation,
            dateOfJoining : faculty.dateOfJoining,
            CLLeavesLeft : faculty.CLLeavesLeft,
            PLLeaves : faculty.PLLeaves
        });
        if (!result) return res.status(500).json({'message' : 'Internal Server Error!'});
        console.log(result);

        //send mail to faculty regarding default password
        const fileData = await fsPromises.readFile(path.join(__dirname,'..','views','newFacultyMail.html'),'utf-8');
        const emailBody = fileData.replace('{{TEMP_PASSWORD}}',password);

        const mailOptions = {
            to: result.email,
            subject: "FLMS Account Created",
            html: emailBody 
        };

        const mailResult = await sendMail(mailOptions);
        console.log(mailResult);
        await result.save();

        res.status(201).json({ 'message' : `New faculty ${faculty.name} created! with password ${password}` });
    } catch (err) {
        console.log(err);
    }
};

const updateFaculty = async (req, res) => {
    if (!req?.body?.email) {
        return res.status(400).json({ 'message': 'EmailID parameter is required.' });
    }

    const faculty = await Faculty.findOne({ email : req.body.email }).exec();
    if (!faculty) return res.status(204).json({ "message": `No employee matches ID ${req.body.email}.` });
    
    if (req.body?.employeeNumber) faculty.employeeNumber = req.body.employeeNumber;
    if (req.body?.name) faculty.name = req.body.name;
    if (req.body?.department) faculty.department = req.body.department;
    if (req.body?.designation) faculty.designation = req.body.designation;
    if (req.body?.CLLeavesLeft) faculty.CLLeavesLeft = req.body.CLLeavesLeft;
    if (req.body?.PLLeaves) faculty.PLLeaves = req.body.PLLeaves;
    if (req.body?.ODLeaves) faculty.ODLeaves = req.body.ODLeaves;
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