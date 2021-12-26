// Add Express
const express = require('express')
const router = express.Router();
// Controller + Auth
const mainController = require('../../controller/mainController.js');
// const checkAuth = require('../../middleware/checkAuth.js');

// Endpoints
router.get('/get', mainController.get);

router.post('/post', mainController.post);

module.exports = router;