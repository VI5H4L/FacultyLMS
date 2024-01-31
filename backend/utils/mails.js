const connectMailer = require('../config/connectMailer');
const transporter = connectMailer();

const sendMail = async (mailOptions) => {
    try {
        console.log(3);
        mailOptions = {...mailOptions,from: {
            name : "FLMS",
            address : process.env.USER
        }};
        console.log(4);
        const info = await transporter.sendMail(mailOptions);
        console.log(5);
        
        console.log("Message sent: %s", info.messageId);
    } catch (err) {
        console.log(err);
    }
};

module.exports = sendMail;

