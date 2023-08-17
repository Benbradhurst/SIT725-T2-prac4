const { MongoClient, ServerApiVersion } = require('mongodb');
const uri = "mongodb+srv://s223438554:DO6YBkVDq4nC3NqR@cluster0.rbfmf8x.mongodb.net/?retryWrites=true&w=majority";

const client = new MongoClient(uri, {
    serverApi: {
        version: ServerApiVersion.v1,
        strict: true,
        deprecationErrors: true,
    }
});

client.connect();

module.exports = client;