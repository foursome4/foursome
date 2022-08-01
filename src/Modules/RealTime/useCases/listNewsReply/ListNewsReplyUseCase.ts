import { collections } from "../../../../../services/database.service";
import { NewsReply } from "../../models/NewsReply";
import { INewsReplyRepository } from "../../repositories/INewsReplyRepository";

class ListNewsReplyUseCase {
  constructor(private NewsReplysRepository: INewsReplyRepository) {
    " ";
  }

  async execute() {
    
   const NewsReply = await collections.newsreply.find({});
   const NewsReplyAll = NewsReply.toArray(function(err, result){
    console.log(result)
    return result;
   })
//console.log(NewsReplyAll)
        }
  }

export { ListNewsReplyUseCase };
