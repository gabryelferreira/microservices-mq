const shared = require('../shared');

class EmailController {

    send(name, description) {
        const email = {
            from: process.env.EMAIL_USER,
            to: process.env.EMAIL_USER,
            subject: `Contact from ${name}`,
            text: description
        }
        shared.transporter.sendMail(email, (err, result) => {
            if (err) console.error(err);
            else console.log("Email was sended!");
        });

    }

}

module.exports = new EmailController();