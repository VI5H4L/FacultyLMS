

const isAdmin = (req,res,next) => {

    //check for admin constraints if yes then 
    if (req.faculty.email == 'admin@lnmiit.ac.in') {

        next();
    } else {
        res.status(401).send('Unauthorised, Only accessible to admin!');
    }
};

module.exports = isAdmin;