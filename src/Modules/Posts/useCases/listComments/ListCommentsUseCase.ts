import { collections } from "../../../../../services/database.service";
import { Comments } from "../../models/Comments";
import { ICommentsRepository } from "../../repositories/ICommentsRepository";

class ListCommentsUseCase {
  constructor(private CommentssRepository: ICommentsRepository) {
    " ";
  }

  async execute() {
    
   const comments = await collections.comments.find({});
   const commentsAll = comments.toArray(function(err, result){
    console.log(result)
    return result;
   })
//console.log(commentsAll)
        }
  }

export { ListCommentsUseCase };
