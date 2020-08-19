var uploadDb = require('../dbs/uploadDb');

function getAllImages(callback) {
    uploadDb.getAll(callback);
}
function uploadImages(data, callback) {
    uploadDb.create(data, callback);
}

module.exports.getAllImages = getAllImages;
module.exports.uploadImages = uploadImages;