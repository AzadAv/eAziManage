const mongodb =require('mongodb');
const MongoClient = mongodb.MongoClient;
//const uri = "mongodb+srv://Azad:aqilaydin@cluster0.pxvfa.mongodb.net/eaziManage?retryWrites=true&w=majority";
const uri =   "mongodb+srv://Azad:aqilaydin@cluster0.pkd4d1i.mongodb.net/?retryWrites=true&w=majority";
let _db;

const mongoConnect = (callback) =>{

    // 'mongodb://localhost:27017/eazi-manage'
    MongoClient.connect(uri)
    .then(client =>{

        console.log('Connected!');
        _db = client.db();
        callback(client);
    })
    .catch(err =>{

        console.log(err);
        throw err;
    })

}

const getDb = () => {

    if(_db) {

        return _db;
    }

    throw 'No database found!';
}

exports.mongoConnect = mongoConnect;
exports.getDb = getDb;
