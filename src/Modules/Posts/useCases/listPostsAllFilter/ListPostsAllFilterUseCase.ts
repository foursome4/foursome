import { collections } from "../../../../../services/database.service";
import { Posts } from "../../models/Posts";
import { IPostsRepository } from "../../repositories/IPostsRepository";

class ListPostsAllFilterUseCase {
  constructor(private PostssRepository: IPostsRepository) {
    " ";
  }

  async execute() {
    
   const post = await collections.post.find({});
   const postAllFilter = post.toArray(function(err, result){
    console.log(result)
    return result;
   })
//console.log(postAllFilter)
        }
  }

export { ListPostsAllFilterUseCase };
