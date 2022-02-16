import { collections } from "../../../../../services/database.service";
import { Reactions } from "../../models/Reactions";
import { IReactionsRepository } from "../../repositories/IReactionsRepository";

class ListReactionsUseCase {
  constructor(private ReactionssRepository: IReactionsRepository) {
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

export { ListReactionsUseCase };
