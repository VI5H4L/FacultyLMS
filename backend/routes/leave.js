const express = require('express');
const router = express();
const multer = require('multer');

// Multer setup for handling file uploads
const storage = multer.memoryStorage();
const upload = multer({ storage: storage });

const isAdmin = require('../middleware/isAdmin');
const canApprove = require('../middleware/canApprove');

const leaveController = require('../controller/leaveController');
router.get('/',isAdmin,leaveController.getAllLeaves)
    .post('/',upload.single('pdfFile'),leaveController.createLeave)
    .put('/:email/:leaveId',leaveController.updateLeave)
    .put('/response',canApprove ,leaveController.handleLeaveResponse)
    .delete('/:email/:leaveId',leaveController.deleteLeave)
;

module.exports = router;