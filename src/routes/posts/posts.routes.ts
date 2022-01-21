import { Router } from "express";
import { createPostController } from "../../Modules/Posts/useCases/createPosts";
import { listPostsController } from "../../Modules/Posts/useCases/listPosts";
import { listPostsAllController } from "../../Modules/Posts/useCases/listPostsAll";



const postsRoutes = Router();

postsRoutes.post("/", (req, res) => {
  return createPostController.handle(req, res);
});

postsRoutes.post("/filter", (req, res) => {
  return listPostsController.handle(req, res);
});
postsRoutes.post("/filter/all", (req, res) => {
  return listPostsAllController.handle(req, res);
});
postsRoutes.post("/groups", (req, res) => {
  return listPostsController.handle(req, res);
});
postsRoutes.post("/foruns", (req, res) => {
  return listPostsController.handle(req, res);
});



export { postsRoutes };
