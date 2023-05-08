const nodemailer = require('nodemailer');

const mail = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 587,
    secure: false,
    requireTLS: true,
    auth: {
    user: 'papagning4@gmail.com',
    pass: 'aiiwquohnvjwnuhp'
    }
});

const mailOptions = {
    from: 'papagning4@gmail.com',
    to: 'papagning4@gmail.com',
    subject: 'Email test',
    text: 'Ceci est un email test envoyé avec Node.js utilisant Nodemailer.'
    };

    mail.sendMail(mailOptions, (error, info) => {
    if (error) {
        console.log(error);
    } else {
        console.log('Email envoyé: ' + info.response);
    }
});
