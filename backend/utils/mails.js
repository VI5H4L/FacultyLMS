const connectMailer = require('../config/connectMailer');
const transporter = connectMailer();

const sendMail = async (mailOptions) => {
    mailOptions = {...mailOptions,from: {
        name : "FLMS",
        address : process.env.USER
    }};
    const info = await transporter.sendMail(mailOptions);
    
    console.log("Message sent: %s", info.messageId);
}

module.exports = sendMail;

