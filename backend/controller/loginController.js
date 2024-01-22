const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const Faculty = require('../model/Faculty');

const handleLogin = async (req,res)=>{
    const {email , password} = req.body;
    console.log(req.body);
    if(!(email && password)) return res.status(400).json({'message':`EmailId and password required`});

    const validUser = await Faculty.findOne({ email }).exec();
    if (!validUser) return res.sendStatus(401);
    const validPass = await bcrypt.compare(password,validUser.password); 
    console.log("come here");
console.log(validPass)
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
        res.json( {accessToken} );
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