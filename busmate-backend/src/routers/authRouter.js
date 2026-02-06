const express = require('express');
const router = express.Router();
const validateForm = require('../controllers/validateForm');

router.post("/login", validateForm);
router.post("/signup", validateForm);

module.exports = router;