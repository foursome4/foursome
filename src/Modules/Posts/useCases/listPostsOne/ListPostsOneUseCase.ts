import { collections } from "../../../../../services/database.service";
import { Posts } from "../../models/Posts";
import { IPostsRepository } from "../../repositories/IPostsRepository";

class ListPostsOneUseCase {
  constructor(private PostssRepository: IPostsRepository) {
    " ";
  }

  async execute() {
    
   const post = await collections.post.find({});
   const postOne = post.toArray(function(err, result){
    console.log(result)
    return result;
   })
//console.log(postOne)
        }
  }

export { ListPostsOneUseCase };
