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

    const newAcademicYearStartDate =  ins.newAcademicYear;
    const date = newAcademicYearStartDate.getDate();
    const month = newAcademicYearStartDate.getMonth();

    const nextAcademicYearStartDate = new Date(currentYear + 1,month,date);
    ins.newAcademicYear = nextAcademicYearStartDate;
    await ins.save();
  
    // Calculate the time difference in milliseconds
    // const timeUntilNextAcademicYear = nextAcademicYearStartDate - today;
    const timeUntilNextAcademicYear = 12000;

    console.log(timeUntilNextAcademicYear);

    const intervalId = setInterval(() => {
        const elapsed = Date.now() - today;
    
        if (elapsed >= timeUntilNextAcademicYear) {
            clearInterval(intervalId); // Stop the interval once the desired time is reached
            updateCL();
            resetExceedingPL();
            scheduleUpdateCL();
        }
    }, 1000); // Check every 1000 milliseconds (1 second)
};

const incrementPL = async() => {
    const currentMonth = new Date().getMonth();
    try {
        const facultyToUpdate = await Faculty.find();
        for (const facultyMember of facultyToUpdate) {

            if (!facultyMember.lastLeave || facultyMember.lastLeave.getMonth() + 1 ===  currentMonth || (currentMonth == 0 && facultyMember.lastLeave.getMonth() == 11) ) {
                const newLeaves = facultyMember.PLLeaves + 2.5;
                await Faculty.findByIdAndUpdate(facultyMember._id, { PLLeaves: newLeaves });
                console.log(`Incremented leaves by 2.5 for faculty member ${facultyMember.name}`);
            };
            
        };
    } catch (err) {
        console.log(err);
    }
};

const scheduleIncrementPL = async () => {
    const today = new Date();
    const nextMonthStartDate = new Date(today.getFullYear(), today.getMonth() + 1, 1);

    // Calculate the time difference in milliseconds until the start of the next month
    // const timeUntilNextMonth = nextMonthStartDate - today;
    const timeUntilNextMonth = 1000;
    console.log(timeUntilNextMonth);

    const intervalId = setInterval(() => {
        const elapsed = Date.now() - today;
    
        if (elapsed >= timeUntilNextMonth) {
            clearInterval(intervalId); // Stop the interval once the desired time is reached
            incrementPL();
            // Reschedule for the start of the next month
            scheduleIncrementPL();
        }
    }, 1000); // Check every 1000 milliseconds (1 second)
};

const resetExceedingPL = async () => {
    try {
        // Reset leaves to 60 for faculty members with leaves exceeding 60
        const result = await Faculty.updateMany(
            { PLLeaves: { $gt: 60 } }, // Find faculties where leaves > 60
            { $set: { PLLeaves: 60 } }  // Set leaves to 60
        );
    
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