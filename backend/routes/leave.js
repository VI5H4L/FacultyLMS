const express = require('express');
const router = express();

const leaveController = require('../controller/leaveController');
router.get('/',leaveController.getAllLeaves)
    .get('/',);
;

module.exports = router;