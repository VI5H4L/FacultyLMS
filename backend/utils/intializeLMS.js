const Institute = require('../model/Institute');

const initializeLMS = async () => {

    const instituteOptions = {
        name : 'lnmiit',
    };
    const ins = new Institute(instituteOptions);
    await ins.save();
    console.log(`LMS Intialized for ${ins.name}`);
};

module.exports = initializeLMS;