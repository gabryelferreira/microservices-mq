const shared = require('../shared');

class QueueController {

    sendToQueue(queue, message) {
        shared.amqpConn.createChannel(function (err, ch) {
            const ex = queue;

            ch.assertQueue(ex);
            ch.sendToQueue(ex, new Buffer.from(message));
            console.log(` [x] Sent Delivery Item to ${queue} Queue `, message);
        });
    }

    listenToQueue(queue, cb) {
        shared.amqpConn.createChannel(function (err, ch) {
            var ex = queue;

            ch.assertQueue(ex);

            ch.consume(ex, function (msg) {
                const parsedMsg = JSON.parse(msg.content.toString());
                console.log(` [x] Delivered Item to ${queue} Queue `, parsedMsg);
                ch.ack(msg);
                if (cb) {
                    cb(parsedMsg);
                }
            });
        });
    }

}

module.exports = new QueueController();