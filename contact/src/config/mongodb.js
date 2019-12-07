const mongoose = require('mongoose');

const MONGODB_CONN_STRING = `mongodb+srv://${process.env.MONGODB_USER}:${process.env.MONGODB_SECRET}@cluster0-hbf1g.mongodb.net/test?retryWrites=true&w=majority`;

class MongoDBConfig {

    async connect() {
        return await new Promise((resolve, reject) => {
            mongoose.connect(MONGODB_CONN_STRING, {
                useNewUrlParser: true,
                useUnifiedTopology: true
            }).then(() => {
                console.log("Connected to MongoDB Cluster");
                resolve();
            }).catch((e) => {
                console.error("Error connecting to MongoDB Cluster");
                reject();
            });
        })
    }

}

module.exports = new MongoDBConfig();