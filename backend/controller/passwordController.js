const bcrypt = require('bcrypt');
const Faculty = require('../model/Faculty');

const changePassword = async (req,res) => {
    try {
        const { oldPassword, newPassword } = req.body;
        const email = req.faculty.email;
        const faculty = await Faculty.findOne( {email} ).exec();
        if(!faculty) return res.status(401).json({'message' : 'Faculty Not Found!'});
    
        // Check if the provided old password matches the stored hashed password
        const passwordMatch = await bcrypt.compare(oldPassword, faculty.password);
    
        if (!passwordMatch) {
          return res.status(401).json({ error: 'Invalid old password' });
        }
    
        // Hash the new password before storing it
        const hashedNewPassword = await bcrypt.hash(newPassword, 10);
    
        // Update the user's password in the database
        faculty.password = hashedNewPassword;
        const result = await faculty.save();
        console.log(result);
        res.status(200).json({ message: 'Password updated successfully' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
}

module.exports = { changePassword };