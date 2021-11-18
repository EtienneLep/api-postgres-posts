const {validationResult} = require('express-validator');

module.exports = function validatePost(req, res, next) {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({errors: errors.array()});
    }
    next()
};