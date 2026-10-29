import {postsroute} from "./routes/post.route.js"
import express from "express";

const port = 3000
const app = express()

app.use(express.json())
app.use("/posts", postsRouter)

app.listen (port, => {
    console.log(`rodando em http://localhost:${port}`)
})