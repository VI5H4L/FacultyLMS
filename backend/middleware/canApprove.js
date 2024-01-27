
const canApprove = (req,res,next) => {
    const designation = req.faculty.designation;
    const approval = ["hod","dofa","director"];
    if (approval.includes(designation)) {
        next();
    } else {
        return res.status(401).json( {'message' : 'Not Allowed for this route'} );
    }
};

module.exports = canApprove;