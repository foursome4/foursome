import { collections } from "../../../../../services/database.service";
import { UsersOnline } from "../../models/UsersOnline";
import { IUsersOnlineRepository } from "../../repositories/IUsersOnlineRepository";

class ListUsersOnlineDistanceUseCase {
  constructor(private UsersOnlinesRepository: IUsersOnlineRepository) {
    " ";
  }

  async execute() {
    
   const post = await collections.usersOnline.find({});
   const postAll = post.toArray(function(err, result){
    console.log(result)
    return result;
   })
//console.log(postAll)
        }
  }

export { ListUsersOnlineDistanceUseCase };
