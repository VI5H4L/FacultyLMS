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
    const ins = await Institute.findOne({name : 'lnmiit'});

    if (!ins) {
        const instituteDetails = {
            name : "lnmiit",
            newAcademicYear : new Date()
        };
        const result = await Institute.create();
    }

    const newAcademicYearStartDate =  ins.newAcademicYear;
    const date = newAcademicYearStartDate.getDate();
    const month = newAcademicYearStartDate.getMonth() + 1;

    const nextAcademicYearStartDate = new Date(currentYear + 1,month,date);
  
    // Calculate the time difference in milliseconds
    const timeUntilNextAcademicYear = nextAcademicYearStartDate - today;

    setTimeout(() => {
        updateCL();
        resetExceedingPL();
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

const scheduleIncrementPL = async () => {
    const today = new Date();
    const nextMonthStartDate = new Date(today.getFullYear(), today.getMonth() + 1, 1);

    // Calculate the time difference in milliseconds until the start of the next month
    const timeUntilNextMonth = nextMonthStartDate - today;

    setTimeout(() => {
        incrementPL();
        // Reschedule for the start of the next month
        scheduleIncrementPL();
    }, timeUntilNextMonth);
};

const resetExceedingPL = async () => {
    try {
        // Reset leaves to 60 for faculty members with leaves exceeding 60
        await Faculty.updateMany({ leaves: { $gt: 60 } }, { leaves: 60 });
    
        console.log(`Reset leaves to 60 for faculty members with leaves exceeding 60 for the academic year}`);
      } catch (error) {
        console.error('Error resetting leaves:', error);
      }
}

module.exports = {
    updateCL,
    scheduleUpdateCL,
    incrementPL,
    scheduleIncrementPL,
    resetExceedingPL
};