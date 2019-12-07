const express = require('express');
const router = express.Router();
const ContactController = require('./controllers/ContactController');

router.post("/", ContactController.index);

module.exports = router;