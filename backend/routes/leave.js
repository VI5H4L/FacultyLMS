const express = require('express');
const router = express();

const leaveController = require('../controller/leaveController');
router.get('/',leaveController.getAllLeaves)
    .post('/',leaveController.createLeave)
    .put('/:email/:leaveId',leaveController.updateLeave)
    .delete('/:email/:leaveId',leaveController.deleteLeave)
;

module.exports = router;