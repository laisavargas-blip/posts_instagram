import { Router } from "express";
import {postsService} from "../service"

export const postRoute = router()

PostRoutes.getById("/:id", async(req, res) => {
    try{
        const post = await postsService.getById(req.params.id);
        res.json(post)
    } catch (error) {
        res.status(500).json({ error });
    }
});
postRoutes.get("/", async(req, res) => {
    try{
        const post = await postsService.getAll();
        res.json(post)
    } catch (error) {
        res.status(500).json({ error });
    }
});
postRoute.post("/", async(req, res) => {
    try{
        const post = await postsService.create(req.body);
        res.status(201).json(post)}
});