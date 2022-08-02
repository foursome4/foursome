import { collections } from "../../../../../services/database.service";
import { DateReadMessageChat } from "../../models/DateReadMessageChat";
import { IDateReadMessageChatRepository } from "../../repositories/IDateReadMessageChatRepository";

class ListDateReadMessageChatUseCase {
  constructor(private DateReadMessageChatsRepository: IDateReadMessageChatRepository) {
    " ";
  }

  async execute() {
   const post = await collections.dateReadMessageChat.find({});
   const postAll = post.toArray(function(err, result){
    console.log(result)
    return result;
   })
//console.log(postAll)
        }
  }

export { ListDateReadMessageChatUseCase };
