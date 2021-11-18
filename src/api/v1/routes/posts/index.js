const express = require('express');
const postController = require('../../controllers/post-controller');
const schemaValidationPost = require("../../middleware/validations/post/validation-post");
const schemaValidationPut = require("../../middleware/validations/post/validation-put");
const validatePost = require("../../middleware/validations/express-validator");

const router = express.Router();

router.get('/:id', postController.getPost);
router.get('/', postController.getPosts);

// permet de pouvoir valider les données de l'utilisateur (requete post et put)
router.post('/',
    schemaValidationPost,
    validatePost,
    postController.createPost);

router.put('/:id',
    schemaValidationPut,
    validatePost,
    postController.updatePost);

router.delete('/:id', postController.deletePost);

module.exports = router;
