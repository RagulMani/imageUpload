var express = require('express');
var router = express.Router();
var uploadService = require('../services/uploadService');
var multer = require('multer');

var storage = multer.diskStorage({
    destination: function (req, file, callback) {
        callback(null, './images');
    },
    filename: function (req, file, callback) {
        callback(null, file.fieldname + '-' + Date.now());
    }
});

const upload = multer({ storage: storage }).array('userPhoto', 2);;

router.get('/getAllImages', function (req, res) {
    upload.getAllImages(function (err, result) {
        if (!err) {
            res.sendFile(result);
        } else {
            res.status(500).send({ error: err.name, message: err.message });
        }
    })
});

router.post('/uploadImages', function (req, res, next) {
    upload(req, res, function (err, result) {
        console.log(req.body);
        console.log(req.files);
        if (!err) {
            res.end("File Uploading Completed");
        } else {
            return res.end("Error uploading file.");
        }
    })
})

module.exports = router;

