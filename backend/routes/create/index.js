// Add Express
const express = require('express')
const router = express.Router();
// Controller + Auth
const deviceController = require('../../controller/deviceController.js');
// const checkAuth = require('../../middleware/checkAuth.js');

// Endpoints
router.post('/createDevice', deviceController.createDevice);

module.exports = router;