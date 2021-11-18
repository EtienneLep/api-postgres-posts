const express = require('express');
const routerPost = require('./posts');

const router = express.Router();
router.use('/posts', routerPost);

module.exports = router;
