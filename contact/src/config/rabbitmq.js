const amqp = require('amqplib/callback_api');

class RabbitMQConfig {

    connect() {
        return new Promise((resolve, reject) => {
            amqp.connect(process.env.AMQP_URL, function (err, conn) {
                if (err) {
                    console.log("Error on connecting to AMQP", err);
                    reject(err);
                } else {
                    console.log("Connected successfully to AMQP");
                    resolve(conn);
                }
            });
        })
    }

}

module.exports = new RabbitMQConfig();