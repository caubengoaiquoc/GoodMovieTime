const express = require('express');
const router = express.Router();
const userController = require('./controller');
const multer = require('multer');
var upload = multer({ dest: 'avatars/' })
//createUser
router.post('/', upload.single('avatarFile'), (req, res) => {
    // req.body.avatarFile = req.file;
    // console.log(req.body);
    userController.createUser(req.body)
        .then(data => {
            res.send(data);
        })
        .catch(err => res.status(500).send(err)
        );
})

module.exports = router;