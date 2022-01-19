// Add Express
const express = require('express')
const router = express.Router();
// Controller + Auth
const buildingController = require('../../controller/buildingController.js');
// const checkAuth = require('../../middleware/checkAuth.js');

// Endpoints
router.get('/get', buildingController.get);

router.post('/add', buildingController.add);

router.post('/remove', buildingController.remove);

module.exports = router;