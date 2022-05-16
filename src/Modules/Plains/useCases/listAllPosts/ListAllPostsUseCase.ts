import { collections } from "../../../../../services/database.service";
import { Posts } from "../../models/Plains";
import { IPostsRepository } from "../../repositories/IPlainsRepository";

class ListAllPostsUseCase {
  constructor(private PostssRepository: IPostsRepository) {
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

export { ListAllPostsUseCase };
