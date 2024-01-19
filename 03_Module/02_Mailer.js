// 1. import nodemailer
const nodemailer = require('nodemailer')


// 2. Configure email and send it 
// asynchronous op

async function sendMail() {
    // 1. Create an email transporter
    // SMTP (Simple Mail Transfer Protocol)
    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: 'khushii.sharma260923@gmail.com',
            pass: 'yewb rfby ndyw whpi'
        }
    })


    // 2. Configure email content
    const mailOptions = {
        from: 'khushii.sharma260923@gmail.com',
        to: "khushiastrogeek@gmail.com",
        subject: 'Welcome to NodeJS App',
        text: "This is an Email using nodemailer in NodeJS"
    };


    // 3. To send the Email.
    try {
        const result = await transporter.sendMail(mailOptions)
        console.log("Email sent Successfully.");
    } catch (error) {
        console.log("Email send failed with error :", error);
    }
}


sendMail();