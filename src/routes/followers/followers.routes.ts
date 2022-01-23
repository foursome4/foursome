import { Router } from "express";
import { createFollowersController } from "../../Modules/Accounts/useCases/createFollowers";
import { listFriendsController } from "../../Modules/Accounts/useCases/listFriends";



const groupsFollowers = Router();

groupsFollowers.post("/", (req, res) => {
  return createFollowersController.handle(req, res);
});


groupsFollowers.get("/", (req, res) => {
  return listFriendsController.handle(req, res);
});

export { groupsFollowers };
