const Faculty = require('../model/Faculty');

const handleLogout = async (req, res) => {
    const cookies = req.cookies;
    if (!cookies?.jwt) return res.sendStatus(204); //No content
    const accessToken = cookies.jwt;
    res.clearCookie('jwt', { httpOnly: true, sameSite: 'None', secure: true });
    res.status(204).json({"message" : "User has been logged out"});
    console.log(accessToken);
    console.log('User has been logged out');
}

module.exports = { handleLogout }
