require('dotenv').config();
const express = require('express');
const emailConfig = require('./src/config/email');
const rabbitMQConfig = require('./src/config/rabbitmq');
const listenToEvent = require('./src/events');
const shared = require('./src/shared');
const app = express();

app.use(express.json());

app.listen("3001", async () => {
    console.log("Listening on port 3001");
    shared.amqpConn = await rabbitMQConfig.connect();
    shared.transporter = emailConfig.configure();
    listenToEvent.contact();
})