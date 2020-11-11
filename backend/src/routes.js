const express = require("express")
const multer = require("multer")
const UploadConfig = require("./config/upload")
const PostController = require("./controllers/PostController")
const LikeController = require("./controllers/LikeController")


const routes = new express.Router()
const upload = multer(UploadConfig)

routes.get("/posts", PostController.index)
routes.post("/posts", upload.single("img"), PostController.store)

routes.post("/posts/:id/like", LikeController.store)

module.exports = routes