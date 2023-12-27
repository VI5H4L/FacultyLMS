const Faculty = require('../model/Faculty');



const getFacultyInfo = async (req,res) => {
    const email = req.email;

    //fetch from database
    const validUser = await Faculty.findOne({ email }).exec();

    req.faculty = validUser;

};

module.exports = getFacultyInfo;