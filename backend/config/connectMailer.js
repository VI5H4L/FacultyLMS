const nodemailer = require("nodemailer");

const connectMailer = () => {
  console.log(1);
  const transporter = nodemailer.createTransport({
    service : "gmail",
    host: "smtp.gmail.com",
    port: 465,  
    secure: false,
    auth: {
      user: process.env.USER,
      pass: process.env.PASS,
    }
  });
  console.log(2);
  return transporter;
};

module.exports = connectMailer;