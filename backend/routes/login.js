const express = require('express');
const router = express();
const {handleLogin,sendDesignation} = require('../controller/loginController');


router.post('/',handleLogin);
router.post('/sendpos',sendDesignation);

module.exports = router;