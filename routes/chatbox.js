const express = require('express');
const router = express.Router();
const chatbotController = require('../controllers/chatbotcontroller');
const authMiddleware = require('../middleware/auth');

router.use(authMiddleware);

router.post('/chat', chatbotController.chat);

module.exports = router;
