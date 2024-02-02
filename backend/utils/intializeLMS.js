const Institute = require('../model/Institute');

const initializeLMS = async () => {

    const instituteOptions = {
        name : 'lnmiit',
        newAcademicYear : new Date().setFullYear(new Date().getFullYear(),0,1)
    };
    const ins = new Institute(instituteOptions);

    const duplicate = await Institute.findOne({ name : ins.name }).exec();
    if (duplicate) return;
    await ins.save();
    console.log(`LMS Intialized for ${ins.name}`);
};

module.exports = initializeLMS;