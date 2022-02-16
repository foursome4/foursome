import { collections } from "../../../../../services/database.service";
import { Followers } from "../../models/Followers";
import { IFollowersRepository } from "../../repositories/IFollowersRepository";

class ListFollowersUseCase {
  constructor(private FollowersRepository: IFollowersRepository) {
    " ";
  }

  async execute() {
   const followers = await collections.followers.find({});
   const followersAll = followers.toArray(function(err, result){
    console.log(result)
    return result;
   })
  // console.log(followersAll)
        }
  }

export { ListFollowersUseCase };
