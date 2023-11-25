
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const Faculty = require('../model/Faculty');
//LOGIN page
//1.check for valid input
//2. Check for usern ame
//3.Compare password 
//4.Provide login

const handleLogin = async (req,res)=>{
    const {email , password} = req.body;
    if(!(email && password)) return res.status(400).json({'message':`EmailId and password required`});

    const validUser = await Faculty.findOne({ email }).exec();
    if (!validUser) return res.sendStatus(401);
    const validPass = await bcrypt.compare(password,validUser.password); 
    
    if  (validPass) {
        //create JWT
        const accessToken = jwt.sign(
            {
                "UserInfo" : {
                    "email" : validUser.email
                }
            },//payload
            process.env.ACCESS_TOKEN_SECRET,//key
            { expiresIn : '10s'}//options
        );
        const refreshToken = jwt.sign(
            { "email":validUser.email},//payload
            process.env.REFRESH_TOKEN_SECRET,//key
            { expiresIn : '1d'}//options
        );

        //add refresh token to DB
        const result = await Faculty.updateOne(validUser, {  refreshToken });
        
        res.cookie('jwt',refreshToken,{ httpOnly:true, maxAge : 24 * 60 * 60 * 1000 });
        res.json( {accessToken} );
        
    }
    else{
        res.sendStatus(401);
    }

}

module.exports = { handleLogin };