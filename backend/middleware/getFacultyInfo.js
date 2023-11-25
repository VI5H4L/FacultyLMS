



const getFacultyInfo = (req,res,next) => {
    const email = req.email;

    //fetch from database

    const faculty = {};

    req.faculty = faculty;

    next();
};

module.exports = getFacultyInfo;