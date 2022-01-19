import { Router } from "express";
import { createFriendsController } from "../../Modules/Accounts/useCases/createFriend";
import { listFriendsController } from "../../Modules/Accounts/useCases/listFriends";
import { updateInformationsController } from "../../Modules/Accounts/useCases/updateInformations";
import { listGroupController } from "../../Modules/Groups/useCases/listGroup";



const groupsFriends = Router();

groupsFriends.post("/", (req, res) => {
  return createFriendsController.handle(req, res);
});

groupsFriends.patch("/", (req, res) => {
  return updateInformationsController.handle(req, res)
})
groupsFriends.get("/", (req, res) => {
  return listFriendsController.handle(req, res);
});

export { groupsFriends };
