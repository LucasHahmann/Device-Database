// Add Express
const express = require('express')
const router = express.Router();
// Controller + Auth
const settingsController = require('../../controller/settingsController.js');
// const checkAuth = require('../../middleware/checkAuth.js');

// Endpoints
router.get('/checkConnection', settingsController.checkConnection);

module.exports = router;