const express = require('express');
const router = express();
const passwordController = require('../controller/passwordController');

router.post('/',passwordController.changePassword);

module.exports = router;