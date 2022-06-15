// Add Express
const express = require('express')
const router = express.Router();
// Controller + Auth
const searchController = require('../../controller/searchController.js');
// const checkAuth = require('../../middleware/checkAuth.js');

// Endpoints
router.post('/search', searchController.search);

module.exports = router;