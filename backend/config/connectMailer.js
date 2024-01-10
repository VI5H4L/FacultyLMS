const nodemailer = require("nodemailer");

const connectMailer = () => {
  const transporter = nodemailer.createTransport({
    service : "gmail",
    host: "smtp.gmail.com",
    auth: {
      user: process.env.USER,
      pass: process.env.PASS,
    },
  });
  return transporter;
};

module.exports = connectMailer;