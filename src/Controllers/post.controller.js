import { Router } from "express";
import { postService } from "../servicesposts.services";

class postController { 
   async getAll (req,res) => 
    const post = await postService.getAll()
    return res.json(post)
};
