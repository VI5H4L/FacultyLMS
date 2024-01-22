const Faculty = require('../model/Faculty');
const Institute = require('../model/Institute');

const updateCL = async () => {
    const currentYear = new Date().getFullYear();

    try {
        await Faculty.updateMany({}, {CLLeavesleft : 8} );
        console.log(`Updated leaves to 8 for all faculty members for the academic year ${currentYear}`);
    } catch (err) {
        console.log("Error in updateCL",err);
    }
};

const scheduleUpdateCL = async () => {
    const today = new Date();
    const currentYear = today.getFullYear();

    //fetch academic year date
    const ins = await Institute.find();
    const newAcademicYearStartDate =  ins[0].newAcademicYear;
    const date = newAcademicYearStartDate.getDate();
    const month = newAcademicYearStartDate.getMonth() + 1;

    const nextAcademicYearStartDate = new Date(currentYear + date,month,1);
  
    // Calculate the time difference in milliseconds
    const timeUntilNextAcademicYear = nextAcademicYearStartDate - today;

    setTimeout(() => {
        updateCL();
        scheduleUpdateCL();
    }, timeUntilNextAcademicYear);
};

const incrementPL = async() => {
    const currentMonth = new Date().getMonth() + 1;

    try {
        const facultyToUpdate = await Faculty.find({
            lastLeave: { $lt: new Date(`${currentMonth}/1/${new Date().getFullYear()}`) },
        });
        for (const facultyMember of facultyToUpdate) {
            const newLeaves = facultyMember.PLLeaves + 2.5;
            await Faculty.findByIdAndUpdate(facultyMember._id, { leaves: newLeaves });
            console.log(`Incremented leaves by 2.5 for faculty member ${facultyMember.name}`);
        }
    } catch (err) {
        console.log(err);
    }
};

module.exports = {
    updateCL,
    scheduleUpdateCL,
    incrementPL
}