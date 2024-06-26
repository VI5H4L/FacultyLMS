const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const Faculty = require('../model/Faculty');
const isLNMIITEmail = require('../utils/isLNMIITEmail');

const handleLogin = async (req,res)=>{
    const {email , password} = req.body;
    if(!(email && password)) return res.status(400).json({'message':`EmailId and password required`});

    if (!isLNMIITEmail(email)) return res.status(401).json({'message' : 'Email is not of required Domain'});

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
            { expiresIn : '3d'}//options
        );
        res.cookie('jwt',accessToken,{ httpOnly:true, maxAge : 24 * 60 * 60 * 1000,sameSite:"None" });
        res.json( { accessToken, designation : validUser.designation } );
    }
    else{
        res.sendStatus(401);
    }

}
const sendDesignation=async(req,res)=>{
    try{
        console.log("called");
        const token= req.body.token;
        if(!token){
            throw Error("Issue In the Token");
        }
        await jwt.verify(token,process.env.ACCESS_TOKEN_SECRET, async(err, data) => {
        if (err) {
            throw Error(err);
        } else {
            console.log(data.UserInfo.email);
            const em = data.UserInfo.email;
            const fac = await Faculty.findOne({email:em});
            console.log(fac);
            res.json({
                position:fac.designation,
                CLLeavesLeft:fac.CLLeavesLeft,
                PLLeaves:fac.PLLeaves,
                department:fac.department,
                email:fac.email,
                name:fac.name
            });
        }
        });
    }catch(e){
        res.json({
            "message":e.message
        })
    }
}

module.exports = { handleLogin,sendDesignation };