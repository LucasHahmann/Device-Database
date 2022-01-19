// Add Express
const express = require('express')
const router = express.Router();
// Controller + Auth
const typesController = require('../../controller/typesController.js');
// const checkAuth = require('../../middleware/checkAuth.js');

// Endpoints
router.get('/get', typesController.get);

router.post('/add', typesController.add);

router.post('/remove', typesController.remove);

module.exports = router;