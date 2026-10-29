import {pool} from "../database/db.js"

class postsService{
    async getAll(){
        const post = await knex("SELECT * FROM posts")
        return post 
    }
}