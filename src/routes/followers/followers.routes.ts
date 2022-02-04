import { Router } from "express";
import { createFollowersController } from "../../Modules/Accounts/useCases/createFollowers";
import { deleteFollowersController } from "../../Modules/Accounts/useCases/deleteFollowers";
import { listFollowersUserController } from "../../Modules/Accounts/useCases/listFollowersUser";
import { listFriendsController } from "../../Modules/Accounts/useCases/listFriends";



const groupsFollowers = Router();

groupsFollowers.post("/", (req, res) => {
  return createFollowersController.handle(req, res);
});


groupsFollowers.get("/", (req, res) => {
  return listFriendsController.handle(req, res);
});

groupsFollowers.get("/filter/:idAccount", (req, res) => {
  return listFollowersUserController.handle(req, res);
});

groupsFollowers.delete("/:id", (req, res) => {
  return deleteFollowersController.handle(req, res);
});

export { groupsFollowers };
