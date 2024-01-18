const express = require('express');
const router = express();
const facultyController = require('../controller/facultyController');
const isAdmin = require('../middleware/isAdmin');

router.get('/',isAdmin,facultyController.getAllFaculties)
    .get('/:email',facultyController.getFaculty)
    .post('/',isAdmin,facultyController.createNewFaculty)
    .put('/',isAdmin,facultyController.updateFaculty)
    .delete('/',isAdmin,facultyController.deleteFaculty)
;

module.exports = router;