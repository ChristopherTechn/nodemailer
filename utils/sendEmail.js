const { createTransport } = require("nodemailer");
require('dotenv').config();
const path = require("path");
const email_config = require('../config/email.Config');

const transporter = createTransport(email_config);

async function sendMail(userEmail, subject, text,attachmentPath) {
 
  
  const message_options = {
    from: process.env.EMAIL_USER,
    to: userEmail,
    subject: subject,
    html: `
      <p>${text}</p>
    `,
    attachments:[
        {
        filename: "WEEK 7 REPORT.docx",
        path:attachmentPath,
   }, ],
  };

  try {
    let results = await transporter.sendMail(message_options);
    console.log(results);
  } catch (error) {
    console.log(error);
  }
}

module.exports = sendMail;
