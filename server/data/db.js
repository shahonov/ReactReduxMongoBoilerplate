const mongodb = require('mongodb');
const { dbUrl } = require('../credentials');

const MongoClient = mongodb.MongoClient;
const mongodbOptions = { useNewUrlParser: true, useUnifiedTopology: true };

let db;

const initDb = async () => {
    const client = await MongoClient.connect(
        dbUrl,
        mongodbOptions
    );

    db = client.db();

    return db;
};

const getDb = () => {
    if (!db) {
        throw Error('Database not initialized!');
    }

    return db;
};

module.exports = {
    initDb,
    getDb,
    ObjectID: mongodb.ObjectID
}
