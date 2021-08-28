const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    service: 'gmail',
    port: 2525,
    auth: {
        user: process.env.APP_EMAIL_USER || process.env.APP_EMAIL,
        pass: process.env.APP_EMAIL_PASSWORD
    }
});

const emailService = {
    sendEmail: ({ to, subject, html, text }) => {
        return transporter.sendMail({
            from: process.env.APP_EMAIL,
            to,
            subject,
            html,
            text
        })
    }
}

module.exports = {
    emailService
};
