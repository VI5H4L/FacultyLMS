const connectMailer = require('../config/connectMailer');
const transporter = connectMailer();

const sendMail = async (receiver) => {

    const info = await transporter.sendMail({
        from: {
            name : "LMS",
            address : process.env.USER
        },
        to: receiver,
        subject: "Leave Application",
        text: "Hello world?",
        html: "<b>Hello world?</b>", 
    });
    
    console.log("Message sent: %s", info.messageId);
}

module.exports = sendMail;

