import { Router } from "express";

import { createUsersController } from "../../Modules/Users/useCases/createUsers";

const usersRoutes = Router();

usersRoutes.post("/", (req, res) => {
  return createUsersController.handle(req, res);
});

export { usersRoutes };
