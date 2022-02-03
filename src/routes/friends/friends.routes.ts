import { Router } from "express";
import { createFriendsController } from "../../Modules/Accounts/useCases/createFriend";
import { listFriendsController } from "../../Modules/Accounts/useCases/listFriends";
import { listFriendsUnicController } from "../../Modules/Accounts/useCases/listFriendsUnic";
import { updateFriendsController } from "../../Modules/Accounts/useCases/updateFriends";



const groupsFriends = Router();

groupsFriends.post("/", (req, res) => {
  return createFriendsController.handle(req, res);
});


groupsFriends.get("/:id", (req, res) => {
  return listFriendsController.handle(req, res);
});
groupsFriends.get("/filter/:idAccount", (req, res) => {
  return listFriendsUnicController.handle(req, res);
});

groupsFriends.patch("/:idAccount", (req, res) => {
  return updateFriendsController.handle(req, res)
})

export { groupsFriends };
