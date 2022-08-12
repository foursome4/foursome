import { Router } from "express";
import { createPostController } from "../../Modules/Posts/useCases/createPosts";
import { deletePostController } from "../../Modules/Posts/useCases/deletePosts";
import { listAllPostsController } from "../../Modules/Posts/useCases/listAllPosts";
import { listPostEventsController } from "../../Modules/Posts/useCases/listPostEvents";
import { listPostForunsController } from "../../Modules/Posts/useCases/listPostForuns";
import { listPostGroupsController } from "../../Modules/Posts/useCases/listPostGroups";
import { listPostGroupsTypeController } from "../../Modules/Posts/useCases/listPostGroupsType";
import { listPostsController } from "../../Modules/Posts/useCases/listPosts";
import { listPostsAccountsTypeController } from "../../Modules/Posts/useCases/listPostsAccountsType";
import { listPostsAllController } from "../../Modules/Posts/useCases/listPostsAll";
import { listPostsAllFilterController } from "../../Modules/Posts/useCases/listPostsAllFilter";
import { listPostsAllFilterNotController } from "../../Modules/Posts/useCases/listPostsAllFilterNot";
import { listPostsOneController } from "../../Modules/Posts/useCases/listPostsOne";
import { updateLikController } from "../../Modules/Posts/useCases/updateLike";
import { updatePostsController } from "../../Modules/Posts/useCases/updatePost";



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
postsRoutes.post("/preferences/:ufAccount", (req, res) => {
  return listPostsAllFilterController.handle(req, res);
});
postsRoutes.post("/difference", (req, res) => {
  return listPostsAllFilterNotController.handle(req, res);
});
postsRoutes.get("/all", (req, res) => {
  return listAllPostsController.handle(req, res);
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
postsRoutes.patch("/:id", (req, res) => {
  return updatePostsController.handle(req, res);
});
postsRoutes.get("/one/:id", (req, res) => {
  return listPostsOneController.handle(req, res);
});
postsRoutes.patch("/like/:id", (req, res) => {
  return updateLikController.handle(req, res);
});




export { postsRoutes };
