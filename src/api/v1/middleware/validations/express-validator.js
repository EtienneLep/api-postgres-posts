const {validationResult} = require('express-validator');
//vérifie si des erreurs ont été trouvées
module.exports = function validatePost(req, res, next) {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({errors: errors.array()});
    }
    next()
};