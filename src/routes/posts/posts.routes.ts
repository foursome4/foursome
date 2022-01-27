import { Router } from "express";
import { createPostController } from "../../Modules/Posts/useCases/createPosts";
import { listPostsController } from "../../Modules/Posts/useCases/listPosts";
import { listPostsAccountsTypeController } from "../../Modules/Posts/useCases/listPostsAccountsType";
import { listPostsAllController } from "../../Modules/Posts/useCases/listPostsAll";



const postsRoutes = Router();

postsRoutes.post("/", (req, res) => {
  return createPostController.handle(req, res);
});

postsRoutes.get("/filter/accounts/:idAccount", (req, res) => {
  return listPostsController.handle(req, res);
});
postsRoutes.get("/filter/:idAccount/:type", (req, res) => {
  return listPostsAccountsTypeController.handle(req, res);
});
postsRoutes.get("/filter/:type", (req, res) => {
  return listPostsAllController.handle(req, res);
});
postsRoutes.get("/all", (req, res) => {
  return listPostsAllController.handle(req, res);
});
postsRoutes.get("/groups", (req, res) => {
  return listPostsController.handle(req, res);
});
postsRoutes.get("/foruns", (req, res) => {
  return listPostsController.handle(req, res);
});



export { postsRoutes };
