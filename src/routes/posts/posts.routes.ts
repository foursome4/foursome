import { Router } from "express";
import { createPostController } from "../../Modules/Posts/useCases/createPosts";



const postsRoutes = Router();

postsRoutes.post("/", (req, res) => {
  return createPostController.handle(req, res);
});


export { postsRoutes };
