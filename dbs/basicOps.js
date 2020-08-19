var mongodb = require('./MongodDbUtil');
function create(record, callback) {
    var db = mongodb.getDb();
    var coll = db.collection(this.getCollectionName());
    coll.insert(record, function (err, result) {
        if (!err) {
            callback(null, result.ops[0]);
        } else {
            callback(err, null);
        }
    });
}


function getAll(callback) {
    var db = mongodb.getDb();
    var coll = db.collection(this.getCollectionName());
    coll.find({}).toArray(function (err, result) {
        if (!err) {
            callback(null, result);
        } else {
            callback(err, null);
        }
    });
}

module.exports= function BasicOps(collectionName) {
    return{
        create : create,
        getAll: getAll,
        getCollectionName: function () {
            return collectionName;
        }
    }
}