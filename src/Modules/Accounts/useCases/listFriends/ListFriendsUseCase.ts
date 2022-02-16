import { collections } from "../../../../../services/database.service";
import { Friends } from "../../models/Friends";
import { IFriendsRepository } from "../../repositories/IFriendsRepository";

class ListFriendsUseCase {
  constructor(private FriendsRepository: IFriendsRepository) {
    " ";
  }

  async execute() {
   const friends = await collections.friends.find({});
   const friendsAll = friends.toArray(function(err, result){
    console.log(result)
    return result;
   })
//console.log(friendsAll)
        }
  }

export { ListFriendsUseCase };
