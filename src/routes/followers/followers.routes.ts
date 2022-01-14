import { Router } from "express";
import { createFollowersController } from "../../Modules/Accounts/useCases/createFollowers";
import { updateInformationsController } from "../../Modules/Accounts/useCases/updateInformations";
import { listGroupController } from "../../Modules/Groups/useCases/listGroup";



const groupsFollowers = Router();

groupsFollowers.post("/", (req, res) => {
  return createFollowersController.handle(req, res);
});

groupsFollowers.patch("/", (req, res) => {
  return updateInformationsController.handle(req, res)
})
groupsFollowers.get("/", (req, res) => {
  return listGroupController.handle(req, res);
});

export { groupsFollowers };
