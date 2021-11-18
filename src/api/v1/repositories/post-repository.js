const db = require('../../../config/database-config');

class PostDAO {
    async getPost(id) {
        return await db.any('select * from public.posts where id=$1;',
            [id]);
    }

    async getPosts() {
        return await db.any('select * from public.posts;');
    }

    async createPost(idUser, title, description) {
        return await db.one('insert into public.posts(id_user, title, description) VALUES ($1, $2, $3) returning id;',
            [idUser, title, description]);
    }

    async updatePost(id, title, description) {
        return await db.any('update public.posts set title=$1, description=$2 where id=$3 returning id;',
            [title, description, id]);
    }

    async deletePost(id) {
        return await db.any('delete from public.posts where id=$1 returning id;',
            [id]);
    }
}

module.exports = new PostDAO();
