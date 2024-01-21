const jwt = require('jsonwebtoken');
const Faculty  = require('../model/Faculty')

const verifyJWT = async (req, res, next) => {

    const authHeader = req.headers.authorization || req.headers.Authorization;
    if (!authHeader?.startsWith('Bearer ')) return res.json(({message:"unauthorized here"}));
    const token = authHeader.split(' ')[1];
    console.log(token);
    jwt.verify(
        token,
        process.env.ACCESS_TOKEN_SECRET,
        (err, decoded) => {
            if (err) return res.json(({message:"unauthorized"})) //invalid token
            req.email = decoded.UserInfo.email;
        }
    );
    const validUser = await Faculty.findOne({ email : req.email }).populate("leaves").exec();
    if (!validUser) {
        return  res.json(({message:"unauthorized"}));
    }
    req.faculty = validUser;
    next();
}

module.exports = verifyJWT