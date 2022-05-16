import { collections } from "../../../../../services/database.service";
import { Comments } from "../../models/Payments";
import { ICommentsRepository } from "../../repositories/IPaymentsRepository";

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
