const QueueController = require('../controllers/QueueController');
const EmailController = require('../controllers/EmailController');

class Events {

    contact() {
        QueueController.listenToQueue("contact", (item) => {
            EmailController.send(item.name, item.description);
        })
    }

}

module.exports = new Events();