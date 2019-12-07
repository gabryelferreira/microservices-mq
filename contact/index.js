require('dotenv').config();
const express = require('express');
const mongoDBConfig = require('./src/config/mongodb');
const rabbitMQConfig = require('./src/config/rabbitmq');
const shared = require('./src/shared');
const app = express();

app.use(express.json());

app.use("/", require('./src/routes'));

app.listen("3000", async () => {
    console.log("Listening on port 3000");
    await mongoDBConfig.connect();
    shared.amqpConn = await rabbitMQConfig.connect();
})