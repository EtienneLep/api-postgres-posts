const {body} = require("express-validator");

const validationPut = [
    body('title')
        .exists({checkFalsy: true}).withMessage("title should be set and not null or empty")
        .isString().withMessage("title should be a string")
        .isLength({max: 50}).withMessage("title should have a maximum length of 50 characters"),

    body('description')
        .exists({checkFalsy: true}).withMessage("description should be set and not null or empty")
        .isString().withMessage("title should be a string")
        .isLength({max: 500}).withMessage("title should have a maximum length of 500 characters"),
]

module.exports = validationPut;