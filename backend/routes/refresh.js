const express = require('express');
const router = express();

const { handleRefreshToken } = require('../controller/refreshController');

router.get('/',handleRefreshToken);

module.exports = router;