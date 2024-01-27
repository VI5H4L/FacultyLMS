const Institute = require('../model/Institute');

const getDetails = async (req,res) => {
    const name = req.params.name;

    const institute = await Institute.findOne({name}).exec();

    req.json(institute);
};

const createInstitute = async (req,res) => {
    const ins = req.body;
    if (!ins?.name) return res.status(400).json({'message' : 'Name is required'});

    const duplicate = await Institute.findOne({ name : ins.name }).exec();
    if (duplicate) return res.sendStatus(409); //Conflict 

    const result = await Institute.create(ins);
    console.log(result);

    res.status(201).json(result);
};

const updateInstitute = async (req,res) => {
    const ins = req.body;
    if (!ins?.name) return res.status(400).json({'message' : 'Name is required'});

    const result = await Institute.findByIdAndUpdate({name : ins.name},ins).exec();

    console.log(result);
    res.status(200).json(result);
};

const deleteInstitute = async (req,res) => {
    const ins = req.body;
    if (!ins?.name) return res.status(400).json({'message' : 'Name is required'});

    const result = await Institute.findByIdAndRemove({name : ins.name}).exec();

    console.log(result);
    res.status(200).json(result);
};

module.exports = {
    getDetails,
    createInstitute,
    updateInstitute,
    deleteInstitute
}