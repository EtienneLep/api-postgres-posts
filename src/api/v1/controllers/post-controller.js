const postService = require('../services/post-service');
const ApiError = require('../middleware/errors/api-error');
const dotenv = require('dotenv');
dotenv.config();

class PostController {
    async getPost(req, res, next) {
        try {
            const id = req.params.id;
            const row = await postService.getPost(id);
            if (row.length === 0) {
                next(ApiError.notFound('no post found with this id, can\'t get a post'));
            } else res.status(200).json(row[0]);
        } catch (err) {
            next(ApiError.internalServerError('internal server error, try to contact administrators'));
        }
    }

    async getPosts(req, res, next) {
        try {
            const allRows = await postService.getPosts();
            if (allRows.length === 0) {
                next(ApiError.notFound('no posts found'));
            } else res.status(200).json(allRows);
        } catch (err) {
            next(ApiError.internalServerError('internal server error, try to contact administrators'));
        }
    }

    async createPost(req, res, next) {
        try {
            const {idUser, title, description} = req.body;
            const rowCreated = await postService.createPost(idUser, title, description);
            res.location('http://' + process.env.PGHOST + ':' + process.env.SERVERPORT + req.originalUrl + '/' + rowCreated.id);
            res.status(201).json();
        } catch (err) {
            next(ApiError.internalServerError('internal server error, try to contact administrators'));
        }
    }

    async updatePost(req, res, next) {
        try {
            const id = req.params.id;
            const {title, description} = req.body;
            const rowUpdated = await postService.updatePost(id, title, description);
            if (rowUpdated.length === 0) {
                next(ApiError.notFound('no post found with this id, can\'t update it'));
            } else res.status(200).json();
        } catch (err) {
            next(ApiError.internalServerError('internal server error, try to contact administrators'));
        }
    }

    async deletePost(req, res, next) {
        try {
            const id = req.params.id;
            const rowDeleted = await postService.deletePost(id);
            if (rowDeleted.length === 0) {
                next(ApiError.notFound('no post found with this id, can\'t delete it'));
            } else res.status(204).json();
        } catch (err) {
            next(ApiError.internalServerError('internal server error, try to contact administrators'));
        }
    }
}

module.exports = new PostController();
