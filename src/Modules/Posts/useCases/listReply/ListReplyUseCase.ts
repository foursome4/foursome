import { collections } from "../../../../../services/database.service";
import { Reply } from "../../models/Reply";
import { IReplyRepository } from "../../repositories/IReplyRepository";

class ListReplyUseCase {
  constructor(private ReplysRepository: IReplyRepository) {
    " ";
  }

  async execute() {
    
   const Reply = await collections.reply.find({});
   const ReplyAll = Reply.toArray(function(err, result){
    console.log(result)
    return result;
   })
//console.log(ReplyAll)
        }
  }

export { ListReplyUseCase };
