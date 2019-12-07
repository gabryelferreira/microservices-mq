const Contact = require('../models/ContactModel');

class ContactRepository {

    save({ name, description }) {
        Contact.create({
            name,
            description
        });
    }

}

module.exports = new ContactRepository();