const express = require('express');
const router = express();
const isAdmin = require('../middleware/isAdmin');
const leaveController = require('../controller/leaveController');
router.get('/',isAdmin,leaveController.getAllLeaves)
    .post('/',leaveController.createLeave)
    .put('/:email/:leaveId',leaveController.updateLeave)
    .put('/response',leaveController.handleLeaveResponse)
    .delete('/:email/:leaveId',leaveController.deleteLeave)
;

module.exports = router;