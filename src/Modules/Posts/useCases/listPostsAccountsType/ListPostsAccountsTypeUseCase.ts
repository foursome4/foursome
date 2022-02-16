import { collections } from "../../../../../services/database.service";
import { Posts } from "../../models/Posts";
import { IPostsRepository } from "../../repositories/IPostsRepository";

class ListPostsAccountsTypeUseCase {
  constructor(private PostsRepository: IPostsRepository) {
    " ";
  }

  async execute() {
    
   const post = await collections.post.find({});
   const postAll = post.toArray(function(err, result){
    console.log(result)
    return result;
   })
//console.log(postAll)
        }
  }

export { ListPostsAccountsTypeUseCase };
