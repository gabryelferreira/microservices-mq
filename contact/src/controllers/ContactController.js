const QueueController = require('./QueueController');
const ContactRepository = require('../repositories/ContactRepository');

class ContactController {

    index(req, res) {
        const { name, description } = req.body;
        const user = {
            name,
            description
        }
        QueueController.sendToQueue("contact", JSON.stringify(user));
        ContactRepository.save(user);
        return res.json({
            success: true,
            message: "Thank you for your contact!"
        })
    }

}

module.exports = new ContactController();