import { Router } from "express";
import { createFriendsController } from "../../Modules/Accounts/useCases/createFriend";
import { listFriendsController } from "../../Modules/Accounts/useCases/listFriends";



const groupsFriends = Router();

groupsFriends.post("/", (req, res) => {
  return createFriendsController.handle(req, res);
});


groupsFriends.get("/", (req, res) => {
  return listFriendsController.handle(req, res);
});

export { groupsFriends };
