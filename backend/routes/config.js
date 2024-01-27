const express = require('express');
const router = express();
const isAdmin = require('../middleware/isAdmin');

const instituteController = require('../controller/institueController');
router.get('/:name',instituteController.getDetails)
    .post('/',instituteController.createInstitute)
    .put('/',instituteController.updateInstitute)
    .delete('/',instituteController.deleteInstitute);
    
module.exports = router;
