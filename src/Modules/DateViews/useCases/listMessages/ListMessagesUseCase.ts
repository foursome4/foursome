import { collections } from "../../../../../services/database.service";
import { Messages } from "../../models/Messages";
import { IMessagesRepository } from "../../repositories/IMessagesRepository";

class ListMessagesUseCase {
  constructor(private MessagesRepository: IMessagesRepository) {
    " ";
  }

  async execute() {
    
   const post = await collections.message.find({});
   const postAll = post.toArray(function(err, result){
    console.log(result)
    return result;
   })
//console.log(postAll)
        }
  }

export { ListMessagesUseCase };
