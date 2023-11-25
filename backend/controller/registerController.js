const Faculty = require("../model/Faculty");
const bcrypt = require('bcrypt');

const handleRegister = async (req,res) => {
    const { name,email,password,department } = req.body;

    const duplicate = await Faculty.findOne({ email:email }).exec();
    if (duplicate) return res.sendStatus(409); //Conflict 

    try {
        //encrypt the password
        const hashedPwd = await bcrypt.hash(password, 10);

        //create and store the new user
        const result = await Faculty.create({
            "name" : name,
            "email" : email,
            "password" : hashedPwd,
            "department" : department
        });

        console.log(result);

        res.status(201).json({ 'success': `New faculty ${name} created!` });
    } catch (err) {
        res.status(500).json({ 'message': err.message });
    }
}

module.exports = { handleRegister };