import { Router } from "express";
import { createFriendsController } from "../../Modules/Accounts/useCases/createFriend";
import { listFriendsController } from "../../Modules/Accounts/useCases/listFriends";
import { listFriendsUnicController } from "../../Modules/Accounts/useCases/listFriendsUnic";



const groupsFriends = Router();

groupsFriends.post("/", (req, res) => {
  return createFriendsController.handle(req, res);
});


groupsFriends.get("/", (req, res) => {
  return listFriendsController.handle(req, res);
});
groupsFriends.get("/filter/:idAccount", (req, res) => {
  return listFriendsUnicController.handle(req, res);
});

export { groupsFriends };
