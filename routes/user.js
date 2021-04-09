const express = require('express')
const router = express.Router()
const UserController = require('../controllers/user.controller');

router.get('/', UserController.findAll);

router.post('/adduser', UserController.create)

module.exports = router