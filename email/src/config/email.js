const nodemailer = require('nodemailer');

class EmailConfig {
    
    configure() {
        return nodemailer.createTransport({
            service: 'Hotmail',
            auth: {
                user: process.env.EMAIL_USER,
                pass: process.env.EMAIL_SECRET
            }
        });
    }

}

module.exports = new EmailConfig();