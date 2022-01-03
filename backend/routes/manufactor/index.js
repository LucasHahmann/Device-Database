// Add Express
const express = require('express')
const router = express.Router();
// Controller + Auth
const manufactorController = require('../../controller/manufactorController.js');
// const checkAuth = require('../../middleware/checkAuth.js');

// Endpoints
router.get('/getManufactors', manufactorController.getManufactors);

router.post('/getModels', manufactorController.getModels);

module.exports = router;