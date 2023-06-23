const express = require('express');
const sendMail = require('./utils/sendEmail');
require('dotenv').config();

const app = express();

app.use(express.json());

const userEmail = "jonathan.mwaniki@thejitu.com";
const subject = "weekly report";
const text = "here is the weekly report, for testing purposes";
const attachmentPath = "C:/Users/KRISTOPH/Desktop/WEEK 7 REPORT.docx";

sendMail(userEmail, subject, text, attachmentPath)


app.get('/', (req, res) => {
  res.send('karishizo');
});

console.log(process.env.DB_USER);


const port = 5002;

app.listen(port, () => console.log(`Server is listening at port ${port}`));
