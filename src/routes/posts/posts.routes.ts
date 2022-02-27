import { Router } from "express";
import { createPostController } from "../../Modules/Posts/useCases/createPosts";
import { deletePostController } from "../../Modules/Posts/useCases/deletePosts";
import { listPostEventsController } from "../../Modules/Posts/useCases/listPostEvents";
import { listPostForunsController } from "../../Modules/Posts/useCases/listPostForuns";
import { listPostGroupsController } from "../../Modules/Posts/useCases/listPostGroups";
import { listPostGroupsTypeController } from "../../Modules/Posts/useCases/listPostGroupsType";
import { listPostsController } from "../../Modules/Posts/useCases/listPosts";
import { listPostsAccountsTypeController } from "../../Modules/Posts/useCases/listPostsAccountsType";
import { listPostsAllController } from "../../Modules/Posts/useCases/listPostsAll";



const postsRoutes = Router();

postsRoutes.post("/", (req, res) => {
  return createPostController.handle(req, res);
});
postsRoutes.delete("/:id", (req, res) => {
  return deletePostController.handle(req, res);
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
postsRoutes.get("/groups/:idGroup", (req, res) => {
  return listPostGroupsController.handle(req, res);
});
postsRoutes.get("/foruns/:idForum", (req, res) => {
  return listPostForunsController.handle(req, res);
});
postsRoutes.get("/events/:idEvent", (req, res) => {
  return listPostEventsController.handle(req, res);
});
postsRoutes.get("/groups/:idGroup/:type", (req, res) => {
  return listPostGroupsTypeController.handle(req, res);
});




export { postsRoutes };
