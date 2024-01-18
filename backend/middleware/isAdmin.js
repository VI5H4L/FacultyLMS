

const isAdmin = (req,res,next) => {

    //check for admin constraints if yes then 
    if (req.faculty.email == process.env.EMAIL_ADMIN) {
        next();
    } else {
        res.status(401).send('Unauthorised, Only accessible to admin!');
    }
};

module.exports = isAdmin;