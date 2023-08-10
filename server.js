var express = require('express')
var app = express()
const { MongoClient, ServerApiVersion } = require('mongodb');
const uri = "mongodb+srv://s223438554:DO6YBkVDq4nC3NqR@cluster0.rbfmf8x.mongodb.net/?retryWrites=true&w=majority";
var port = process.env.port || 3000;

app.use(express.static(__dirname + '/public'))
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
let collection;

const client = new MongoClient(uri, {
    serverApi: {
        version: ServerApiVersion.v1,
        strict: true,
        deprecationErrors: true,
    }
});

async function runDBConnection() {
    try {
        await client.connect();
        collection = client.db().collection('Cat');
        console.log(collection);
    } catch (ex) {
        console.error(ex);
    }
}

app.get('/', function (req, res) {
    res.render('index.html');
});

app.get('/api/cats', (req, res) =>{
    getAllCats((err,result)=> {
        if (!err) {
            res.json({ statusCode: 200, data:result, message: 'get all cats successful' });
        }
    });
})

app.post('/api/cat', (req, res)=>{
    let cat = req.body;
    postCat(cat, (err, result)=>{
        if (!err) {
            res.json({statusCode:201, data:result, message:'success' });
        }
    });
})

function postCat(cat,callback) {
    collection.insertOne(cat,callback);
}

function getAllCats(callback) {
    collection.find({}).toArray(callback);
}

app.listen(port, () => {
    console.log("App listening to: " + port)
    console.log("Server live at http://localhost:" + port)
    console.log("Type Ctrl+C to shut down");
    runDBConnection();
});

