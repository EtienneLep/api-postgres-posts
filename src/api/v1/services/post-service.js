//couche service, peu important pour l'instant mais devient indispensable si l'API devient plus complexe
const postDAO = require('../repositories/post-repository');

class PostService {
    async getPost(id) {
        return postDAO.getPost(id);
    }

    async getPosts() {
        return postDAO.getPosts();
    }

    async createPost(idUser, title, description) {
        return postDAO.createPost(idUser, title, description);
    }

    async updatePost(id, title, description) {
        return postDAO.updatePost(id, title, description);
    }

    async deletePost(id) {
        return postDAO.deletePost(id);
    }
}

module.exports = new PostService();
